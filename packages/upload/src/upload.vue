<template>
  <div class="tj-upload" @click="handleUpload" :style="{width: width + 'px', height: width + 'px'}">
    <div class="tj-upload__inner">
      <img v-if="imageUrl" :src="imageUrl" class="tj-upload__img">
      <i v-else class="tj-icon tj-jiahao"></i>
      <input ref="file" class="tj-upload__file" type="file" @change="changeUpload">
      <div class="tj-upload__cover" v-if="isProgress && progressVisible">
        <tj-progress
          v-if="progressType === 'line'"
          :percentage="percentage"
          :stroke-width="4"
          :show-text="false"
          :type="progressType"
        ></tj-progress>
        <tj-progress v-else :percentage="percentage" :type="progressType" :width="width - 20"></tj-progress>
      </div>
    </div>
  </div>
</template>

<script>
function noop() {}

export default {
  name: "tj-upload",
  props: {
    action: String,
    value: {},
    width: {
      type: Number,
      default: 100
    },
    beforeUpload: Function,
    onSuccess: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    isProgress: Boolean,
    progressType: {
      type: String,
      default: "line"
    }
  },
  data() {
    return {
      imageUrl: this.value || "",
      percentage: 0,
      progressVisible: false
    };
  },
  methods: {
    handleUpload() {
      this.$refs.file.click();
    },

    changeUpload() {
      const file = this.$refs.file.files[0];
      const reader = new FileReader();
      const _this = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        _this.postUpload(file);
      };
    },

    postUpload(file) {
      const formData = new FormData();
      formData.append("file", file);
      if (this.beforeUpload) {
        const beforeUpload = this.beforeUpload(file);
        if (typeof beforeUpload === "boolean" && !beforeUpload) return;
      }

      let xhr = null;
      if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhr.open("post", this.action, true);

      xhr.upload.addEventListener(
        "progress",
        evt => {
          this.progressVisible = true;
          this.percentage = (evt.loaded / evt.total).toFixed(2) * 100;
          this.onProgress(evt);
        },
        false
      );
      xhr.onload = () => {
        this.progressVisible = false;
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          this.imageUrl = data.data;
          this.onSuccess(data);
          this.$emit("on-success", data);
        } else {
          this.onError(response);
        }
      };
      xhr.send(formData);
    }
  }
};
</script>
