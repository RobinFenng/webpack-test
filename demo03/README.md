##webpack step 2
编译多源文件

###步骤
1.	cd 目录
2.	webpack 打包
3.	webpack-dev-server 启动http服务 

###webpack.config.js
```

	var path = require('path');
	module.exports = {
    entry: {
        'bundle1':'./main.js',
        'bundle2':'./entry2.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    }
};

```


####参数
-	entry:key-value类型，key即为output中的filename，value为源文件。
-	output：path->编译后存放的地址
-	output: filename``[name]``为entry的key,可更改类似``	[name]xxx``，编译后则为``bundle1xxx.js``,``bundle2xxx.js``

