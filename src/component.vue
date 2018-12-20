<template>
  <section class="component-layout ui-optimat-vue-loading-layout"
           :style="{maxHeight:(windowHeight||defaultHeight)+'px',width:(windowWidth||defaultWidth)+'px'}"
           v-show="isShow">
    <div class="spinner" v-if="supportCss3">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
    <div class="spinner" v-else>
      <img id="loadingImage" :class="['t'+deg]"
           :src="icons.loading"/>
    </div>
  </section>
</template>

<script>
  const Component = require('./component');
  export default new Component();
</script>

<style lang="scss" scoped="true">

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
    z-index: inherit;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    background-color: #ededed;
  }

  .ui-optimat-vue-loading-layout {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    text-align: center;
    background-color: rgba(0, 0, 0, .5);

    .spinner {
      height: 3.5rem;
      text-align: center;
      display: inline-block;
    }

    .spinner > div {
      height: 100%;
      width: 6px;
      margin: 0 2px;
      background-color: white;
      float: left;
      -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
      animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }

    .spinner .rect2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }

    .spinner .rect3 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }

    .spinner .rect4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

    .spinner .rect5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }

    @-webkit-keyframes sk-stretchdelay {
      0%,
      40%,
      100% {
        -webkit-transform: scaleY(0.4)
      }
      20% {
        -webkit-transform: scaleY(1.0)
      }
    }

    @keyframes sk-stretchdelay {
      0%,
      40%,
      100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
      }
    }

    .spinner img {
      width: 70%;
      max-width: 70%;
      height: 70%;
    }
  }
</style>
