<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }" ref="wrapper">
    <notifications></notifications>

    <side-bar id="side-bar-dom" ref="sideBar">
      <div class="full-control">
        <div class="list">
          <md-list :md-expand-single="expandSingle">
            <md-list-item :md-expand="closeExpand" :md-expanded.sync="expandNews" @click="changeColor(1)">
              <md-icon class="iconfont icon-dashboard iconColor" :class="{active:num == 1}"></md-icon>
              <span class="md-list-item-text">我的面板</span>

              <md-list slot="md-expand">
                <router-link to="/dashboard" class="md-inset-a">面板1</router-link>
                <router-link to="/orders" class="md-inset-a">面板2</router-link>
              </md-list>
            </md-list-item>

            <md-list-item :md-expand="closeExpand" @click="changeColor(2)">
              <md-icon class="iconfont icon-gerenzhongxin iconColor" :class="{active:num == 2}"></md-icon>
              <span class="md-list-item-text">个人中心</span>

              <md-list slot="md-expand">
                <router-link to="/user" class="md-inset-a">我的资料</router-link>
              </md-list>
            </md-list-item>

            <md-list-item :md-expand="closeExpand" @click="changeColor(3)">
              <md-icon class="iconfont icon-shezhi iconColor" :class="{active:num == 3}"></md-icon>
              <span class="md-list-item-text">系统设置</span>

              <md-list slot="md-expand">
                <router-link to="/maps" class="md-inset-a">基础设置</router-link>
              </md-list>
            </md-list-item>

            <md-list-item :md-expand="closeExpand" @click="changeColor(4)">
              <md-icon class="iconfont icon-iconfront- iconColor" :class="{active:num == 4}"></md-icon>
              <span class="md-list-item-text">列表页</span>

              <md-list slot="md-expand">
                <router-link to="/pm" class="md-inset-a">简单列表</router-link>
                <router-link to="/standard" class="md-inset-a">标准列表</router-link>
              </md-list>
            </md-list-item>

            <md-list-item :md-expand="closeExpand" @click="changeColor(5)">
              <md-icon class="iconfont icon-biaodan iconColor" :class="{active:num == 5}"></md-icon>
              <span class="md-list-item-text">表单</span>

              <md-list slot="md-expand">
                <router-link to="/table" class="md-inset-a">基础表单</router-link>
                <router-link to="/stepper" class="md-inset-a">分步表单</router-link>
              </md-list>
            </md-list-item>

            <md-list-item :md-expand="closeExpand" @click="changeColor(6)">
              <md-icon class="iconfont icon-xiangqing" :class="{active:num == 6}"></md-icon>
              <span class="md-list-item-text">详情页</span>

              <md-list slot="md-expand">
                <router-link to="/basicDetails" class="md-inset-a">基础详情页</router-link>
                <router-link to="/imageText" class="md-inset-a">图文详情页</router-link>
                 <router-link to="/video" class="md-inset-a">视频/音频详情页</router-link>
              </md-list>
            </md-list-item>

            <md-list-item :md-expand="closeExpand" @click="changeColor(7)">
              <md-icon class="iconfont icon-poweroff iconColor" :class="{active:num == 7}"></md-icon>
              <span class="md-list-item-text">效果页</span>
  
              <md-list slot="md-expand">
                <router-link to="/notifications" class="md-inset-a">弹窗</router-link>
                <router-link to="/waterfall" class="md-inset-a">瀑布流</router-link>
              </md-list>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </side-bar>

    <div class="main-panel" ref="panel">
      <top-navbar @childFn="parentFn"></top-navbar>
      <tags-view />
      <dashboard-content></dashboard-content>
    </div>
  </div>
</template>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import TagsView from "@/pages/TagsView";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    TagsView
  },
  data() {
    return {
      expandNews: true,
      expandSingle: true,
      closeExpand:true,
      isClick:false,
      num: 0
    
    };
  },
  methods: {
    parentFn(value) {
      let width = this.$refs.wrapper.clientWidth
      let mainPanel = this.$refs.panel;
      let sidebar = this.$refs.sideBar.$el;
      mainPanel.style.width = value ? width-60+'px' : width-260+'px';
      sidebar.style.width = value ? "60px" : "260px";
      sidebar.style.overflow = value ? "hidden" : "unset";
      this.closeExpand = value?false: true;
    },
    changeColor(index){
     this.num = index;
     this.isClick = !this.isClick
    }
  }

};
</script>

<style lang="scss">
#side-bar-dom {
  .full-control {
    display: flex;
    .list {
      width: 100%;
      .md-list-item-container {
        .md-list-item-text {
          position: unset !important;
          color: #fff !important;
          font-size: 13px;
        }
        .md-icon-font {
          svg {
            fill: #fff !important;
          }
        }
      }
    }
  }
  .md-inset-a {
    margin: 0 !important;
    padding: 10px 60px !important;
    display: block !important;
    height: 40px !important;
    line-height: 20px !important;
    text-align: left;
    font-size: 14px;
    &:hover {
      background-color: #9e9e9e;
    }
  }
  .wrapper {
    display: flex;
  }

  .main-panel {
    margin-left: 260px;
    transition: 200ms linear !important;
  }
}
</style>
