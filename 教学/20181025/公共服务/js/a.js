// 动态添加个人办事中的内容
// var grbsDiv = document.querySelector(".grbs");

var boxTitle = document.querySelector(".box-title");
var serviceCataTile = document.querySelector("#service-cata-tile");
for (var i = 0; i < source1.length; i++) {
	// 往boxTitle 中 动态添加 导航
	var navItem = document.createElement("div");
	
	if (i == 0) {
		navItem.className = "nav-item red";
	}else{
		navItem.className = "nav-item";
	}
	navItem.innerHTML = source1[i].name;
	boxTitle.appendChild(navItem);

	// 动态创建bs,并添加在 service-cata-tile
	var bsDiv = document.createElement("div");
	if (i == 0) {
		bsDiv.className = "bs visibility";
	}else{[]
		bsDiv.className = "bs";
	}
	serviceCataTile.appendChild(bsDiv);

	// 动态创建 groupDiv,并添加到 bsDiv中
	var groupDiv = document.createElement("div");
	groupDiv.className = "group";
	bsDiv.appendChild(groupDiv);
	// 动态创建 contentDiv,并添加到 bsDiv中
	var contentDiv = document.createElement("div");
	contentDiv.className = "content";
	bsDiv.appendChild(contentDiv);

	// 遍历 source1 中的每一个 groups
	var groups = source1[i].groups;
	for (var j = 0; j < groups.length; j++) {
		// 动态创建 group-item，并添加在 groupDiv中
		var groupItem = document.createElement("span");
		if (j == 0) {
			groupItem.className = "group-item active";
		}else{
			groupItem.className = "group-item";
		}
		
		groupItem.innerHTML = groups[j].kindName;
		groupDiv.appendChild(groupItem);
		// 动态创建 div,并添加在contentDiv 中
		var div = document.createElement("div");
		if (j == 0) {
			div.className = "show";
		}
		contentDiv.appendChild(div);

		if (j <= 1) {
			// 遍历 groups 中的 items
			var items = groups[j].items;
			for (var k = 0; k < items.length; k++) {
				// 动态创建 cItem,并添加在 div 中
				var cItem = document.createElement("div");
				cItem.className = "c-item";
				div.appendChild(cItem);

				// 动态创建 icon,并添加在 cItem 中
				var icon = document.createElement("div");
				icon.className = "icon";
				icon.innerHTML = items[k].icon;
				cItem.appendChild(icon);

				// 动态创建 nameDiv,并添加在 cItem 中
				var nameDiv = document.createElement("div");
				nameDiv.className = "name";
				nameDiv.innerHTML = items[k].name;
				cItem.appendChild(nameDiv);
			}
		}else{
			// 遍历 groups 中的 items
			var items = groups[j].items;
			for (var k = 0; k < items.length; k++) {
				// 动态创建 bmItem,并添加在 div 中
				var bmItem = document.createElement("div");
				bmItem.className = "bm-item";
				bmItem.innerHTML = items[k];
				div.appendChild(bmItem);
			}
		}
	}
}

// 当鼠标悬浮在 小组名称上的时候 （按主题分类 按特殊群体分类 按部门分类）
var groupItem1s = document.querySelectorAll(".bs:nth-of-type(2) .group-item");
var div1s = document.querySelectorAll('.bs:nth-of-type(2)>.content>div');
for (var i = 0; i < groupItem1s.length; i++) {
	groupItem1s[i].index = i;
	groupItem1s[i].onmouseenter = function (e) {
		for (var j = 0; j < groupItem1s.length; j++) {
			// 把groupItem1s中所有的 span 的类名改为 group-item
			groupItem1s[j].className = "group-item";
			// 把div1s中的所有 div 的类名设置为 ""
			div1s[j].className = "";

		}
		// e.target.index 对应的 group-item 的类名设置为 group-item active
		groupItem1s[e.target.index].className = 'group-item active';
		// e.target.index 对应的 div1s中的 div 的类名设置为 show
		div1s[e.target.index].className = "show";
	};
}

// 当鼠标悬浮在 小组名称上的时候 （按主题分类 按特殊群体分类 按部门分类）
var groupItem2s = document.querySelectorAll(".bs:nth-of-type(3) .group-item");
var div2s = document.querySelectorAll('.bs:nth-of-type(3)>.content>div');
for (var i = 0; i < groupItem2s.length; i++) {
	groupItem2s[i].index = i;
	groupItem2s[i].onmouseenter = function (e) {
		for (var j = 0; j < groupItem2s.length; j++) {
			// 把groupItem1s中所有的 span 的类名改为 group-item
			groupItem2s[j].className = "group-item";
			// 把div1s中的所有 div 的类名设置为 ""
			div2s[j].className = "";

		}
		// e.target.index 对应的 group-item 的类名设置为 group-item active
		groupItem2s[e.target.index].className = 'group-item active';
		// e.target.index 对应的 div1s中的 div 的类名设置为 show
		div2s[e.target.index].className = "show";
	};
}


var navItems = document.querySelectorAll(".nav-item");
var bss = document.querySelectorAll(".bs");
for (var i = 0; i < navItems.length; i++) {
	navItems[i].index = i;
	navItems[i].onclick = function(e){
		for (var j = 0; j < navItems.length; j++) {
			// 把navItems中所有的 div 的类名改为 nav-item
			navItems[j].className = "nav-item";
			// 把bss中的所有 div 的类名设置为 "bs"
			bss[j].className = "bs";

		}
		// e.target.index 对应的 nav-item 的类名设置为 nav-item red
		navItems[e.target.index].className = 'nav-item red';
		// e.target.index 对应的 bss中的 div 的类名设置为 bs visibility
		bss[e.target.index].className = "bs visibility";
	};
}



