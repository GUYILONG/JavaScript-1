// javascript 语法的格式为 if(){....} else { ...} 


age = 10
if (age > 9) {
    console.log("妈妈我恋爱了");
} else {
    console.log("妈妈我失恋了");
}


// 简单模式

var age = 20

if (age < 10)
    console.log("妈妈我恋爱了");
else
    console.log("妈妈我失恋了");
// alert("数字")  如果不加{} 就会报错哦


// 多条件判断  if else if else 
var age = 3
if (age >= 18) {
    console.log("妈妈我恋爱了");
} else if (age < 2) {
    console.log("妈妈我恋爱了~~~~~");

} else {
    console.log("妈妈我失恋了");
}
// 上述多个if...else...的组合实际上相当于两层if...else...：
var age = 3
if (age >= 19) {
    console.log("妈妈我恋爱了");
} else {
    if (age >= 19) {
        console.log("妈妈我恋爱了~~~~~");
    } else {
        console.log("妈妈我失恋了QAQ");
    }
}
// 由于age的值为20，它实际上同时满足条件age >= 6和age >= 18，这说明条件判断的顺序非常重要。请修复后让其显示adult
// JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true。

