<template>
  <div id="order">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">图文详情</h4>
            <p class="category">图文详情副标题</p>
          </md-card-header>
          <md-card-content>
            <image-text></image-text>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
// import "./index.scss";
import ImageText from "./ImageText";
export default {
  data() {
    return {};
  },
  components: {
    ImageText
  }
};
</script>