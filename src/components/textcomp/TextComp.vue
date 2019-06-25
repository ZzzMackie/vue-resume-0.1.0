<template>
  <div class="text_container">
    <ul>
      <li v-for="item in messageList" :key="item.tit">
        <span>{{ item.tit }}</span
        >: <a :href="isUrl(item)" target="_blank">{{ item.context }}</a>
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
    return {
      non: 'javascritp:void();',
    };
  },
  methods: {
    isUrl(item) {
      return item.url ? item.url : this.non;
    },
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
    a{
      color: #fff;
      font-size: 14px;
      &:hover{
        color: aqua;
      }
    }
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
    &:not(:last-of-type) {
      border-bottom: 1px solid #ccc;
    }
    span {
      color: deepskyblue;
    }
  }
}

</style>
