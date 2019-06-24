<template>
  <div class="text_container">
    <ul>
      <li v-for="item in messageList" :key="item.tit">
        <span>{{ item.tit }}</span
        >: {{ item.context }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TextComp',
  props: {
    messageList: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.text_container {
  li {
    text-align: left;
    color: #fff;
    font-size: 14px;
    padding: 5px;
    animation: topIn 1s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:nth-of-type(2) {
      animation-delay: 0.1s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.2s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.3s;
    }
    &:nth-of-type(5) {
      animation-delay: 0.4s;
    }
    &:nth-of-type(6) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(7) {
      animation-delay: 0.6s;
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid #ccc;
    }
    span {
      color: deepskyblue;
    }
  }
}
@keyframes topIn {
    0%{
        transform: translateY(-100px);
    }
    100%{
        transform: translateY(0px);
    }
}
</style>
