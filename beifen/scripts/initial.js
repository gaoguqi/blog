$(function(){
		$("tbody>tr:odd").addClass("odd"); //先排除第一行,然后给奇数行添加样式
		$("tbody>tr:even").addClass("even"); //先排除第一行,然后给偶数行添加样式
		$("tr:contains('周日')").addClass("selected");
		var footer = $("<div id='footer'>All copyrights reserved by GaoGuqi.</div>");
		$("body").append(footer);
		
		var header = $("<p class='siteName'><a href='http://www.gaoguqi.com' id='logo' title='TG AND LR'S BLOG'>卫生经济管理</a></p><p class='description'>高古奇的学习探索</p>");
		$("body header").prepend(header);
		
  })