import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './../config'

export const login = (e:any, email?:string, password?:string, navigate?:any) => {
    e.preventDefault();

    const promiseLogin = new Promise((resolve, reject) => {
        if(email && password){
            signInWithEmailAndPassword(auth, email, password).then((data)=> {
            
            }).then(() => {
                 navigate('/app')
                 resolve('success')
                })
            .catch(() => reject('error'))
        }
        else {
            reject('Nie wprowadzono danych')
        }
    }) 

    return promiseLogin

}   