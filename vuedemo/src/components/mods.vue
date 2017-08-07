<!--组件的使用示例-->
<template>

    <div class="father-mod">

        路由到父组件：

        <!-- 子组件1：vue生命周期的示例 -->
          <mod1></mod1>  

         <!-- 子组件2：父组件传值给子组件，通过父组件的属性 -->
         <!-- 注意：父组件的属性不能有大写，只能用小写或者横线 -->
          <mod2 :mod-data="modData"></mod2> 
    </div>


</template>

<script>
    // 引入外部js的方法,此处暂不引入
    // import app from "//res.suning.cn/public/v5/js/zepto/1.1.4/app.js";

    // 引入子组件
    import mod1 from './mod1.vue';


    export default {
        data(){
            return {
                modData:'2、父组件传给子组件的值'
            }
        },
        // 初始化引入子组件,两种引入方式
        components: { 
            'mod1': mod1,
            'mod2': require('./mod2.vue')
         }
    }
</script>

<style>
    /* 引入外部css的方法 */
    @import "//res.suning.cn/public/v5/common/2.0.0/m-common.css";

    .father-mod{
        font-size: .6rem
    }
</style>