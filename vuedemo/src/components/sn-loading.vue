<template>
	<div :class="['loadmore','sn-loading-type',status]" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
		<div class="end sn-end-loading"><span>DUANG~到底了</span></div>
		<div class="loading sn-local-loading"><span class="shape"></span><span>努力加载中...</span></div>
	</div>
</template>

<style>
	.sn-loading-type {
	    margin: .4rem 0
	}
	
	.sn-loading-type .loading {
	    display: none
	}
	
	.sn-loading-type .end {
	    display: block
	}
	
	.sn-loading-type.loading .loading {
	    display: block
	}
	
	.sn-loading-type.loading .end {
	    display: none
	}
	
	.sn-loading-type.done .loading {
	    display: none
	}
	
	.sn-loading-type.done .end {
	    display: block
	}
</style>

<script>
	import Vue from 'vue';

	export default {
		props: {
			status: {
				default: "done"
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>