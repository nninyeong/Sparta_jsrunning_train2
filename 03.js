// 3.얕은 , 깊은 복사
const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul",
  },
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy = student;

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
function deepCopyFunc(obj) {
  const result = {};
  if (typeof obj === "object" && obj !== null) {
    for (let prop in obj) {
      result[prop] = deepCopyFunc(obj[prop]);
    }
  } else {
    return obj;
  }

  return result;
}
const deepCopy = deepCopyFunc(student);

// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?"); // 얕은복사는 원복객체가 참조하는 주소값을 복사해온 것이므로 true입니다.
console.log(student === shallowCopy);

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?");
console.log(student.address === shallowCopy.address); // 참조하는 위치가 같으므로 같은 값입니다.

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?"); // deepCopy는 원복 객체의 원시타입 값까지 접근해 값을 복사해와 새로운 객체를 만든 것으로, 각자 다른 주소값을 갖고있고 둘을 비교하면 false가 반환됩니다.
console.log(shallowCopy === deepCopy); // false

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?"); // address 속성도 참조타입으로 주소값을 비교하게되고, 원본의 address에서 값을 복사해온 새로운 객체이므로 false입니다.
console.log(deepCopy.address === student.address);

2;
// 동일한 student로 진행합니다.

// 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요
shallowCopy.skill[0] = "js";
console.log(shallowCopy);

// 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
deepCopy.address.city = "busan";

// 결과 확인
console.log("5. 원본 객체(student):");
console.log(student);
console.log("6. 얕은 복사된 객체(shallowCopy):");
console.log(shallowCopy);
console.log("7. 깊은 복사된 객체(deepCopy):");
console.log(deepCopy);

/* 1~7번까지 출력값을 출력해보고 적어주세요
예 ) 1. true 
    2. true
    3. false
    4. false
     5. {
	  name : 'yuno' ,
    agae : '30' , 
	  skill : ['js'],
	  address: { city: 'seoul' }
    }

    6.
    {
	  name : 'yuno' ,
    agae : '30' , 
	  skill : ['js'],
	  address: { city: 'seoul' }
    }

    7. 
    {
	  name : 'yuno' ,
    agae : '30' , 
	  skill : ['javascript'],
	  address: { city: 'busan' }
    }
*/
