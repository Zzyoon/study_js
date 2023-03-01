'use strict';

console.log('1'); //동기
// setTimeout(function(){
//     console.log('2');
// }, 1000); //브라우저에게 1000ms(1초)뒤에 callback(나중에 다시 불러줭)함수 실행하라고 요청 - 비동기
setTimeout(() => {console.log('2')}, 1000); //비동기

console.log('3'); //응답을 기다리지 않고 바로 넘어오기 - 동기

//Synchronous callback
function printImmediately(print){
    print();
}

printImmediately(()=>console.log("synch callback")); //동기

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log("async callback"),2000); //비동기