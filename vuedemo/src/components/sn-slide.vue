<!--npm install viscroll-->
<!--使用的是：https://github.com/MarxJiao/vue-iscroll-directive-->

<template>
	
    <!-- 使用iscroll指令，这里的iscroll实例使用Vue.use初始化指令时的参数-->
    <div v-iscroll>
        <!-- content -->
    </div>
    <!-- 也可以在使用的时候设置iscroll的参数 -->
    <div v-iscroll="iscrollConf">
        <!-- content -->
    </div>
    

<!--	<div class="sticky">-->
	<div class="pr">
	    <div class="app-type-choose sticky" id="sticky" data-hasmore="true" style="position: static;">
	        <div class="app-scroller" style="touch-action: none;">
	            <div class="scroller-items hor-view" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
	                <a v-for="(tab,idx) in list" name="tab.trickPoint" class="item">{{tab.name}}</a>
	            </div>
	        </div>
	        <div class="app-type-more-right" id="S_more"><span>更多</span>
	        </div>
	        <div class="app-type-more type-choose fix hide" style="display: none;">
	            <div class="items-shadow">
	                <a v-for="(tab,idx) in list" name="tab.trickPoint" class="item">{{tab.name}}</a>
	            </div>
	        </div>
	    </div>
	</div>
</div>
</template>



<script> 
	
//	import slide from "http://res.suning.cn/public/v5/mod/iscroll-lite/5.1.3/iscroll-lite.js";
	import VIscroll from '../../module/VIscroll.js';

//	Vue.use(VIscroll, {
//	    mouseWheel: true,
//	    click: false,
//	    preventDefault: true,
//	    tap: false,
//	    bounce: false,
//	    disableTouch: true
//	});
	
	export default {
	  data () {
	    return {
	    		iscrollConf: {
                mouseWheel: true,
                vScrollbar: true,
                click: true,
                preventDefault: true,
                tap: true,
                bounce: false,
                disableTouch: true
            },
	    		list:[
	    			{id:"id1",name: "畅销排行",trickPoint:"name1"},
	    			{id:"id2",name: "手机",trickPoint:"name2"},
	    			{id:"id3",name: "电脑",trickPoint:"name3"},
	    			{id:"id4",name: "数码",trickPoint:"name4"},
	    			{id:"id5",name: "手机配件",trickPoint:"name5"},
	    			{id:"id6",name: "电脑外设",trickPoint:"name6"}
	    		]
	    }
	  }
	}
	
	
</script>  



<style>

</style>