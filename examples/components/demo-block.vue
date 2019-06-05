<template>
  <div class="docs-demo-wrapper">
    <div v-show="isExpand" class="demo-container">
      <div span="14">
        <div class="docs-demo docs-demo--expand">
          <div class="highlight-wrapper">
            <slot name="highlight"></slot>
          </div>
        </div>
      </div>
    </div>
    <span class="docs-trans docs-demo__triangle" @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpand: false
    };
  },
  methods: {
    toggle() {
      this.isExpand = !this.isExpand;
    }
  }
};
</script>

<style lang="stylus">
.demo-block {
  margin-top: 15px;
  max-width: 720px;
}

.docs-demo-wrapper {
  max-width: 720px;
}

.demo-container {
  transition: max-height 0.3s ease;
  overflow: hidden;
}

.docs-demo {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  font-size: 0.875rem; /* 14/16 */
  background-color: #282c34;
  border-top: none;
  margin-top: 15px;
  border-radius: 5px;

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

.docs-demo__code, .highlight-wrapper, .docs-demo__meta {
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

  p, pre {
    margin: 0;
  }

  .language-html {
    color: #eee;
  }

  .hljs {
    padding: 0;
  }

  .hljs-tag {
    color: #cc99cd;
  }

  .hljs-attr {
    color: #cfa3ec;
    margin-left: 5px;
  }

  .hljs-name {
    color: #e2777a;
  }

  .hljs-string {
    color: #eee;
  }

  .javascript {
    color: #eee;

    .hljs-function {
      color: #f08d49;
    }

    .hljs-params {
      color: #67cdcc;
    }

    .hljs-number {
      color: #f08d49;
    }

    .hljs-keyword {
      color: #cfa3ec;
    }

    .hljs-string {
      color: #7ec699;
    }

    .hljs-literal {
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
  border-radius: 0.25rem /* 4/16 */ 0.25rem /* 4/16 */ 0 0;
  background: -webkit-linear-gradient(rgba(55, 55, 55, 0.98), #545456);
  background: linear-gradient(rgba(55, 55, 55, 0.98), #545456);
  text-align: center;
  padding: 0.5rem; /* 8/16 */

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
