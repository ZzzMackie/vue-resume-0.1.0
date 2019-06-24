<template>
    <div :class="mackieSpecialSkill">
    </div>
</template>

<script>
export default {
  name: 'MackieSpecialSkill',
  data() {
    return {
      mackieSpecialSkill: 'mackie_special_skill',
      curWidth: 0,
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1600) {
      this.partFive = 'mackie_special_skill_responsive';
    }
  },
};
</script>

<style lang="scss">
.mackie_special_skill{
    width: 100%;
  height: 500px;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
}
.mackie_special_skill_responsive {
  width: 100%;
  height: 500px;
  border: 10px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>
