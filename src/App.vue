<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 320px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.BMap_cpyCtrl,
.BMap_noprint,
.anchorBL {
  display: none !important;
}
body {
//  background-color: #FF3CAC;
// width: 100vw;
// height: 100vh;
background-color: #044493;
background-image: linear-gradient(135deg,#044493 0%,#4087dd 100%);
background-image: -webkit-linear-gradient(135deg,#044493 0%,#4087dd 100%);
background-image: -moz-linear-gradient(135deg,#044493 0%,#4087dd 100%);
background-image: -o-linear-gradient(135deg,#044493 0%,#4087dd 100%);

}
@media screen and (max-width: 1024px) {
  html {
    font-size: calc(100vw / 750 * 100);
  }
}
</style>
