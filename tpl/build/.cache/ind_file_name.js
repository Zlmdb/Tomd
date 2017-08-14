/*TMODJS:{"version":1,"md5":"d4931840dbda5f3f19956f94a28381eb"}*/
template('ind_file_name',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$escape=$utils.$escape,title=$data.title,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$out='';include('./public/header');
$out+=' <div id="main"> <h3>';
$out+=$escape(title);
$out+='</h3> <ul> ';
$each(list,function($value,$index){
$out+=' <li><a href="';
$out+=$escape($value.url);
$out+='">';
$out+=$escape($value.title);
$out+='</a></li> ';
});
$out+=' <li>循环之外（测试1）</li> <li>循环之外（测试2）</li> </ul> </div> ';
include('./public/footer');
return new String($out);
});