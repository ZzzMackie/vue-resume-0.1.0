<template>
  <div class="mackie_basic_information">
    <img src="../assets/timg.jpg" alt="Mackie" />
    <ul>
      <li>Name：<span>郑楚辉</span></li>
      <li>Education:<span>专科</span></li>
      <li>Hobby:<span>篮球、健身、读书、电影</span></li>
      <li>Age:<span>24</span></li>
      <li>Tel:<span>17688770693</span></li>
      <li>Email：<span>176731317693@163.com</span></li>
      <li>
        Blog:
        <a href="https://blog.csdn.net/weixin_43824566" target="_blank"
          >Mackie</a
        >
      </li>
      <li>
        GitHub：<a href="https://github.com/ZzzMackie" target="_blank"
          >github.com/ZzzMackie</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MackieBasicInformation',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.mackie_basic_information {
  color: aliceblue;
  width: 100%;
  height: 500px;
  border: 25px solid transparent;
  border-image: url("~@/assets/border_image.png") 30 30 stretch;
  background: #18202d;
  font-size: 16px;
  animation: leftIn 1s ;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    animation: leftIn 1s ;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  ul {
    li {
      width: 100%;
      text-align: left;
      animation: leftIn 1s ;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &:nth-of-type(2){
          animation-delay: .1s;
      }
      &:nth-of-type(3){
          animation-delay: .2s;
      }
      &:nth-of-type(4){
          animation-delay: .3s;
      }
      &:nth-of-type(5){
          animation-delay: .4s;
      }
      &:nth-of-type(6){
          animation-delay: .5s;
      }
      &:nth-of-type(7){
          animation-delay: .6s;
      }
      span {
        padding-left: 1em;
      }
      a {
        padding-left: 1em;
        color: deepskyblue;
        &:hover {
          color: rgb(118, 190, 248);
        }
      }
    }
  }
}

</style>
