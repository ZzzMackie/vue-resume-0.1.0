<template>
  <div class="home">
    <div class="banner">
      <img class="hidden-md-only hidden-lg-only hidden-xl-only" :src="bannerXSSM" alt="banner 图">
      <!-- eslint-disable-next-line max-len -->
      <img class="hidden-xs-only hidden-sm-only hidden-lg-only hidden-xl-only" :src="bannerMD" alt="banner 图">
      <img class="hidden-xs-only hidden-sm-only hidden-md-only" :src="bannerLGXL" alt="banner 图">
    </div>
    <el-row>
      <!-- 基本信息 -->
      <el-col :xs="24" :sm="24" :md="5" :lg="6" :xl="5" class="part">
        <mackie-basic-information></mackie-basic-information>
      </el-col>
      <!-- 朋友分布 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="part">
        <mackie-friends-distribution></mackie-friends-distribution>
      </el-col>
      <!-- 技能特长 -->
      <el-col :xs="24" :sm="24" :md="7" :lg="6" :xl="11" class="part">
        <mackie-special-skill></mackie-special-skill>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row>
      <!-- 工作经验 -->
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
        <mackie-work-experience></mackie-work-experience>
      </el-col>
      <!-- 编程技能 -->
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
        <mackie-programming-skills></mackie-programming-skills>
      </el-col>
      <!-- 求职意向 -->
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
        <mackie-career-objective></mackie-career-objective>
      </el-col>
      <!-- 其它 -->
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
        <mackie-other></mackie-other>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const MackieBasicInformation = () => import('@/components/MackieBasicInformation');
const MackieCareerObjective = () => import('@/components/MackieCareerObjective');
const MackieFriendsDistribution = () => import('@/components/MackieFriendsDistribution');
const MackieOther = () => import('@/components/MackieOther');
const MackieProgrammingSkills = () => import('@/components/MackieProgrammingSkills');
const MackieSpecialSkill = () => import('@/components/MackieSpecialSkill');
const MackieWorkExperience = () => import('@/components/MackieWorkExperience');
export default {
  name: 'home',
  data() {
    return {
      bannerXSSM: require('@/assets/banner_640.png'),
      bannerMD: require('@/assets/banner_1000.png'),
      bannerLGXL: require('@/assets/banner.png'),
    };
  },
  components: {
    MackieBasicInformation,
    MackieCareerObjective,
    MackieFriendsDistribution,
    MackieOther,
    MackieProgrammingSkills,
    MackieSpecialSkill,
    MackieWorkExperience,
  },
};
</script>

<style lang="scss">
.part {
  padding: 20px;
}
@keyframes topIn {
    0%{
        transform: translateY(-100px);
    }
    100%{
        transform: translateY(0px);
    }
}
@keyframes leftIn{
    0%{
        transform: translateX(-100px);
    }
    100%{
        transform: translateX(0px);
    }
}
@keyframes rightIn{
    0%{
        transform: translateX(100px);
    }
    100%{
        transform: translateX(0px);
    }
}
</style>
