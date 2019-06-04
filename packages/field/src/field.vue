<template>
  <div class="tj-field">
    <div class="tj-field__inner">
      <span class="tj-field__icon tj-icon" :class="icon" v-if="icon"></span>
      <span class="tj-field__title" v-if="title" :style="'flex: 0 0' + labelWidth">
        {{title}}
        <b class="tj-field__must" v-if="must">*</b>
      </span>
      <div class="tj-field__box">
        <textarea
          v-if="type==='textarea'"
          class="tj-field__textarea"
          :placeholder="placeholder"
          :rows="rows"
          :disabled="disabled"
          v-model="currentValue"
        ></textarea>
        <input
          v-else
          class="tj-field__input"
          :type="type"
          :value="currentValue"
          :disabled="disabled ? 'disabled' : false"
          :placeholder="placeholder"
          @change="handleChange"
          @blur="handleBlur"
          @input="handleInput"
        >
        <i
          class="tj-field__clear tj-icon tj-close-b"
          v-show="colseVisible"
          @click="currentValue = ''"
        ></i>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tj-field",
  props: {
    value: [String, Number],
    title: String,
    labelWidth: {
      type: String,
      default: "70px"
    },
    must: Boolean,
    rows: String,
    icon: String,
    placeholder: String,
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      colseVisible: false,
      currentValue:
        this.value === undefined || this.value === null ? "" : this.value
    };
  },

  methods: {
    handleInput(event) {
      this.currentValue = event.target.value;
      this.$emit("input", this.currentValue);
    },

    handleChange(event) {
      this.$emit("change", event);
    },

    handleBlur(event) {
      setTimeout(() => {
        this.colseVisible = false;
      }, 100);
      this.$emit("blur", event);
    }
  },

  watch: {
    value: {
      handler(value) {
        this.colseVisible = value.length === 0 ? false : true;
        this.currentValue = value;
      },
      deep: true
    }
  }
};
</script>
