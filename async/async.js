//async & await

//1. async
async function fetchUser(){
    // return new Promise((resolve, reject)=>{
    //     resolve('ellie');
    // });

    return 'ellie'
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    // return delay(3000)
    // .then(()=>'🍎');

    await delay(1000);
    return '🍎'
}

async function getBanana(){
    await delay(2000);
    return '🍌';
}

async function pickFruits(){
    //기존 promise 방법
    // return getApple().then(apple => {
    //     return getBanana().then(banana => `${apple} + ${banana}`);
    // });
   
    // 애플함수 1초 기다리고 그 뒤에 바나나함수 1초 기다림
    // const apple = await getApple();
    // const banana = await getBanana();
    // return `${apple} + ${banana}`;
    
    // 애플함수 1초 기다리는 것과 동시에 바나나함수 1초 같이 기다림 [병렬실행]
    const applePromise = getApple(); //함수 호출과 동시에 함수 실행
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful promise apis
function pickAllFruits(){ 
    //모든 promise를 전달받아서 배열로 저장됨
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickFastOne(){
    //더 빨리 실행되는 애만 출력
    return Promise.race([getApple(), getBanana()]);
}

pickFastOne().then(console.log); 