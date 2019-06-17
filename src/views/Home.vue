<template>
  <div class="home">
    <hello-world></hello-world>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line no-unused-vars
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
  },
};
</script>
