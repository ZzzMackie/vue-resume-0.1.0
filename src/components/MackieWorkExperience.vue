<template>
  <div :class="mackieWorkExperience">
      <h3>工作经历</h3>
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
}
.mackie_work_experience_responsive {
  width: 100%;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>
