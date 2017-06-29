# Weex-Demo
Weex，基于VUE的替代Native开发方案，性能好，体验佳，可组件化，目前ali/taobao/suning在用

# Weex项目的调试（图片待添加）
## 1、启动编译监视：npm run dev
（1）在项目目录执行webpack，编译生成js文件<br>
（2）执行 npm run dev启动编译监听<br>

## 2、启动本地服务：npm run serve
（1）启动服务后，记下服务端口<br>
（2）使用ifconfig查看本机ip为：10.25.54.106<br>




## 3、制作二维码
（1）根据ip和端口，以及生成的js路径，拼出url：http://10.25.54.106:4321/dist/phb.weex.js<br>
（2）根据url生成二维码：https://cli.im/text?6a1f9e759fb82c8c93b37f09302feeaf<br>
（3）使用手机扫描二维码（必须要保证手机和服务在同一内网，即手机能访问IP：10.25.54.106:4321）<br>

## 4、使用通用组件console.log，打印调试信息（其实是alert）
```javascript
        created() {
                        if (weex.config.env.platform == 'Web') {
                                this.env = 'web'
                        } else {
                                this.env = 'weex'
                                console.log = require('./module/console').log
                        }
                },
```

## 5、使用weex debug查看调试信息
（1）在项目目录执行 weex debug（此时，chrome会自动打开一个页面）<br>
（2）扫描页面上的二维码（使用weexplaygound扫描，此时是打开调试功能）<br>
（3）扫描js生成的对应二维码（此时是调试具体的页面）<br>
（4）点击页面上的debugger或者inspector进入调试页面（参考：http://weex.apache.org/cn/guide/tools/toolkit.html）<br>
（5）打开chrome的console，可以看到对应的调试信息（局域网要快才行）<br>


