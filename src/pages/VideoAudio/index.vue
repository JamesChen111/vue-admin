<template>
  <div id="order">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">详情页</h4>
            <p class="category">视频/音频详情页</p>
          </md-card-header>
          <md-card-content>
            <video-audio></video-audio>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
// import "./index.scss";
import VideoAudio from "./VideoAudio";
export default {
  data() {
    return {};
  },
  components: {
    VideoAudio
  }
};
</script>