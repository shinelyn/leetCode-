const isValid = (s)=>{
  if(s.length % 2===1) return false;
  let stack = [];
  for(let i=0;i<s.length;i++){
    const c = s[i];
    //如果是左括号就入盏
    if(c==="("||c==="{"||c==="["){
      stack.push(c)
    }else{
      if(!stack.length) return false;
      //拿到最后一个左括号
      const top = stack[stack.length-1];
      // 如果是左括号和右括号能匹配就出站
      if((top ==="(" && c===")")||(top ==="{" && c==="}")||(top ==="[" && c==="]")){
        stack.pop();
      }else{
        return  false
      }
    }
  }
  return stack.length === 0
}

