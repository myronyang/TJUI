<template>
  <div class="tj-dialog-wrapper">
    <transition name="dialog-bounce">
      <div class="tj-dialog" v-show="value">
        <div class="tj-dialog__header" v-if="title !== ''">
          <div class="tj-dialog__title">{{ title }}</div>
        </div>
        <div class="tj-dialog__content" v-if="message !== ''">
          <div class="tj-dialog__message" v-html="message"></div>
          <div class="tj-dialog__input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div
              class="tj-dialog__errormsg"
              :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }"
            >{{ editorErrorMessage }}</div>
          </div>
        </div>
        <!-- <div class="tj-dialog__content" v-if="$slots.default">
          <slot></slot>
        </div> -->
        <div class="tj-dialog__btns">
          <button
            :class="[ cancelButtonClasses ]"
            v-show="showCancelButton"
            @click="handleAction('cancel')"
          >{{ cancelButtonText }}</button>
          <button
            :class="[ confirmButtonClasses ]"
            v-show="showConfirmButton"
            @click="handleAction('confirm')"
          >{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/babel">
let CONFIRM_TEXT = "确定";
let CANCEL_TEXT = "取消";

import Popup from "../../../src/utils/popup/index";

export default {
  name: "tj-dialog",
  mixins: [Popup],

  props: {
    modal: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    },
    inputType: {
      type: String,
      default: "text"
    }
  },

  data() {
    return {
      title: "",
      message: "",
      type: "",
      showInput: false,
      inputValue: null,
      inputPlaceholder: "",
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: "",
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: CONFIRM_TEXT,
      cancelButtonText: CANCEL_TEXT,
      confirmButtonClass: "",
      confirmButtonDisabled: false,
      cancelButtonClass: "",
      editorErrorMessage: null,
      callback: null
    };
  },

  computed: {
    confirmButtonClasses() {
      let classes =
        "tj-dialog__btn tj-dialog__confirm " + this.confirmButtonClass;
      if (this.confirmButtonHighlight) {
        classes += " tj-dialog-confirm-highlight";
      }
      return classes;
    },
    cancelButtonClasses() {
      let classes = "tj-dialog__btn tj-dialog__cancel " + this.cancelButtonClass;
      if (this.cancelButtonHighlight) {
        classes += " tj-dialog-cancel-highlight";
      }
      return classes;
    }
  },

  methods: {
    doClose() {
      this.value = false;
      this._closing = true;

      this.onClose && this.onClose();

      setTimeout(() => {
        if (this.modal && this.bodyOverflow !== "hidden") {
          document.body.style.overflow = this.bodyOverflow;
          document.body.style.paddingRight = this.bodyPaddingRight;
        }
        this.bodyOverflow = null;
        this.bodyPaddingRight = null;
      }, 200);
      this.opened = false;

      if (!this.transition) {
        this.doAfterClose();
      }
    },

    handleAction(action) {
      if (this.$type === "prompt" && action === "confirm" && !this.validate()) {
        return;
      }
      var callback = this.callback;
      this.value = false;
      callback(action);
    },

    validate() {
      if (this.$type === "prompt") {
        const inputPattern = this.inputPattern;
        if (inputPattern && !inputPattern.test(this.inputValue || "")) {
          this.editorErrorMessage =
            this.inputErrorMessage || "输入的数据不合法!";
          this.$refs.input.classList.add("invalid");
          return false;
        }
        const inputValidator = this.inputValidator;
        if (typeof inputValidator === "function") {
          const validateResult = inputValidator(this.inputValue);
          if (validateResult === false) {
            this.editorErrorMessage =
              this.inputErrorMessage || "输入的数据不合法!";
            this.$refs.input.classList.add("invalid");
            return false;
          }
          if (typeof validateResult === "string") {
            this.editorErrorMessage = validateResult;
            return false;
          }
        }
      }
      this.editorErrorMessage = "";
      this.$refs.input.classList.remove("invalid");
      return true;
    },

    handleInputType(val) {
      if (val === "range" || !this.$refs.input) return;
      this.$refs.input.type = val;
    }
  },

  watch: {
    inputValue() {
      if (this.$type === "prompt") {
        this.validate();
      }
    },

    value(val) {
      this.handleInputType(this.inputType);
      if (val && this.$type === "prompt") {
        setTimeout(() => {
          if (this.$refs.input) {
            this.$refs.input.focus();
          }
        }, 500);
      }
    },

    inputType(val) {
      this.handleInputType(val);
    }
  },
};
</script>