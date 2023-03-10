//hell version -> +promise version

class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(
                    (id === "one" && password === "onepw") ||
                    (id === "two" && password === "twopw")
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(user === "one"){
                    resolve({name:'one', role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter you id');
const password = prompt('enter your password');

// userStorage
//     .loginUser(id, password)
//     .then(userStorage.getRoles)
//     .then(user => alert(`hello ${user.name}, your role is ${user.role}`))
//     .catch(console.log);

async function findUserRole() {
    const user = await userStorage.loginUser(id, password);
    const userInfo = await userStorage.getRoles(user);
    return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
}

findUserRole();

// findUserRole().then(user => alert(`Hello ${user.name}, you have a ${user.role} role`));