/**
 * @file vue iscroll指令，用指令封装iscroll进行dom操作
 * @author MarxJiao
 * @date 2016/12/03
 */

//var IScroll =  require('http://res.suning.cn/public/v5/mod/iscroll-lite/5.1.3/iscroll-lite.js');
import IScroll from 'http://res.suning.cn/public/v5/mod/iscroll-lite/5.1.3/iscroll-lite.js';

const VIScroll = {
    install(Vue, options) {
        Vue.directive('iscroll', {
            bind(el, binding, vnode, oldVnode) {
                // 判断输入参数
                let vtype = binding.value ? [].toString.call(binding.value) : undefined;
                // 设置iscorll属性的参数
                let iscrollOptions  = vtype === '[object Object]' ? binding.value : options;
                // 阻止touchmove默认事件
                el.addEventListener('touchmove', event => {
                    event.preventDefault();
                })
                // 建立新的iscroll
                new IScroll(el, iscrollOptions);
            },
            update(el, binding, vnode, oldVnode) {
                  // 判断输入参数
                let vtype = binding.value ? [].toString.call(binding.value) : undefined;
                // 设置iscorll属性的参数
                let iscrollOptions  = vtype === '[object Object]' ? binding.value : options;
                // 阻止touchmove默认事件
                el.addEventListener('touchmove', event => {
                    event.preventDefault();
                })
                // 建立新的iscroll
                new IScroll(el, iscrollOptions);
            },
            unbind(el, binding, vnode, oldVnode) {
                /**
                 * 解除绑定时要把iscroll销毁
                 */
                vnode.scroll = oldVnode.scroll;
                vnode.scroll.destroy();
                vnode.scroll = null;
            }
        })
    }
}
export default VIScroll;