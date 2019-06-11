<template>
  <tj-popup class="tj-select" v-model="popupVisible" :modal="modal" position="bottom">
    <div class="tj-select__title">
      <tj-row>
        <tj-col :span="4">
          <span @click="handleCancel">取消</span>
        </tj-col>
        <tj-col :span="4" align="center">
          <span v-if="title">{{title}}</span>
        </tj-col>
        <tj-col :span="4" align="right">
          <span @click="handleConfirm">确认</span>
        </tj-col>
      </tj-row>
    </div>
    <picker
      v-if="slots.length > 0"
      :slots="slots"
      :value-key="valueKey"
      @change="onPickerChange"
      :visible-item-count="5"
    ></picker>
  </tj-popup>
</template>

<script>
import picker from './picker'
export default {
  name: "tj-select",
  props: {
    modal: {
      default: true
    },
    value: {},
    title: String,
    visible: Boolean,
    options: Array,
    valueKey: String,
    selectKey: String,
    itemCount: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      popupVisible: this.visible,
      slots: []
    };
  },

  created() {
    this.setSlots(this.options);
  },

  methods: {
    handleCancel() {
      this.popupVisible = false;
      this.$emit("cancel");
    },
    onPickerChange(picker, values) {
      if (!values[0]) return;
      for (let i = 1; i < this.itemCount; i++) {
        picker.setSlotValues(i, values[i - 1].children || []);
      }
      this.$emit("change", picker, values)
      this.selected = this.itemCount > 1 ? values : values[0];
    },

    handleConfirm() {
      let { selected, selectKey, itemCount } = this;

      if (selectKey) {
        if (itemCount > 1) {
          selected = selected.map(item => item[this.selectKey]);
        } else {
          selected = selected[selectKey];
        }
      }
      this.popupVisible = false;

      this.$emit("input", selected);
      this.$emit("confirm");
    },

    setSlots(options) {
      if (options.length === 0) return;
      this.slots = []
      let { slots, value, selectKey, itemCount } = this;
      
      let _index = 0;

      if (value) {
        this._l(options, (item, index) => {
          const selectItem = selectKey ? item[selectKey] : item;
          if (value === selectItem) _index = index;
        });
      }

      for (let i = 1; i <= this.itemCount; i++) {
        if (i !== 1) options = options[0].children;

        slots.push({
          flex: 1,
          values: options,
          className: `slot${i}`,
          textAlign: "center",
          defaultIndex: _index
        });

        if (i !== this.itemCount) {
          slots.push({
            divider: true,
            content: "-",
            className: `slot${i + 1}`
          });
        }
      }
    }
  },

  watch: {
    options(value) {
      this.setSlots(value);
    },
    visible(value) {
      this.popupVisible = value;
    },
    popupVisible(value) {
      this.$emit("update:visible", value);
    }
  },
  components: {
    picker
  }
};
</script>
