<template>
    <div :class="mackieOther">
        MackieOther
    </div>
</template>

<script>
export default {
  name: 'MackieOther',
  data() {
    return {
      mackieOther: 'mackie_other',
      curWidth: 0,
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1600) {
      this.partFive = 'mackie_other_responsive';
    }
  },
};
</script>

<style lang="scss">
.mackie_other {
  width: 100%;
  height: 310px;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
}
.mackie_other_responsive {
  width: 100%;
  height: 310px;
  border: 5px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>
