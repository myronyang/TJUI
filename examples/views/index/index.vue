<template>
  <div class="home-wrapper">
    <div class="home-hd">
      <tj-logo color="#fff" />
    </div>
    <div class="mask-box ani zoomIn animated">
      <div class="mask-one-content">
        <div class="table-cell">
          <div class="title">淘金UI 所见既得</div>
          <div class="desc">基于VueJs实现的移动端通用组件库</div>
          <div class="start">
            <img class="icon" src="https://website.didiglobal.com/dist/media/download.7b71b3f4.svg" />
            <span class="text">扫码演示</span>
            <div class="qrcode ani bounceIn animated">
              <img src="@/assets/image/qrcode.png" alt />
            </div>
          </div>
        </div>
        <router-link class="more-btn" to="/docs/introduction">
          <i class="tj-icon tj-Arrowright1"></i>
        </router-link>
      </div>
    </div>
    <div class="copyright">© 2018-2019 MyrongYang. All Rights Reserved.</div>
    <a href="https://github.com/myronyang/TJUI" target="_blank" class="tj-icon tj-github"></a>
    <div class="video-h5"></div>
    <video
      id="video"
      loop="loop"
      muted="muted"
      autoplay="autoplay"
      playsinline
      poster="https://gxzn-free.oss-cn-zhangjiakou.aliyuncs.com/website-new/videos/explore.jpg"
    >
      <source
        src="https://gxzn-free.oss-cn-zhangjiakou.aliyuncs.com/website-new/videos/explore.mp4"
        type="video/mp4"
      />
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
    z-index: 97;
    .tj-logo {
      width: 350px;
      margin: 20px 0 0 20px;
    }
  }

  .mask-box {
    transition: all 0ms ease;
    transition-duration: 0ms;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 35.4%;
    height: 0;
    padding: 35.4% 0 0;
    border-radius: 50%;
    margin-left: -17.7%;
    margin-top: -17.7%;
    box-sizing: border-box;
    color: #fff;
    background: rgba(0, 0, 0, 0.2);
    z-index: 999;
    .mask-one-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .table-cell {
      padding: 0 60px;
      .title {
        font-size: 64px;
        line-height: 1;
        font-weight: 300;
        letter-spacing: 2.6px;
      }
      .desc {
        font-size: 34px;
        font-weight: 300;
        letter-spacing: 1.2px;
        margin-top: 20px;
      }
      .start {
        position: relative;
        font-size: 0;
        margin-top: 40px;
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 35px;
          margin-right: 20px;
        }
        .text {
          display: inline-block;
          vertical-align: top;
          line-height: 37px;
          font-size: 24px;
          font-weight: 300;
        }
        $codeSize: 140px;
        .qrcode {
          display: none;
          position: absolute;
          left: 125px;
          top: 0;
          margin-left: 20px;
          margin-top: 10px;
          width: $codeSize + 14px;
          height: $codeSize + 14px;
          border: 1px solid #fff;
          border-radius: 5px;
          img {
            display: block;
            margin: 7px;
            width: $codeSize;
            height: $codeSize;
          }
        }
        &:hover {
          .icon {
            display: none;
          }
          .qrcode {
            display: block;
          }
        }
      }
    }
    .more-btn {
      position: absolute;
      top: 50%;
      right: -45px;
      display: block;
      background-color: #f5f5f5;
      width: 90px;
      height: 90px;
      line-height: 90px;
      transform: translateY(-50%);
      border-radius: 100%;
      text-align: center;
      .tj-icon {
        position: relative;
        top: 3px;
        left: 2px;
        color: #000;
        font-size: 3.2rem;
      }
      &:hover {
        .tj-icon {
          color: #9c27b0;
        }
      }
    }
  }

  .copyright {
    position: fixed;
    right: 30px;
    bottom: 25px;
    z-index: 98;
    color: #fff;
    font-size: 18px;
  }
  .tj-github {
    position: fixed;
    right: 30px;
    top: 30px;
    z-index: 98;
    color: #fff;
    font-size: 2.5rem;
    &:hover {
      opacity: 0.7;
    }
  }
  .video-h5 {
    display: none;
  }
  #video {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    object-fit: cover;
  }
}
@media screen and (max-width: 1700px) {
  .home-wrapper {
    .mask-box {
      .table-cell {
        .title {
          font-size: 3.2rem;
        }
        .desc {
          font-size: 2.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .home-wrapper {
    .mask-box {
      .table-cell {
        .title {
          font-size: 2.8rem;
        }
        .desc {
          font-size: 1.8rem;
        }
        .start {
          .icon {
            width: 30px;
          }
          .text {
            font-size: 1.4rem;
          }
          .qrcode {
            width: 154px;
            height: 154px;
          }
        }
      }
      .more-btn {
        width: 70px;
        height: 70px;
        line-height: 70px;
        right: -35px;

        .tj-icon {
          font-size: 2.4rem;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .home-wrapper {
    .mask-box {
      width: 45%;
      padding: 45% 0 0;
      margin-left: -22.5%;
      margin-top: -22.5%;
    }
  }
}
@media screen and (max-width: 745px) {
  .home-wrapper {
    .home-hd {
      .tj-logo {
        width: 225px;
        margin: 10px 0 0 10px;
      }
    }
    .mask-box {
      width: 82%;
      padding: 82% 0 0;
      margin-left: -41%;
      margin-top: -41%;
      .table-cell {
        .title {
          font-size: 1.8rem;
        }
        .desc {
          font-size: 1.2rem;
        }
        .start {
          .icon {
            width: 22px;
            margin-right: 10px;
          }
          .text {
            font-size: 1.2rem;
            line-height: 25px;
          }
          .qrcode {
            left: 70px;
          }
        }
      }
      .more-btn {
        width: 50px;
        height: 50px;
        line-height: 50px;
        right: -10px;
        .tj-icon {
          font-size: 1.6rem;
          top: 1px;
        }
      }
    }
    .tj-github {
      right: 15px;
      top: 15px;
      font-size: 2rem;
    }
    .copyright {
      left: 0;
      bottom: 10px;
      width: 100%;
      text-align: center;
      font-size: 0.9rem;
    }
    #video {
      display: none;
    }
    .video-h5 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: block;
      background: url("https://gxzn-free.oss-cn-zhangjiakou.aliyuncs.com/website-new/videos/explore.jpg");
    }
  }
}
</style>