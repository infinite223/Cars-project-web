import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './../config'

export const register = (e:any, email?:string, password?:string,  navigate?:any) => {
    e.preventDefault();

    const promiseRegister = new Promise((resolve, reject) => {
        if(email && password){
            createUserWithEmailAndPassword(auth, email, password)
            .then((data)=> {
                resolve('Udało się utworzyć konto, zaloguj się!')
                navigate('/start')
            })
            .catch((e) => {
                console.log(e, 'xd')
                if(e.code ==='auth/email-already-in-use'){
                    reject('Email jest już używany przez inne konto')
                }
                else {
                    reject('Nie prawidłowe dane')
                }
            })
        }
        else {
          reject('Nie wprowadzono danych')
        }
    }) 

    return promiseRegister

}   