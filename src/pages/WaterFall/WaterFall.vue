<template>
  <div id="water-fall">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
    <div class="item item-7">7</div>
    <div class="item item-8">8</div>
    <div class="item item-9">9</div>
    <div class="item item-10">10</div>
    <div class="item item-11">11</div>
    <div class="item item-12">12</div>
    <div class="item item-13">13</div>
    <div class="item item-14">14</div>
    <div class="item item-15">15</div>
    <div class="item item-16">16</div>
    <div class="item item-17">17</div>
    <div class="item item-18">18</div>
    <div class="item item-19">19</div>
    <div class="item item-20">20</div>
    <div class="item item-21">21</div>
    <div class="item item-22">22</div>
    <div class="item item-23">23</div>
    <div class="item item-24">24</div>
    <div class="item item-25">25</div>
    <div class="item item-26">26</div>
    <div class="item item-27">27</div>
    <div class="item item-28">28</div>
  </div>
</template>  

<script>
import "./waterfall.scss";
export default {
  data() {
    return {
      gap: 10
    };
  },
  mounted() {
    this.waterFall();
  },
  methods: {
    waterFall() {
      const gap = this.gap;
      let items = document.getElementsByClassName("item");
      let headerHeight = document.getElementsByClassName("md-card-header")[0]
        .clientHeight;
      let pageWidth = document.getElementById("water-fall").clientWidth;
      let itemWidth = items[0].offsetWidth;
      let columns = parseInt(pageWidth / (itemWidth + gap));
      let arr = [];

      for (let i = 0; i < items.length; i++) {
        if (i < columns) {
          items[i].style.top = headerHeight;
          items[i].style.left = (itemWidth + gap) * i + 50 + "px";
          arr.push(items[i].offsetHeight);
        } else {
          let minHeight = arr[0];
          let index = 0;
          for (let j = 0; j < arr.length; j++) {
            if (minHeight > arr[j]) {
              minHeight = arr[j];
              index = j;
            }
          }
          //设置下一行
          items[i].style.top = arr[index] + gap + headerHeight + "px";
          items[i].style.left = items[index].offsetLeft + "px";
          arr[index] = arr[index] + items[i].offsetHeight + gap;
        }
      }
      // window.onresize = function(){
      //   WaterFall();
      // }
    }
  }
};
</script>