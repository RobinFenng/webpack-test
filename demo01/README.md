##webpack step 1
Hello world
###步骤
1.	cd 目录
2.	webpack 打包
3.	webpack-dev-server 启动http服务 


```

	var path = require('path');
	module.exports = {
	    entry: './main.js',
	    output: {
	        path: path.resolve(__dirname, 'build'),
	        filename: 'bundle.js'
	    }
	};

```


###参数
-	entry : 源文件
-	output->path:编译后存放的地址
-	output->filename:编译后的文件名
 

