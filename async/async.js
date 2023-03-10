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
    // .then(()=>'๐');

    await delay(1000);
    return '๐'
}

async function getBanana(){
    await delay(2000);
    return '๐';
}

async function pickFruits(){
    //๊ธฐ์กด promise ๋ฐฉ๋ฒ
    // return getApple().then(apple => {
    //     return getBanana().then(banana => `${apple} + ${banana}`);
    // });
   
    // ์ ํํจ์ 1์ด ๊ธฐ๋ค๋ฆฌ๊ณ  ๊ทธ ๋ค์ ๋ฐ๋๋ํจ์ 1์ด ๊ธฐ๋ค๋ฆผ
    // const apple = await getApple();
    // const banana = await getBanana();
    // return `${apple} + ${banana}`;
    
    // ์ ํํจ์ 1์ด ๊ธฐ๋ค๋ฆฌ๋ ๊ฒ๊ณผ ๋์์ ๋ฐ๋๋ํจ์ 1์ด ๊ฐ์ด ๊ธฐ๋ค๋ฆผ [๋ณ๋ ฌ์คํ]
    const applePromise = getApple(); //ํจ์ ํธ์ถ๊ณผ ๋์์ ํจ์ ์คํ
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful promise apis
function pickAllFruits(){ 
    //๋ชจ๋  promise๋ฅผ ์ ๋ฌ๋ฐ์์ ๋ฐฐ์ด๋ก ์ ์ฅ๋จ
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickFastOne(){
    //๋ ๋นจ๋ฆฌ ์คํ๋๋ ์ ๋ง ์ถ๋ ฅ
    return Promise.race([getApple(), getBanana()]);
}

pickFastOne().then(console.log); 