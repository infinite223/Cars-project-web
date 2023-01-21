import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './../config'

export const register = (e:any, email?:string, password?:string, repeatPassword?: string, navigate?:any) => {
    e.preventDefault();

    if(email && password){
        createUserWithEmailAndPassword(auth, email, password).then((data)=> {
        
        }).then(() => navigate('/app'))
    }
}   