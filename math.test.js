const math = require("./math");
const { add, minus, multi } = math;

test("加法方法的测试3+2",()=>{
  expect(add(3,2)).toBe(5);
});

test("minus方法的测试3-2",()=>{
  expect(minus(3,2)).toBe(1);
});

test("minus方法的测试3*2",()=>{
  expect(multi(3,2)).toBe(6);
});
