import { test } from '@src'
import { hello } from '@src/hello'
import { helloTest } from '@src/hello/hello-test'
export const mainApp = () => {
  console.log('主app')
  console.log('测试返回可选链',  test())
  hello()
  helloTest()
}