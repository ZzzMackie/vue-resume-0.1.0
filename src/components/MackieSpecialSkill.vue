<template>
  <div :class="mackieSpecialSkill" id="special_skill"></div>
</template>

<script>
import draw from "@/common/skillEchart.js";
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
  mounted() {

                draw()
  },

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
