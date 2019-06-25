<template>
  <div :class="mackieSpecialSkill" id="special_skill"></div>
</template>

<script>
import draw from "@/common/skillEchart.js";
const ECHARTS = require("echarts/lib/echarts");
export default {
  name: "MackieSpecialSkill",
  data() {
    return {
      mackieSpecialSkill: "mackie_special_skill",
      curWidth: 0
    };
  },
  beforeMount() {
    this.curWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1600) {
      this.partFive = "mackie_special_skill_responsive";
    }
  },
  beforeDestroy() {
    this.drawList();
  },
  methods: {
    drawList() {
      const myEchart = ECHARTS.init(document.getElementById("special_skill"));
      myEchart.setOption({
        // 标题
        title: {
          // 标题文本
          text: "技能分布图",
          // 标题样式
          textStyle: {
            color: "#fff"
          },
          // 标题位置
          x: "center"
        },
        // 移动显示
        tooltip: {
          trigger: "item",
          // 显示文字样式
          formatter: "{a} <br/>{b} : {d}%"
        },
        // 注记
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff"
          },
          data: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "jQuery",
            "Vue",
            "Node",
            "微信小程序",
            "其他"
          ]
        },
        // 注记显示手柄
        calculable: true,
        // 图形系列
        series: [
          {
            name: "技能分布",
            type: "pie",
            radius: [30, 110],
            roseType: "area",
            data: [
              { value: 15, name: "HTML5" },
              { value: 15, name: "CSS3" },
              { value: 20, name: "JavaScript" },
              { value: 20, name: "jQuery" },
              { value: 20, name: "Vue" },
              { value: 15, name: "Node" },
              { value: 25, name: "微信小程序" },
              { value: 15, name: "其他" }
            ]
          }
        ],
        // 颜色调整
        color: [
          "#00bfff",
          "#00ffdd",
          "#207ffc",
          "#00aeff",
          "#00eeff",
          "#006eff",
          "#0099ff",
          "#0066ff"
        ]
      });
    }
  }
};
</script>

<style lang="scss">
.mackie_special_skill {
  width: 100%;
  height: 500px;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  animation: topIn 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.mackie_special_skill_responsive {
  width: 100%;
  height: 500px;
  border: 10px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  animation: topIn 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
