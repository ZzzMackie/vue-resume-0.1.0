<template>
    <div class="mackie_friends_distribution" id="friends_distribution">
    </div>
</template>

<script>
import drawECharts from '@/common/map.js';

export default {
  name: 'MackieFriendsDistribution',
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(function() {
                drawECharts()
      })
    ;
  },
};
</script>

<style lang="scss">
.mackie_friends_distribution {
  width: 100%;
  height: 500px;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  animation: topIn 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

</style>
