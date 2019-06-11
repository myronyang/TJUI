<template>
  <div class="picker" :class="{ 'picker-3d': rotateEffect }">
    <div class="picker-toolbar" v-if="showToolbar">
      <slot></slot>
    </div>
    <div class="picker-items">
      <picker-slot
        v-for="(slot, index) in slots"
        :valueKey="valueKey"
        :values="slot.values || []"
        :text-align="slot.textAlign || 'center'"
        :visible-item-count="visibleItemCount"
        :class-name="slot.className"
        :flex="slot.flex"
        v-model="values[slot.valueIndex]"
        :rotate-effect="rotateEffect"
        :divider="slot.divider"
        :content="slot.content"
        :itemHeight="itemHeight"
        :default-index="slot.defaultIndex"
        :key="index"
      ></picker-slot>
      <div
        class="picker-center-highlight"
        :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import pickerSlot from './picker-slot'
export default {
  name: "tj-picker",
  componentName: "picker",
  props: {
    slots: {
      type: Array
    },
    showToolbar: {
      type: Boolean,
      default: false
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: String,
    rotateEffect: {
      type: Boolean,
      default: false
    },
    itemHeight: {
      type: Number,
      default: 36
    }
  },
  created() {
    this.$on("slotValueChange", this.slotValueChange);
    this.slotValueChange();
  },
  methods: {
    slotValueChange() {
      this.$emit("change", this, this.values);
    },
    getSlot(slotIndex) {
      var slots = this.slots || [];
      var count = 0;
      var target;
      var children = this.$children.filter(
        child => child.$options.name === "picker-slot"
      );
      slots.forEach(function(slot, index) {
        if (!slot.divider) {
          if (slotIndex === count) {
            target = children[index];
          }
          count++;
        }
      });
      return target;
    },
    getSlotValue(index) {
      var slot = this.getSlot(index);
      if (slot) {
        return slot.currentValue;
      }
      return null;
    },
    setSlotValue(index, value) {
      var slot = this.getSlot(index);
      if (slot) {
        slot.currentValue = value;
      }
    },
    getSlotValues(index) {
      var slot = this.getSlot(index);
      if (slot) {
        return slot.mutatingValues;
      }
      return null;
    },
    setSlotValues(index, values) {
      var slot = this.getSlot(index);
      if (slot) {
        slot.mutatingValues = values;
      }
    },
    getValues() {
      return this.values;
    },
    setValues(values) {
      var slotCount = this.slotCount;
      values = values || [];
      if (slotCount !== values.length) {
        throw new Error("values length is not equal slot count.");
      }
      values.forEach((value, index) => {
        this.setSlotValue(index, value);
      });
    }
  },
  computed: {
    values: {
      get() {
        var slots = this.slots || [];
        var values = [];
        var valueIndexCount = 0;
        slots.forEach(slot => {
          if (!slot.divider) {
            slot.valueIndex = valueIndexCount++;
            values[slot.valueIndex] = (slot.values || [])[
              slot.defaultIndex || 0
            ];
          }
        });
        return values;
      }
    },
    slotCount() {
      var slots = this.slots || [];
      var result = 0;
      slots.forEach(function(slot) {
        if (!slot.divider) result++;
      });
      return result;
    }
  },
  components: {
    pickerSlot
  }
};
</script>
