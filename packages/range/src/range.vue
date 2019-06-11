<template>
  <div class="tj-range" :class="{ 'tj-range--disabled': disabled }">
    <div class="tj-range__inner">
      <slot name="start"></slot>
      <div class="tj-range__content" ref="content">
        <div class="tj-range__contentInner">
          <div class="tj-range__runway" :style="{ 'border-top-width': barHeight + 'px' }"></div>
          <div
            class="tj-range__progress"
            :style="{ width: progress + '%', height: barHeight + 'px' }"
          ></div>
          <div class="tj-range__thumb" ref="thumb" :style="{ left: progress + '%' }"></div>
        </div>
        <!-- <div class="tj-range__list" :style="{ marginTop: barHeight + 12 + 'px' }" v-if="showList">
          <div class="tj-range__step tj-range--active" v-for="item in contexts">
            <span class="tj-range__txt">{{item}}</span>
            <label class="tj-range__unit" v-if="unit">{{unit}}</label>
          </div>
        </div> -->
      </div>
      <slot name="end"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
import draggable from "./draggable";
export default {
  name: "tj-range",
  props: {
    unit: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    showList: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number
    },
    barHeight: {
      type: Number,
      default: 2
    }
  },
  computed: {
    progress() {
      const value = this.value;
      if (typeof value === "undefined" || value === null) return 0;
      return Math.floor(((value - this.min) / (this.max - this.min)) * 100);
    },
    contexts() {
      const nodes = Number(((this.max - this.min) / this.step).toFixed(0));
      const contexts = [];
      for (let i = 0; i <= nodes; i++) {
        const element = (this.min + i * this.step).toFixed(0);
        contexts.push(this.min + i * this.step);
      }
      return contexts;
    }
  },
  mounted() {
    const thumb = this.$refs.thumb;
    const content = this.$refs.content;
    const getThumbPosition = () => {
      const contentBox = content.getBoundingClientRect();
      const thumbBox = thumb.getBoundingClientRect();
      return {
        left: thumbBox.left - contentBox.left,
        top: thumbBox.top - contentBox.top,
        thumbBoxLeft: thumbBox.left
      };
    };
    let dragState = {};
    draggable(thumb, {
      start: event => {
        if (this.disabled) return;
        const position = getThumbPosition();
        const thumbClickDetalX = event.clientX - position.thumbBoxLeft;
        dragState = {
          thumbStartLeft: position.left,
          thumbStartTop: position.top,
          thumbClickDetalX: thumbClickDetalX
        };
      },
      drag: event => {
        if (this.disabled) return;
        const contentBox = content.getBoundingClientRect();
        const deltaX =
          event.pageX -
          contentBox.left -
          dragState.thumbStartLeft -
          dragState.thumbClickDetalX;
        const stepCount = Math.ceil((this.max - this.min) / this.step);
        const newPosition =
          dragState.thumbStartLeft +
          deltaX -
          ((dragState.thumbStartLeft + deltaX) %
            (contentBox.width / stepCount));
        let newProgress = newPosition / contentBox.width;
        if (newProgress < 0) {
          newProgress = 0;
        } else if (newProgress > 1) {
          newProgress = 1;
        }

        this.$emit(
          "input",
          Math.round(this.min + newProgress * (this.max - this.min))
        );
      },
      end: () => {
        if (this.disabled) return;
        this.$emit("change", this.value);
        dragState = {};
      }
    });
  }
};
</script>
