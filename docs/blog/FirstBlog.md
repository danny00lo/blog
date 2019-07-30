# 什么是词法作用域

## 前言

这两天有人突然问我词法作用域，但是这个好像没有怎么听过。或者更多人是在说作用域
到底词法作用域是什么，我对以下作出了一些理解

## 认知
词法作用域是对于作用域执行的一个规则

> 例子:

```js
var b = 2
function abc(){
  var abc = 1
  console.log(abc)
  console.log(Number(abc)+Number(b));
  function (abc){
    var y = 0;
    console.log(y+abc)
  }
}
abc()
```

这个例子中有个三个嵌套的作用域，
第一个:
```js
var b= 2;
function abc(){
  var abc = 1


}
abc()
```
第二个
```js
  var abc = 1
  console.log(abc)
  console.log(Number(abc)+Number(b));
  function (abc){
    var y = 0;
    console.log(y+abc)
  }
```

第三个
```js
  function (abc){
    var y = 0;
    console.log(y+abc)
  }
```

>所谓的词法作用域就是在你写代码时将变量和块作用域写在哪里来决定，也就是词法作用域是静态的作用域，在你书写代码时就确定了。



