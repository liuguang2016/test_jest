var result = add(3,3);

expected = 6;

if(expected !==result){
  throw Error(`加法验证不通过:3+3应该等于${expected},结果却是${result}`);
}
