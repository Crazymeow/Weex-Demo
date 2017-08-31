<!--组件的使用示例-->
<template>

    <div class="father-mod">

        路由到父组件：

        	 <!-- 子组件1：vue生命周期的示例 -->
         <!--<mod1></mod1>-->  

         <!-- 子组件2：父组件传值给子组件，通过父组件的属性 -->
         <!-- 注意：父组件的属性不能有大写，只能用小写或者横线 -->
         <!--<mod2 :mod-data="modData"></mod2>--> 
          
         <!--导航标题-->
       	 <p class="info">导航标题</p>
         <sn-nav title="导航标题"></sn-nav>
         
         
         
         <!--滑动tab-->
         <p class="info">滑动tab</p>
         <p class="info">
         	1、tabSlide为tab切换回调方法<br />
         	2、tabList为tab数据<br />
         	3、tabOpts为tab配置项<br />
         </p>
         
         <sn-tab @tabChange="tabChange" :list="tabList" :opts="tabOpts"></sn-tab>
         
         <!--横向滚动-->
         <p class="info">横向滚动广告</p>
         <sn-slip :list="slipList"></sn-slip>
         
         
         
         <!--滑动联版-->
      	 <p class="info">滑动联版广告</p>
         <sn-swipe :list="swipeList"></sn-swipe>
         
         
         <!--列表数据-->
         <p class="info">列表数据</p>
         <sn-list></sn-list>

         <!--加载更多数据效果-->
         <p class="info">加载更多数据效果，可以取值：done、loading</p>
 		 <sn-loading :status="loadStatus"></sn-loading>
		 <sn-loading status="done"></sn-loading>
		 
		 	
		 <!--弹框组件-->
		 <p class="info">
 			<a @click="alertMini" class="sn-btn sn-btn-positive sn-btn-big sn-btn-block mt10" id="mini">小弹窗 toast</a>
			<a @click="alertBtns" class="sn-btn sn-btn-positive sn-btn-big sn-btn-block mt10" id="doubleBtn">双按钮弹窗</a>
			<a @click="alertCancel" class="sn-btn sn-btn-positive sn-btn-big sn-btn-block mt10" id="onceCancel">只有取消按钮</a>
			<a @click="alertConfirm" class="sn-btn sn-btn-positive sn-btn-big sn-btn-block mt10" id="onceConfirm">只有确认按钮</a>
			<a @click="alertFixed" class="sn-btn sn-btn-positive sn-btn-big sn-btn-block mt10" id="fixed">弹窗 fixed</a>
			<!--<div style="height:800px"></div>-->
		 </p>
         
    </div>


</template>

<script>
    // 引入外部js的方法,此处暂不引入
    // import app from "//res.suning.cn/public/v5/js/zepto/1.1.4/app.js";
	import AlertBox from "../../module/alertBox.js";

	// 引入子组件，写法一
    import mod1 from './mod1.vue';


    export default {
        data(){
            return {
                modData:'2、父组件传给子组件的值',
                
                
                //滑动数据
                tabList:[
		    			{id:"id1",name: "畅销排行",trickPoint:"name1"},
		    			{id:"id2",name: "手机",trickPoint:"name2"},
		    			{id:"id3",name: "电脑",trickPoint:"name3"},
		    			{id:"id4",name: "数码",trickPoint:"name4"},
		    			{id:"id5",name: "手机配件",trickPoint:"name5"},
		    			{id:"id6",name: "电脑外设",trickPoint:"name6"}
		    		],
		    		tabOpts: {
	            	    scrollX: true,
	    				scrollY: false,	
	                click: false,
	                useTransform: true,
	                preventDefaultException: {
	                		tagName: /.*/
	                },
	                eventpassthrough: true
	            },
				
				//联版数据
	            swipeList: [
	    				{url: "//image4.suning.cn/uimg/MFS/show/150097189354276844.jpg"},
	    				{url: "//image4.suning.cn/uimg/MFS/show/150097325360958549.jpg"},
	    				{url: "//image4.suning.cn/uimg/MFS/show/150097376771784636.jpg"}
		    		],
		    		
		    		//滑动广告数据
	    		    slipList: [
	    				{url: "//image4.suning.cn/uimg/MFS/show/150097189354276844.jpg"},
	    				{url: "//image4.suning.cn/uimg/MFS/show/150097325360958549.jpg"},
	    				{url: "//image4.suning.cn/uimg/MFS/show/150097376771784636.jpg"}
		    		],
		    		
		    		//项目中直接设置变量值改变sn-loading的展示效果
		    		loadStatus: "loading"
		    		
            }
        },
        // 初始化引入子组件,两种引入方式，写法二:
        components: { 
            'mod1': mod1,
            'mod2': require('./mod2.vue'),
            'sn-nav': require('./sn-nav.vue'),
            'sn-tab': require('./sn-tab.vue'),
            'sn-swipe': require('./sn-swipe.vue'),
            'sn-slip': require('./sn-slip.vue'),
            'sn-list': require('./sn-list.vue'),
            'sn-loading': require('./sn-loading.vue')

        },
        
        methods: {
			/**
			 * tab切换回调方法
        		 */
        		tabChange(obj){
        			console.log("tab:",obj);
        		},
        		
        		
        		alertMini(){
        			
        			console.log(typeof AlertBox);
        			
        			AlertBox({
		            type: 'mini',
		            msg: "小弹窗 toast 示例"
		        });
        		},
        		
        		alertBtns(){
        			AlertBox({
		            type: 'doubleBtn',
		            title: "双按钮弹窗",
		            msg: "双按钮弹窗内容",
		            cancel: function(){
		                alert("cancel")
		            },
		            confirm: function(){
		                alert("confirm")
		            }
		        });
        		},
        		alertCancel(){
        			AlertBox({
		            type: 'onceCancel',
		            msg: "只有取消按钮",
		            cancel: function(){
		                alert("cancel")
		            },
		            cancelText: "取消按钮文本"
		        })
        		},
        		alertConfirm(){
        			AlertBox({
		            type: 'onceConfirm',
		            msg: "只有确定按钮",
		            confirm: function(){
		                alert("confirm")
		            }
		        })
        		},
        		alertFixed(){
        			AlertBox({
		            type: 'onceConfirm',
		            alertType: "fixed",
		            msg: "只有确定按钮",
		            confirm: function(){
		                alert("confirm")
		            }
		        });
        		}
        }
    }
</script>

<style>
    /* 引入外部css的方法 */
    /* @import "//res.suning.cn/public/v5/common/2.0.0/m-common.css"; */
	.info{
		padding: .4rem 0;
		margin: .4rem 0;
	}
    .father-mod{
        font-size: .6rem
    }
    
    
    
    .sn-btn.sn-btn-positive {
	    background: #ffc001;
	    color: #fff;
	}
	.sn-btn.sn-btn-big {
	    height: 1.56rem;
	    line-height: 1.56rem;
	    font-size: .6rem;
	}
	.sn-btn.sn-btn-block {
	    display: block;
	}
	.sn-btn {
	    display: inline-block;
	    padding: 0 .5rem;
	    height: 1.2rem;
	    line-height: 1.2rem;
	    border-radius: .1rem;
	}
</style>