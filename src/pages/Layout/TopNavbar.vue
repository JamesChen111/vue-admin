<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <div class="menu" @click="isShow">
          <i class="iconfont" :class="sidebarOpen?'icon-indent':'icon-outdent'"></i>
        </div>
        <h3 class="md-title">{{topTitle[$route.name]}}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees">
              <label>搜索...</label>
            </md-autocomplete>
          </div>
          <md-list>
            <md-list-item href="#/">
              <i class="iconfont icon-dashboard"></i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <li class="md-list-item">
              <a
                href="#/notifications"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon class="iconfont icon-xiaoxi"></md-icon>
                      <span class="notification">5</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                  </drop-down>
                </div>
              </a>
            </li>
            <div class="login-box">
            <md-list-item href="#"> 
              <a href="/login">
                <i class="iconfont icon-poweroff" title="退出登录"></i>
              </a>
            </md-list-item>
             </div>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ],
      topTitle:{
        Maps:'系统设置/基础设置',
        Dashboard:'我的面板/面板1',
        orders:'我的面板/面板2',
        UserProfile:'个人中心/我的资料',
        pm:'列表页/简单列表',
        StandardTable:'列表页/标准列表',
        TableList:'表单/基础表单',
        Stepper:'表单/分步表单',
        basicDetails:'详情/基础详情',
        imageText:'详情/图文详情',
        video:'详情/音视频详情',
        Notifications:'效果/弹窗',
        WaterFall:'效果/瀑布流'


      },
      sidebarOpen: false,
      value: null
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    isShow() {
      if (this.sidebarOpen) {
        this.sidebarOpen = !this.sidebarOpen;
      } else {
        this.sidebarOpen = !this.sidebarOpen;
      }
      this.$emit("childFn", this.sidebarOpen);
    }
  }
};
</script>

<style lang="scss">
.md-transparent{
  box-shadow: 2px 1px 2px #ccc !important;
}
ul,ol{
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
  text-align: center;
}
.menu {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border-radius: 50%;
  &:hover{
    background-color: #ccc;
  }
  .icon-font {
    margin: 0 0 20px 0;
  }
}
.login-box{
  position: relative;
  .list{
    box-sizing: border-box;
    display: none;
    position: absolute;
    top:35px;
    left: 0px;
    background: rgba($color: #000000, $alpha: 0.5);
    width: 80px;
    padding: 5px 0;
  }
}
.icon-poweroff,.icon-dashboard,.icon-xiaoxi{
  font-size: 20px;
}
</style>
