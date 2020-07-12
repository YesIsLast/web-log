
// 对象数组排序
var arr = [
	{
		id: 1,
		name: "qqqq"
	},
	{
		id: 3,
		name: "eeee"
	},
	{
		id: 2,
		name: "wwww"
	}
]
console.log(arr.sort(sortR))
function sortR(value1, value2) {
	if (value1.id > value2.id) {
		return -1
	} else if (value1.id < value2.id) {
		return 1
	} else {
		return 0
	}
}
// 阻止页面触摸穿透滑动
document.getElementById("sidebar-black").addEventListener('touchmove', function (e) {
	e.preventDefault();
}, false);
// 地板值小数保留（终极大法）
function formatTofixed(num, n) {
	let regxp = new RegExp('([0-9]+\.[0-9]{' + n + '})[0-9]*')
	return num.toString().replace(regxp, "$1")
}

/**
 * 数组解析字符串
 * @param {Object} list
 */
function getJsonStringify(list) {
	let result = ""
	list.forEach(item => {
		result = result + item + ","
	})
	return result.substr(0, result.length - 1)
}
/**
 * 字符串转数组
 * @param {Object} str 
 */
function getJsonSplit(str) {
	if (str != "") {
		return str.split(",")
	}
	return []
}

/**
 * js 日期格式化
 * 传时间戳参数进行时间戳转换，不传时返回当前时间（返回年月日时分秒格式）
 * @param {Object} timeStamp 时间戳参数 非必传
 * @param {Object} format 格式化样式 非必传
 */
function getTimeStampDatetime(format = 'yyyy-MM-dd HH:mm:ss', timeStamp) {
	let nowDatetime = new Date()
	timeStamp ? nowDatetime = new Date(timeStamp) : nowDatetime = new Date()
	return nowDatetime.Format(format)
}
Date.prototype.Format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"H+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[
			k]).substr(("" + o[k]).length)));
	return fmt;
}

/**
 * 数组去重
 * @param {Object} list	数组
 * @param {String} groupByName	数组对象要去重得字段
 */
function arrGroupBy(list, groupByName) {
	let result = []
	let obj = {}
	// 数组对象去重[{name:"1"},{name:"2"},{name:"1"}]
	if (groupByName) {
		for (let i of list) {
			if (!obj[i[groupByName]]) {
				result.push(i[groupByName])
				obj[i[groupByName]] = 1
			}
		}
	}
	// 数组去重[1,2,3,4,3,5,7,2]
	else {
		for (var i = 0; i < list.length; i++) {
			if (result.indexOf(list[i]) == -1) {
				result.push(list[i]);
			}
		}
	}
	return result
}
/**
 * 加法
 * @param arg1
 * @param arg2
 * @returns
 */
function accAdd(arg1, arg2) {
	var r1, r2, m;
	try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 };
	try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 };
	m = Math.pow(10, Math.max(r1, r2));
	return (arg1 * m + arg2 * m) / m;
}

/**
* 减法
* @param arg1
* @param arg2
* @returns
*/
function accSubtr(arg1, arg2) {
	var r1, r2, m, n;
	try { r1 = arg1.toString().split(".")[1].length; } catch (e) { r1 = 0; }
	try { r2 = arg2.toString().split(".")[1].length; } catch (e) { r2 = 0; }
	m = Math.pow(10, Math.max(r1, r2));
	//动态控制精度长度
	n = (r1 >= r2) ? r1 : r2;
	return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

/***
* 乘法，获取精确乘法的结果值
* @param arg1
* @param arg2
* @returns
*/
function accMul(arg1, arg2) {
	var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
	try { m += s1.split(".")[1].length } catch (e) { };
	try { m += s2.split(".")[1].length } catch (e) { };
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

/***
* 除法，获取精确乘法的结果值
* @param arg1
* @param arg2
* @returns
*/
function accDivCoupon(arg1, arg2) {
	var t1 = 0, t2 = 0, r1, r2;
	try { t1 = arg1.toString().split(".")[1].length; } catch (e) { }
	try { t2 = arg2.toString().split(".")[1].length; } catch (e) { }
	with (Math) {
		r1 = Number(arg1.toString().replace(".", ""));
		r2 = Number(arg2.toString().replace(".", ""));
		return (r1 / r2) * pow(10, t2 - t1);
	}
}

