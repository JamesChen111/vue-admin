<template>
    <div id="pi-graph">
        <div :style="{width:'600px',height:'400px'}" id='pi'></div>
    </div>
</template>

<script>
import option from '@/assets/data/pi';
export default{
data(){
    return{
        ChartLineGraph:null,
        data:option,
    }
},
mounted(){
    this.drawLineGraph();
    // console.log(echarts)
},
methods:{
    drawLineGraph(){
        // debugger;
        let _this = this;
        this.ChartLineGraph = this.$echarts.init(document.getElementById('pi'))
        this.ChartLineGraph.setOption(this.data);
        //图表自适应
        window.addEventListener("resize",function(){
           _this.ChartLineGraph.resize();
        })
    },
},
beforeDestroy(){

    if(this.ChartLineGraph){
        this.ChartLineGraph.clear();
    }
}
}
</script>