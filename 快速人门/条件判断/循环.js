//循环的目的是对了对象和数组重复计算做出方便快捷的方法
//循环分为两种：
//第一种：for通过初始条件、结束条件和递增条件来循环执行语句块：
//第二种：forin对对象进行遍历

//第一种
// varx = 0
// vari

// for (i = 0; i < 1000; i++) {
//     x = x + i
//     console.log(x);
// }


// 第二种
// for (const element of arr) {
//     // code goes here
//   }
let num = [1,2,3,4,6,7,8,9]
for (u of num){
    console.log(u);
}