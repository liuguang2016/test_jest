function expected(result){
  const toBe = (actual)=>{
    if(result !== actual){
      throw Error(`预期值(${actual})与结果${result}不相等`);
    }

  };

  return {toBe};
}

const test = (descripte,fn)=>{
  try {
    fn();
    console.log("测试通过");
  } catch (error) {
    console.log(`测试没有通过,${error}`);
  }
}

test("加法方法的测试3+2",()=>{
  expected(add(3,2)).toBe(6);
});
