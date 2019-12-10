<template>
  <div class="docs-demo-wrapper">
    <div v-show="isExpand" class="demo-container">
      <div class="docs-demo docs-demo--expand">
        <a
          class="copy-code"
          href="javascript:;"
          @click="handleCopyCode"
          :data-clipboard-text="copyText"
        >复制代码</a>
        <div class="highlight-wrapper" ref="code">
          <slot name="highlight"></slot>
        </div>
      </div>
    </div>
    <!-- <span class="docs-trans docs-demo__triangle" @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</span> -->
  </div>
</template>

<script>
import Clipboard from "clipboard";
import TJUI from "../../src/index";
export default {
  data() {
    return {
      copyText: "",
      isExpand: true
    };
  },
  methods: {
    handleCopyCode(e) {
      this.copyText = this.$slots.highlight[0].elm.innerText;
      const clipboard = new Clipboard(".copy-code");

      clipboard.on("success", e => {
        this.$toast("复制成功");
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        this.$toast("复制失败");
        clipboard.destroy();
      });
    },

    toggle() {
      this.isExpand = !this.isExpand;
    }
  }
};
</script>

<style lang="scss">
.demo-block {
  margin-top: 0.9375rem;
}

.docs-demo {
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  font-size: 0.875rem; /* 14/16 */
  background-color: #fff;
  border-top: none;
  margin-top: 0.9375rem;
  border-radius: 10px;
  box-shadow: 0 8px 12px #ebedf0;

  .copy-code {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #333;
    font-size: 12px;
  }

  pre code {
    font-family: Consolas, Menlo, Courier, monospace;
    line-height: 1.375rem; /* 22/16 */
    border: none;
  }
}

.docs-trans {
  width: 100%;
  text-align: right;
  display: inline-block;
  color: #9c27b0;
  font-size: 0.875rem; /* 14/16 */
  padding: 0.625rem /* 10/16 */ 0;
}

.docs-demo__code,
.highlight-wrapper,
.docs-demo__meta {
  overflow-y: auto;
}

.docs-demo__code {
  border-bottom: 0.0625rem /* 1/16 */ solid #eee;
}

.docs-demo.docs-demo--expand .docs-demo__meta {
  border-bottom: 0.0625rem /* 1/16 */ dashed #e9e9e9;
}

.docs-demo.docs-demo--expand .docs-demo__triangle {
  transform: rotate(180deg);
}

.highlight-wrapper {
  display: none;

  p,
  pre {
    margin: 0;
  }

  .language-html {
    color: #333;
  }

  .hljs {
    padding: 0;
  }

  .hljs-tag {
    color: #000;
    padding: 0 2px;
  }

  .hljs-attr {
    color: #333;
    margin-left: 5px;
  }

  .hljs-name {
    color: #9c27b0;
  }

  .hljs-string {
    color: #5758bb;
  }

  .javascript {
    color: #333;

    .hljs-attr {
      color: #000;
      margin-right: 3px;
    }

    .hljs-literal {
      color: #5758bb;
      padding: 0 2px;
    }

    .hljs-function {
      color: #f08d49;
    }

    .hljs-params {
      color: #67cdcc;
      padding: 0 2px;
    }

    .hljs-number {
      color: #f08d49;
      padding: 0 2px;
    }

    .hljs-keyword {
      color: #9c27b0;
      padding: 2px;
    }

    .hljs-string {
      color: #5758bb;
      padding: 0 2px;
      margin: 0 2px;
    }
  }
}

.docs-demo.docs-demo--expand .highlight-wrapper {
  display: block;
}

.docs-demo__code__mobi {
  height: 38.75rem; /* 620/16 */
  margin: 1.25rem /* 20/16 */ 0;
}

.docs-demo__code__mobi__header {
  border-radius: 4px 4px 0 0;
  background: linear-gradient(rgba(55, 55, 55, 0.98), #545456);
  text-align: center;
  padding: 0.5rem;

  img {
    width: 100%;
  }

  .url-box {
    height: 1.75rem; /* 28/16 */
    line-height: 1.75rem; /* 28/16 */
    color: #fff;
    padding: 0 0.1875rem; /* 3/16 */
    background-color: #a2a2a2;
    margin: 0.625rem /* 10/16 */ auto 0;
    border-radius: 0.25rem; /* 4/16 */
    white-space: nowrap;
    overflow-x: auto;
  }
}

.docs-demo__code__mobi__content {
  iframe {
    width: 100%;
    border: 0;
    height: 34.25rem; /* 548/16 */
  }
}
</style>
