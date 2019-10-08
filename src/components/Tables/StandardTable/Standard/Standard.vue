<template>
  <div id="standard">
    <div style="width: 100%; background: #fff; padding: 8px;">
      <mu-flex class="flex-wrapper" align-items="center">
        <mu-flex
          class="flex-demo"
          justify-content="center"
          fill
          direction="column"
          align-items="center"
        >
          <p>我的待办</p>
          <p class="p2">8个任务</p>
        </mu-flex>
        <mu-flex
          class="flex-demo"
          justify-content="center"
          fill
          direction="column"
          align-items="center"
        >
          <p>任务平均处理时间</p>
          <p class="p2">32分钟</p>
        </mu-flex>
        <mu-flex
          class="flex-demo"
          justify-content="center"
          fill
          direction="column"
          align-items="center"
        >
          <p>完成任务数</p>
          <p class="p2">24个任务</p>
        </mu-flex>
      </mu-flex>
    </div>
    <div style="height:100%;width:100%">
      <div class="title">
        <div>基本列表</div>
        <div class="input-box">
            <span>全部</span>
            <span>进行中</span>
            <span>等待中</span>
            <input  class="search" style="margin-left:80px" type="text" placeholder="搜索...">
            <input class="search-btn" type="button" value="搜索" />
        </div>
      </div>
      <div class="list-add">
        <span>+</span>
        <span>添加</span>
      </div>
      <div class="list-items">
        <div class="left">
          <div class="pic">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" alt="">
          </div>
          <div class="alipay">
              <p>Alipay</p>
              <p>那是一种内在的东西，他们到达不了，也无法触及</p>
          </div>
        </div>
        <div class="right">
            <div class="start-time">
                <p>开始时间</p>
                <p>2019-09-21</p>
            </div>
            <div class="process">
                <mu-linear-progress mode="determinate" :value="value"></mu-linear-progress>
            </div>
            <div class="edit-more">
                <span class="text">编辑</span><span>|</span>
                <span class="text"> 更多</span>
            </div>
        </div>
      </div>
       <div class="list-items">
        <div class="left">
          <div class="pic">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" alt="">
          </div>
          <div class="alipay">
              <p>Alipay</p>
              <p>那是一种内在的东西，他们到达不了，也无法触及</p>
          </div>
        </div>
        <div class="right">
            <div class="start-time">
                <p>开始时间</p>
                <p>2019-09-21</p>
            </div>
            <div class="process">
                <mu-linear-progress mode="determinate" :value="value"></mu-linear-progress>
            </div>
            <div class="edit-more">
                <span class="text">编辑</span><span>|</span>
                <span class="text"> 更多</span>
            </div>
        </div>
      </div>
    </div>
    <mu-flex justify-content="center">
    <mu-pagination raised circle :total="1000" :current.sync="current"></mu-pagination>
  </mu-flex>
  </div>
</template>
<script>
import "./index.scss";
export default {
  data() {
    return {
        current:1,
        value:60
    };
  }
};
</script>