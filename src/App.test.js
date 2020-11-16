// v to push to remote branch v
// git add -A
// git commit -m 'message'
// git push remote master
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// First test to see if first test passes
// test('fake test 1', () => {
// 	expect(true).toBeTruthy();
// });

// First test to see if second test fails
// test('fake test 2', () => {
// 	expect(false).toBeTruthy();
// });

// First test to see if second test passes
// test('fake test 2', () => {
// 	expect(false).toBeFalsy();
// });

// Testing a function
import { add } from './App';
// console.log(add(1, 2));
test('add', () => {
	// const value = add(1, 2);
	// expect(value).toBe(3);
	expect(add(1, 2)).toBe(3);
	expect(add(5, 2)).toBe(7);
});
