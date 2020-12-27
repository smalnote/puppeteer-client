import {HelloWorld} from '../src/index';

test('hello world', () =>{
  const hw = new HelloWorld();
  expect(hw.sayHello()).toBe('Hello world');
})