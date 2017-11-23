/**
* @descripe js算术运算 
* @auther aijing
* @date 2017-03-19
*/

//加法(避免损失精度)
function add(a,b) {
    var le = Math.max(getDeciLe(a), getDeciLe(b));
    var pow = Math.pow(10,le);
    var result =  ((Number(a.toString()) * pow + Number(b.toString()) * pow)/pow).toFixed(le);
    return result;
}

//减法(避免损失精度)
function subtract(a,b){
	var le = Math.max(getDeciLe(a), getDeciLe(b));
	var pow = Math.pow(10,le);
    var result =  ((Number(a.toString()) * pow - Number(b.toString()) * pow)/pow).toFixed(le);
    return result;
}

//乘法(避免损失精度)
function multiply(a,b){
    var le = getDeciLe(a) + getDeciLe(b);
    var result = Number(a.toString().replace(".","")) * Number(b.toString().replace(".",""))/Math.pow(10,le);
    return result;
}

//除法(避免损失精度)
function divide(a,b){
    var le = getDeciLe(a) - getDeciLe(b);
    var result = Number(a.toString().replace(".","")) / Number(b.toString().replace(".",""))/Math.pow(10,le);
    return result;
}

//获取小数位的长度
function getDeciLe(num){
	return num.indexOf(".") > 0 ? num.toString().split(".")[1].length : 0 ;
}