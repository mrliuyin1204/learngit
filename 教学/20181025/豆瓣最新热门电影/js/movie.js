var navDiv = document.querySelector(".nav");
var contentDiv = document.querySelector(".content");

for (var i = 0; i < movieArr.length; i++) {
	// 动态创建 navSpan 添加在 navDiv 中
	var navSpan = document.createElement("span");
	navSpan.innerHTML = movieArr[i].type;
	if (i == 0) {
		navSpan.className = "active";
	}
	navDiv.appendChild(navSpan);

	// 动态创建 cItem,并添加在 contentDiv 中
	var cItem = document.createElement("div");
	if (i == 0) {
		cItem.className = "citem visibility";
	}else{
		cItem.className = "citem";
	}
	contentDiv.appendChild(cItem);

	// 动态创建 cIn,并添加在 cItem 中
	var cIn = document.createElement("div");
	cIn.className = "cin";
	cItem.appendChild(cIn);

	// 遍历 movieArr[i] 中的 movies
	var movies = movieArr[i].movies;

	for (var k = 0; k < 5; k++) {
		// 动态创建 mItem 并添加在 cIn
		var mItem = document.createElement("div");
		mItem.className = "mItem";
		cIn.appendChild(mItem);

		for (var j = 0; j < movies.length; j++) {
			// 动态创建 page 并添加在 mItem
			var page = document.createElement("div");
			page.className = "page";
			mItem.appendChild(page);

			// 创建 movieImg，并添加在 page中
			var movieImg = document.createElement("img");
			movieImg.src = movies[j].imgPath;
			page.appendChild(movieImg);
			// // 创建 infoImg，并添加在 page中
			// var infoImg = document.createElement("img");
			// infoImg.className = 'info';
			// infoImg.src = "src/1.png";
			// page.appendChild(infoImg);
			// 创建 p, 并添加在 page中
			var p = document.createElement("p");
			page.appendChild(p);
			// 创建 nameSpan, 并添加在 p中
			var nameSpan = document.createElement("span");
			nameSpan.innerHTML = movies[j].name;
			p.appendChild(nameSpan);
			// 创建 scoreSpan, 并添加在 p中
			var scoreSpan = document.createElement("span");
			scoreSpan.innerHTML = movies[j].score;
			p.appendChild(scoreSpan);
		}
	}	
}


// 获取第3个之后的 navItem
var navItems = document.querySelectorAll(".nav>span:nth-of-type(n+2)");
// 获取所有的cItem
var citems = document.querySelectorAll(".citem");

for (var i = 0; i < navItems.length; i++) {
	navItems[i].index = i;
	navItems[i].onclick = function (e) {
		for (var i = 0; i < navItems.length; i++) {
			// 每一个navItem的类名设置为 ""
			navItems[i].className = "";
			// 把每一个cItem的类名设置为 'citem'
			citems[i].className = "citem";
		}

		// 把第 e.target.index 对应的 navItem 的类名设置为 "active"
		navItems[e.target.index].className = "active";
		// 把第 e.targat.index 对应的 cItem 的类名设置为 "citem visibility"
		citems[e.target.index].className = "citem visibility";

	};
}

// 轮播图

// 获取所有的 inDiv
var inDivs = document.querySelectorAll(".cin");
// 获取fenyeqi中所有的span
var fyqSpans = document.querySelectorAll(".fenyeqi>span");
// 左右两边按钮
var leftBtn = document.querySelector(".fenyeqi>.first");
var rightBtn = document.querySelector(".fenyeqi>.last");

function lunboMove(suoyin){
	// 把所有的inDiv,根据suoyin移动
	for (var i = 0; i < inDivs.length; i++) {
		inDivs[i].style.transform = "translateX(-" + 675 * suoyin + "px)";
	}
	// 把所有的fyqSpans的类名设置为 ""
	for (var i = 0; i < fyqSpans.length; i++) {
		fyqSpans[i].className = ""
	}
	// 把第 suoyin 个 fyqSpan 的类名设置为 "show"
	fyqSpans[suoyin].className = "show";

	// 更改当前索引
	currentSY = suoyin;
}
 
// 遍历 fyqSpans ，对每一个 fyqSpan 添加点击事件
for (var i = 0; i < fyqSpans.length; i++) {
	fyqSpans[i].index = i;
	fyqSpans[i].onclick = function(e){
		lunboMove(e.target.index);
	};
}


// 当前的索引
var currentSY = 0;
leftBtn.onclick = function(){
	currentSY = currentSY - 1;
	if (currentSY < 0) {
		currentSY = fyqSpans.length - 1;
	}
	lunboMove(currentSY);
}

rightBtn.onclick = function(){
	currentSY = currentSY + 1;
	if (currentSY > fyqSpans.length - 1) {
		currentSY = 0;
	}
	lunboMove(currentSY);
}










