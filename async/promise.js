'use strict';

//1.producer
const promise = new Promise((resolve, reject)=>{
    //시간이 좀 걸리는 큰 일들 (network, read files) - 비동기적으로 처리하고 싶은 일들
    console.log('doing something..'); 
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
}); //promise는 만들면 바로 실행이 된다!

//2.consumer - then, catch, finally
promise
    .then((value)=>{
        console.log(value); //resolve로 제대로 전달된 값
    }) //promise 제대로 수행이 된다면 - 성공했을 때
    .catch(error=>{
        console.log(error);
    }) //promise reject - 실패했을때
    .finally(()=>{
        console.log('finally');
    }); //성공하든 실패하든 마지막에 무조건 실행되는 애

//3. promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => {
     resolve(1)
    }, 1000);
})

fetchNumber
    .then(num => num*2)
    .then(num => num*3)
    .then(num => {
        return new Promise((resolve, reject)=>{
            setTimeout(() => resolve(num-1), 1000);
        });
    })
    .then(num=>console.log(num))

// 4. error handling
const getHen = () =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('🐓'),1000);
    });

const getEgg = hen => 
    new Promise((resolve, reject)=>{
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(`${egg} => 🍳`),1000);
    });

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal)) // 🐓 => 🥚 => 🍳

getHen() //받아온 value를 그대로 함수에 전달한다면 생략해도 됨
    .then(getEgg)
    .catch(error => {
        return '🧀';
    }) //getegg에서 발생하는 예외처리는 바로 밑에 줄에 작성
    .then(cook)
    .then(console.log)
    .catch(console.log); 