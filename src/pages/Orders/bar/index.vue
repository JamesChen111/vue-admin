<template>
    <div id="line-graph">
        <div :style="{width:'100%',height:'400px'}" id='bar'></div>
    </div>
</template>

<script>
import option from '@/assets/data/bar';
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
        this.ChartLineGraph = this.$echarts.init(document.getElementById('bar'))
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