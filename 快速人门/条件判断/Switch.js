

// Switch是if else if else的另一种选择。
//  switch语句以switch关键字开头，后面跟着圆括号和代码块。 在代码块中，我们将有不同的情况。 
// 如果switch语句圆括号中的值与Case值匹配，则Case块运行。 
// break语句是用来终止执行的，这样代码在满足条件后就不会停止执行。 如果所有情况都不满足条件，则运行默认块。 
//  格式
// switch(caseValue){
//     case 1:
//       // code
//       break
//     case 2:
//      // code
//      break
//     case 3:
//     // code
//     default:
//      // code
//   }
//   其中 casevalue 中的 变量名， 其中必须要break 停止  ，default结束 类似于 else
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}