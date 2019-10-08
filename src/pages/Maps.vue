<template>
  <div id="map">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">基础设置</h4>
            <p class="category">基础设置副标题</p>
          </md-card-header>
          <md-card-content>
            <mu-container>
              <mu-tabs
                :value.sync="active1"
                inverse
                color="#212121"
                indicator-color="#29b6f6"
                text-color="#212121"
              >
                <mu-tab>系统信息</mu-tab>
                <mu-tab>基础设置</mu-tab>
                <mu-tab>权限设置</mu-tab>
              </mu-tabs>
              <div class="demo-text" v-if="active1 === 0">
                <div class="sye-info">
                  <div class="title">系统版本</div>
                  <div>1.2.3</div>
                  <div>（菜单调试模式）</div>
                </div>
                <div class="sye-info">
                  <div class="title">到期时间</div>
                  <div>2019-12-31</div>
                </div>
                <div class="sye-info">
                  <div class="title">公司名称</div>
                  <div>深圳市****科技有限公司</div>
                </div>
                <div class="sye-info">
                  <div class="title">域名</div>
                  <div>yanmai.com</div>
                </div>
                <div class="button">
                  <mu-button color="primary">保存</mu-button>
                </div>
              </div>
              <div class="demo-text" v-if="active1 === 1">
                <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
                <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
                <p>“那么就去地狱找到你，我绝对不逃！”</p>
                <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
              </div>
              <div class="demo-text" v-if="active1 === 2">
                <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
                <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
                <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
                <p>“也许吧，未来……给你了。”</p>
              </div>
            </mu-container>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContent",

  data() {
    return {
      active1: 0
    };
  },
  components: {}
};
</script>
<style lang="scss" scoped>
@media (min-width: 0) {
  .container {
    max-width: 100%;
  }
}
#map {
  .container {
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
  .demo-text {
    padding: 16px;
    background: #fff;
    p {
      margin: 8px 0;
    }
    .sye-info {
      display: flex;
      justify-content: flex-start;
      padding: 10px;
      .title {
        width: 8%;
        text-align: right;
        padding: 0 10px;
      }
    }
    .button {
      margin-left: 110px;
      margin-top: 10px;
    }
  }
}
</style>