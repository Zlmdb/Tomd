在当前目录 得有个package.json文件，   并且在命令行中，得进入当前目录(tpl目录),输入tmod命令，然后它会自动找到各个.html文件之间的依赖，打包成一个js文件（这个js里面包含html代码和js引擎代码，直接用<script>标签引用这个文件即可），放在build目录里面，并且命令行会一直处于监听状态，模板文件的改变它都会监听到，并自动打包合并。 


注意1：npm install -g tmodjs  是全局安装，运行tmod命令是在工作目录(模板目录tpl)中运行，因为是本地编译，编译成静态js文件，然后在html文件中用<script>标签引入这个编译好的js文件。


注意2：
这里的ind_file_name.html文件名就是document.getElementById('doc').innerHTML = template('ind_file_name', data);这里面的'ind_file_name',是一一对应的关系，即"模板入口"。

