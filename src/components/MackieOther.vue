<template>
    <div :class="mackieOther">
        <h3>Demo地址</h3>
        <text-comp :message-list="otherList"></text-comp>
    </div>
</template>

<script>
import TextComp from '@/components/textcomp/TextComp';
export default {
  name: 'MackieOther',
  data() {
    return {
      mackieOther: 'mackie_other',
      curWidth: 0,
      otherList: [{
        tit: '音乐播放器',
        url: 'https://zzzmackie.github.io/music-player/dist/',
        context: '//zzzmackie.github.io/music-player',
      },
      {
        tit: '快餐页',
        url: 'https://zzzmackie.github.io/meituan-vue/dist/',
        context: '//zzzmackie.github.io/meituan-vue',
      },
      {
        tit: '小球游戏',
        url: 'https://zzzmackie.github.io/moveBallsGame/',
        context: 'zzzmackie.github.io/moveBallsGame',
      },
      {
        tit: '三生三世官网',
        url: 'https://3s.qq.com/web201904/main.shtml',
        context: '//3s.qq.com'
      }]
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (this.curWidth < 1600) {
      this.partFive = 'mackie_other_responsive';
    }
  },
  components: {
    TextComp,
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
  animation: rightIn 1s ;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.mackie_other_responsive {
  width: 100%;
  height: 310px;
  border: 5px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  animation: rightIn 1s ;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
