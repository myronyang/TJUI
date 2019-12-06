<template>
  <div class="home-wrapper">
    <div class="home-hd">
      <tj-logo color="#fff" />
    </div>
    <div class="home-mian">
      <div class="btn-box">
        <router-link class="btn-item" to="/docs/introduction">开始探索</router-link>
        <a class="btn-item" href="javascript:;">扫码演示</a>
      </div>
    </div>
    <div class="home-cover"></div>
    <video
      id="video"
      loop="loop"
      muted="muted"
      autoplay="autoplay"
      playsinline
      poster="https://oss-sanghai.clo3d-china.com/web/static/images/video-posters/movie.jpg"
    >
      <source src="https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import logo from "@/components/logo";
export default {
  components: {
    "tj-logo": logo
  }
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  .home-hd {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 102px;
    z-index: 9;

    .tj-logo {
      width: 350px;
      margin: 20px 0 0 20px;
    }
  }

  .home-mian {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 50%;
    z-index: 9;
    transform: translate(-50%, -50%);

    .btn-box {
      text-align: center;

      .btn-item {
        display: inline-block;
        margin: 0 15px;
        font-size: 18px;
        color: #fff;
        padding: 10px 35px;
        border: 1px solid #fff;
        border-radius: 25px;
      }
    }
  }

  .home-cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
  }

  #video {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    object-fit: cover;
    z-index: -1;
  }
}
</style>