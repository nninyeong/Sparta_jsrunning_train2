// 1
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [10, 2, 3] 얕은복사로 arr1의 주소값이 복사되어 arr2의 요소를 수정하는 경우 arr1이 참조하는 같은 배열을 수정하게 됩니다.
console.log(arr1 === arr2); // true arr1, arr2에 담긴 값은 주소값으로 두 변수는 같은 주소값을 갖고있습니다.

// 2
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = obj1; // 얕은 복사 코드 작성

// /* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
obj2.d = 4;

// /* 해당값 obj1, obj2의 값을 출력해주세요 */
console.log(obj1); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }
