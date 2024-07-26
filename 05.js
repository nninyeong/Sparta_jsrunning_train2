// 5. forEach로 변환해보기
//해당 문제를 forEach로 변경하여 풀어주세요
let arr = [10, 20, 30];

// 해당 로직을 작성하세요
arr.forEach((num, idx, array) => {
  array[idx] = num * 10;
});

// 결과 값: [100, 200, 300] 출력해주세요
console.log(arr);

let arr2 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
const answer = [];
arr2.forEach((num) => {
  if (num % 5 === 0) answer.push(num);
});

// 결과값 [10]
console.log(answer);
