

const twoSum = function (nums, target) {
  // 建立一个字典数据结构来保存需要的值
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 获取当前的值，和需要的值
    const n2 = target - nums[i];
    // 如字典中有需要的值，就匹配成功
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
    // 如没有，则把需要的值添加到字典中
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum([1,2,3,4,5],6))

// 两个数组取交集
const intersection =(num1,nums2)=>{
  const map = new Map();
  // 将数组1中的数字放入map中
  num1.forEach((n)=>map.set(n,true));
  // 创建一个新数组
  const res=[];
  nums2.forEach((n)=>{
    if(map.has(n)){
      res.push(n);
      map.delete(n)
    }
  })
  return res;
}

console.log(intersection([1,2,3,4,5,2],[1,2,4,6,5]))



function sum (x) {
  console.log(x)
  return function(y) {
      return x + y;
  }
}

function curry (fn, currArgs) {
  return function() {
      let args = [].slice.call(arguments);
      console.log(args)
      if (currArgs !== undefined) {
          args = args.concat(currArgs);
      }

      // 递归调用
      if (args.length < fn.length) {
          return curry(fn, args);
      }
      return fn.call(null, args);
  }
}


// console.log(sum(1)(1)(1)())


// js 实现斐波那契数列
// 直接用递归的话，当数字较大的时候，会变得特别慢，因为在计算F9的时候，先要算F8,和F7，计算F8的时候，要先算F7和F6，这里F7就会计算两次，造成不必要的浪费
// 使用数组动态规划实现
function fibonacci(n){
    let arr = [0,1];
    function calc(n){
      if(n<2){
        return arr[n]
      }
      if(arr[n]!==undefined){
        return arr[n];
      }
      let data = calc(n-1) + calc(n-2);  //用data 将每次递归得到的值保存起来。
      arr[n] = data;  // 将每次递归得到的值放到数组中保存
      return data
    }
    return calc(n)
}


console.log(fibonacci(9))

function fibonacci2(n){
  let a = [0,1,1];
  if(n>=3){
    for(let i=3;i<=n;i++){
      a[i] = a[i-1]+a[i-2]
    }
  }
  return a[n]
}

console.log(fibonacci2(9))