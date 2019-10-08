<template>
  <div id="order">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">仪表盘</h4>
            <p class="category">仪表盘副标题</p>
          </md-card-header>
          <md-card-content>
            <div class="order-container">
              <div class="order-top">
                <div class="order-item-left">
                  <pi></pi>
                </div>
                <div class="order-item-right">
                  <bar></bar>
                </div>
              </div>
              <div class="order-item-bottom">
                <line-chart></line-chart>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.scss";
import Bar from "./bar";
import Pi from "./pi";
import LineChart from "./LineChart";
export default {
  data() {
    return {};
  },
  components: {
    Bar,
    Pi,
    LineChart
  }
};
</script>
