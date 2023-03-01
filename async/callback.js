//hell version

class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === "one" && password === "onepw") ||
                (id === "two" && password === "twopw")
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === "one"){
                onSuccess({name:'one', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter you id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    userinfo => {
        userStorage.getRoles(
            userinfo,
            userwithRole => {
                alert(`hello ${userwithRole.name}, your role is ${userwithRole.role}`)
            },
            error => {console.log(error);}
        );
    },
    error=>{
        console.log(error);
    }
);