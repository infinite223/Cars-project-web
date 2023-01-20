import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './../config'

export const register = (e:any, email?:string, password?:string, repeatPassword?: string, navigate?:any) => {
    e.preventDefault();
    console.log(email, password)
    // return { type: 'ERROR', message: "Coś poszło nie tak"}
    if(email && password){
        signInWithEmailAndPassword(auth, email, password).then((data)=> {
        
        }).then(() => navigate('/app'))
    }

    // signInWithPopup(auth, provider).then(data=> {
    //     console.log(data)
    // })
}   