import { expect } from "@jest/globals"

test("匹配器的测试",()=>{
  //toBe:会比较值和地址
  // expect(10).toBe(10);

  //toEqual:仅比较值

  //toBeNull:判null

  //toBeUndefinde: 判undefinde

  //toBeDefinde: 判断已定义

  //toBeTruthy: 判断为真

  //toBeFalsy: 判断为假

  //toBeGreaterThan: 判断比大于

  //toBeLessThan: 判断小于

  //toBeGreaterThanOrEqual: 大于或等于

  //toBeCloseTo: 浮点数等于

  //toMatch: 匹配字符串是否包含

  //toContain: 数组,set是否包含

  //toThrow: 函数抛出异常
  const throwNewErrorFunc = () =>{
    throw Error("是否会抛出异常");
  }
  expect(throwNewErrorFunc).toThrow();

})