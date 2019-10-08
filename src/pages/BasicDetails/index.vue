<template>
  <div class="md-layout">
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
      <md-card>
        <md-card-header data-background-color="blue">
          <h4 class="title">基础详情页</h4>
          <p class="category">基础详情页副标题</p>
        </md-card-header>
        <md-card-content>
          <basic-details></basic-details>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import BasicDetails from "./BasicDetails";
export default {
  data() {
    return {};
  },
  components: {
    BasicDetails
  }
};
</script>