<template>
  <div class="hello" id="myChart" :style="{width: '100vw', height: '100vh'}"></div>
</template>

<script>
// 引入基本模板
const echarts = require('echarts/lib/echarts');
// 引入柱状图组件
require('echarts/lib/chart/bar');
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/extension/bmap/bmap');

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart'));
      // eslint-disable-next-line no-undef
      const map = new BMap.Map('temp-chart');
      myChart.setOption({
        bmap: {
          // 百度地图中心经纬度
          center: [116.46, 39.92],
          // 百度地图缩放
          zoom: 4,
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: true,
          // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
