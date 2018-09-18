<template>
    <section class="component-layout ui-optimat-vue-loading-layout fix lt0 w100 h100"
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
    /*根字体*/
    @media (min-width: 1025px) {
        html {
            font-size: 28px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        html {
            font-size: 24px;
        }
    }

    @media (min-width: 376px) and (max-width: 768px) {
        html {
            font-size: 22px;
        }
    }

    @media (min-width: 321px) and (max-width: 375px) {
        html {
            font-size: 20px;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 18px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        position: relative;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    html, body {
        width: 100%;
        overflow-x: hidden;
        background-color: #ededed;
    }

    section {
        display: block;
    }

    /**阴影*/

    .shadow {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    }

    .shadow:focus {
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
    }

    /**尺寸*/

    .h100 {
        height: 100%;
    }

    .w100 {
        width: 100%;
    }

    /**位置*/
    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .abs {
        position: absolute;
    }

    .rel {
        position: relative;
    }

    .fix {
        position: fixed;
    }

    .lt0 {
        left: 0;
        top: 0;
    }

    .lb0 {
        left: 0;
        bottom: 0;
    }

    .rt0 {
        right: 0;
        top: 0;
    }

    .rb0 {
        right: 0;
        bottom: 0;
    }

    /**px转rem*/
    $fontbase: 32px;
    @function rem($px) {
        @return $px / $fontbase * 1rem;
    }

    /**字体大小*/
    $fontSizeNano: rem(18px);
    $fontSizeMini: rem(19px);
    $fontSizeSmall: rem(20px);
    $fontSizeNormal: rem(22px);
    $fontSizeMiddle: rem(24px);
    $fontSizeLarge: rem(26px);
    .fs-nano {
        font-size: $fontSizeNano;
    }

    .fs-mini {
        font-size: $fontSizeMini;
    }

    .fs-small {
        font-size: $fontSizeSmall;
    }

    .fs-normal {
        font-size: $fontSizeNormal;
    }

    .fs-middle {
        font-size: $fontSizeMiddle;
    }

    .fs-large {
        font-size: $fontSizeLarge;
    }

    /**颜色*/
    $red: #F04055;
    $black: #222222;
    $blackLight: #4b4b57;
    $gray: #989898;
    $default: #ededed;
    $white: #FFFFFF;
    $orange: #EE8A1F;
    $blue: #00AAEE;
    $zjyx: #06a0f3;

    * {
        font-size: $fontSizeNormal;
    }

    body {
        color: $blackLight;
    }

    /**尺寸*/
    $s5: rem(5px);
    $s10: rem(10px);
    $s15: rem(15px);
    $s20: rem(20px);
    $s30: rem(30px);
    $s40: rem(40px);
    $s50: rem(50px);
    $s60: rem(60px);
    $s70: rem(70px);
    $s80: rem(80px);
    $s90: rem(90px);
    $s100: rem(100px);
    $s110: rem(110px);
    $s120: rem(120px);

    /*padding*/

    .pd5 {
        padding: $s5;
    }

    .pdt5 {
        padding-top: $s5;
    }

    .pdb5 {
        padding-bottom: $s5;
    }

    .pdl5 {
        padding-left: $s5;
    }

    .pdr5 {
        padding-right: $s5;
    }

    .pd10 {
        padding: $s10;
    }

    .pdt10 {
        padding-top: $s10;
    }

    .pdb10 {
        padding-bottom: $s10;
    }

    .pdl10 {
        padding-left: $s10;
    }

    .pdr10 {
        padding-right: $s10;
    }

    .pd15 {
        padding: $s15;
    }

    .pdt15 {
        padding-top: $s15;
    }

    .pdb15 {
        padding-bottom: $s15;
    }

    .pdl15 {
        padding-left: $s15;
    }

    .pdr15 {
        padding-right: $s15;
    }

    .pd20 {
        padding: $s20;
    }

    .pdt20 {
        padding-top: $s20;
    }

    .pdb20 {
        padding-bottom: $s20;
    }

    .pdl20 {
        padding-left: $s20;
    }

    .pdr20 {
        padding-right: $s20;
    }

    /*margin*/

    .mg5 {
        margin: $s5;
    }

    .mgt5 {
        margin-top: $s5;
    }

    .mgb5 {
        margin-bottom: $s5;
    }

    .mgl5 {
        margin-left: $s5;
    }

    .mgr5 {
        margin-right: $s5;
    }

    .mg10 {
        margin: $s10;
    }

    .mgt10 {
        margin-top: $s10;
    }

    .mgb10 {
        margin-bottom: $s10;
    }

    .mgl10 {
        margin-left: $s10;
    }

    .mgr10 {
        margin-right: $s10;
    }

    .mg15 {
        margin: $s15;
    }

    .mgt15 {
        margin-top: $s15;
    }

    .mgb15 {
        margin-bottom: $s15;
    }

    .mgl15 {
        margin-left: $s15;
    }

    .mgr15 {
        margin-right: $s15;
    }

    .mg20 {
        margin: $s20;
    }

    .mgt20 {
        margin-top: $s20;
    }

    .mgb20 {
        margin-bottom: $s20;
    }

    .mgl20 {
        margin-left: $s20;
    }

    .mgr20 {
        margin-right: $s20;
    }

    $borderStyle: 1px solid #d9d9d9;

    .ui-optimat-vue-loading-layout {
        * {
            z-index: inherit;
            font-size: 12px;
        }
        z-index: 50;
        text-align: center;
        background-color: rgba(0, 0, 0, .5);

        .spinner {
            width: $s80;
            height: $s80;
            margin: 64% auto 0;
            text-align: center;
            font-size: $s20;
        }

        .spinner > div {
            height: 100%;
            width: $s10;
            background-color: white;
            display: inline-block;
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
