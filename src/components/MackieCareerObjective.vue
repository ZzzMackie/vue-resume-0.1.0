<template>
    <div :class="mackieCareerObjective">
        <h3>求职意向</h3>
        <text-comp :message-list="careerList" class="career_objective_list"></text-comp>
    </div>
</template>

<script>
import TextComp from '@/components/textcomp/TextComp';

export default {
  name: 'MackieCareerObjective',
  data() {
    return {
      mackieCareerObjective: 'mackie_career_objective',
      curWidth: 0,
      careerList: [
        {
          tit: '期望职位',
          context: '前端工程师',
        },
        {
          tit: '工作技能',
          context: 'Vue、PhotoShop',
        },
        {
          tit: '目标城市',
          context: '广州、深圳',
        },
        {
          tit: '期望薪资',
          context: '7.5k-9.5k',
        },
        {
          tit: '入职时间',
          context: '一周内',
        },
      ],
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1600) {
      this.partFive = 'mackie_career_objective_responsive';
    }
  },
  components: {
    TextComp,
  },
};
</script>

<style lang="scss">
.mackie_career_objective {
  width: 100%;
  height: 310px;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  .career_objective_list{
      li{
          border: none;
      }
  }
}
.mackie_career_objective_responsive {
  width: 100%;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  .career_objective_list{
      li{
          border: none;
      }
  }
}
</style>
