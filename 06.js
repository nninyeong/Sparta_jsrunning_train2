// 6. 메소드 체이닝

// 주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후, 평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요.
// 가능하다면 메소드 체이닝으로 풀어주세요

// 1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
];

// 여기에 코드를 작성해주세요
// 각 학생의 평균점수 구하기
// 평균이 80점 이상인 학생만 필터링하기
const answer = students
  .filter((student) => {
    let sum = 0;
    for (score of student.scores) {
      sum += score;
    }

    const avg = sum / student.scores.length;
    return avg >= 80;
  })
  .map((student) => student.name);

// 예상 출력: ["이재상", "김준현"]
console.log(answer);

// 2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
const answer2 = numbers.map((num) => num * 2).filter((num) => num <= 30);
console.log(answer2);
