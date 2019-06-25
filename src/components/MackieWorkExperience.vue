<template>
  <div :class="mackieWorkExperience">
    <h3>工作经历</h3>
    <p>
      <a href="javascript:void(0)">深圳市微聚科技有限公司</a>
      <span class="text-small">| 2019/03 - 至今</span>
    </p>
    <p class="text-small"><span>工作内容</span>: 日常编写各类手游的官网，微社区，爆料站等双端页面以及现有项目的pc端和m端的重构优化，提高用户体验</p>
    <p class="text-small"><span>项目成就</span>： 线上项目有三生三世十里桃花手游官网，QQ飞车拉力赛版本专题等，以及修改优化过多个项目，主要方向为移动端的适配，动画效果，异形屏的兼容以及老旧项目的bug等等</p>
    <p><span>收获</span>：体验了解了一个项目从设计到线上的整个开发流程，以及团队合作沟通的重要性，代码的规范可阅读性、复用性、易维护性，学会运用nginx的反向代理，负载均衡来实现跨域以及提高页面性能等</p>
  </div>
</template>

<script>
export default {
  name: 'MackieWorkExperience',
  data() {
    return {
      mackieWorkExperience: 'mackie_work_experience',
      curWidth: 0,
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1600) {
      this.partFive = 'mackie_work_experience_responsive';
    }
  },
};
</script>

<style lang="scss">
.mackie_work_experience {
  width: 100%;
  height: 310px;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  animation: leftIn 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  p{
    text-align: left;
    color: #fff;
    a{
      color: deepskyblue;
      &:hover {
          color: rgb(118, 190, 248);
        }
    }
    span{
      color: deepskyblue;
    }
  }
}
.mackie_work_experience_responsive {
  width: 100%;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  animation: leftIn 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@media screen and (max-width: 646px) {
    .mackie_work_experience{
        height: 430px;
    }
}
@media screen and (max-width: 478px) {
    .mackie_work_experience{
        height: 490px;
    }
}
@media screen and (max-width: 430px) {
    .mackie_work_experience{
        height: 550px;
    }
}
@media screen and (max-width: 380px) {
    .mackie_work_experience{
        height: 600px;
    }
}
@media screen and (max-width: 355px) {
    .mackie_work_experience{
        height: 650px;
    }
}
</style>
