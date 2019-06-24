<template>
    <div :class="mackieProgrammingSkills">
        <h3>编程技能</h3>
        <text-comp :message-list="programmingList"></text-comp>
    </div>
</template>

<script>
import TextComp from '@/components/textcomp/TextComp';

export default {
  name: 'MackieProgrammingSkills',
  data() {
    return {
      mackieProgrammingSkills: 'mackie_programming_skills',
      curWidth: 0,
      programmingList: [{
        tit: '前端基础',
        context: 'HTML、CSS、JavaScript、ES6、微信小程序,了解Nginx、Node.js',
      },
      {
        tit: '前端框架及方法库、UI库',
        context: 'Vue、ElementUI、JQuery、Sass、Less',
      },
      {
        tit: '前端构建工具及管理工具',
        context: 'Webpack、Gulp、Git',
      },
      {
        tit: '网络',
        context: 'AJAX、跨域方法、状态码',
      },
      {
        tit: '算法',
        context: '冒泡、快排、插入、归并及二分查找等',
      }],
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1600) {
      this.partFive = 'mackie_programming_skills_responsive';
    }
  },
  components: {
    TextComp,
  },
};
</script>

<style lang="scss">
.mackie_programming_skills {
  width: 100%;
  height: 310px;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;

}
@media screen and (max-width: 320px) {
    .mackie_programming_skills{
        height: 330px;
    }
}
h3{
    color: #fff;
    font-size: 24px;
  }
.mackie_programming_skills_responsive {
  width: 100%;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>
