## Upload 上传图片

暂时仅支持图片上传，以后会扩展成多文件上传。

### 基本用法

可通过width设置尺寸

<div class="demo-block mt_15">
<tj-upload class="mr_10" v-model="imageUrl" action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile"></tj-upload>
<tj-upload v-model="imageUrl1" action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile"></tj-upload>
<script>
  export default {
    data() {
      return {
        imageUrl: "",
        imageUrl1: "https://img.yzcdn.cn/vant/cat.jpeg",
        imageUrl2: "",
        imageUrl3: "",
        imageUrl4: ""
      }
    },
    methods: {
      beforeUpload(file) {
        const isPng = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isPng) {
          this.$toast('上传头像图片只能是 PNG 格式!');
        }
        if (!isLt2M) {
          this.$toast('上传头像图片大小不能超过 2MB!');
        }
        return isPng && isLt2M;
      },
      onProgress(event) {
        console.log(event)
      },
      onSuccess(data) {
        this.$toast('上传成功!')
      }
    }
  }
</script>
</div>

::: demo
```html
<tj-upload v-model="imageUrl" action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile"></tj-upload>
<script>
  export default {
    data() {
      return {
        imageUrl: "",
        imageUrl1: "https://img.yzcdn.cn/vant/cat.jpeg"
      }
    }
  }
</script>
```
:::

### 进度设置

通过is-progress 显示进度条可设置line、circle两种状态，默认为line。

<div class="demo-block mt_15">
<tj-upload 
  class="mr_10"
  v-model="imageUrl2" 
  is-progress 
  action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile">
</tj-upload>
<tj-upload 
  v-model="imageUrl3" 
  is-progress 
  progress-type="circle"
  action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile">
</tj-upload>
</div>

::: demo
```html
<tj-upload 
  v-model="imageUrl2" 
  is-progress 
  action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile">
</tj-upload>
<tj-upload 
  v-model="imageUrl3" 
  is-progress 
  progress-type="circle"
  action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile">
</tj-upload>
<script>
  export default {
    data() {
      return {
        imageUrl2: "",
        imageUrl3: ""
      }
    }
  }
</script>
```
:::

### 回调事件
<div class="demo-block mt_15">
<tj-upload 
  v-model="imageUrl4" 
  is-progress
  :before-upload="beforeUpload" 
  :on-progress="onProgress" 
  :on-success="onSuccess" 
  action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile">
</tj-upload>
</div>

::: demo
```html
<tj-upload v-model="imageUrl" action="https://sixtest.baojunev.com/api/v2/common/uploadOneFile"></tj-upload>
<script>
  export default {
    data() {
      return {
        imageUrl4: ""
      }
    },
    methods: {
      beforeUpload(file) {
        const isPng = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isPng) {
          this.$toast('上传头像图片只能是 PNG 格式!');
        }
        if (!isLt2M) {
          this.$toast('上传头像图片大小不能超过 2MB!');
        }
        return isPng && isLt2M;
      },
      onProgress(event) {
        console.log(event)
      },
      onSuccess(data) {
        this.$toast('上传成功!')
      }
    }
  }
</script>
```
:::

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | -----  | ----- |
| width | 容器宽度 | number | | 100 |
| is-progress | 是否显示进度 | boolean | | false |
| progress-type | 进度条的宽度 | number | line，circle | line |
| before-upload	 | 上传图片之前的钩子，参数为上传的图片，若返回 false 停止上传 | function(file) | | |
| on-progress | 图片上传时的钩子 | function(event) | | |
| on-success | 图片上传成功时的钩子 | function(data) | | |
| on-error | 图片上传失败时的钩子 | function(orroe) | | |