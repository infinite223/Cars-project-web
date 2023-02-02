import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { doc, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { auth, db } from '../firebase/config';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext({})


export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState('')

  const [loadingInitial, setLoadingInitial] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => 
    onAuthStateChanged(auth, (user) => {      
      if(user){
        setUser(user)
        const getUserData = async () => {
          console.log(user, 'uuu')
          const usersRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(usersRef);
          if (docSnap.data()?.name) {
            setUser(docSnap.data())
            setUserType('firestore')
          } else {
            setUserType('normalAuth')
            setUser({
              name:user.displayName?user.displayName:'user',
              email:user.email,
              image:user.photoURL,
              uid:user.uid
             })
          }
        }
        getUserData()
      }
      else {
        setUser(null)
      }
      setLoadingInitial(false)
    }
  ), [])

  const signInAsTester = () => {
    setUser({name: "Tester", imageUri:'https://th.bing.com/th/id/OIP.GHGGLYe7gDfZUzF_tElxiQHaHa?pid=ImgDet&rs=1'})
  }

//   const [request, response, signInWithGoogle] = Google.useIdTokenAuthRequest(
//     {
//        clientId: envGoogle.authKey
//     },
//   );

//   const signFunction = async () => {
//     setLoading(true)
//     if (response?.type === 'success') {
//       const { id_token, accessToken } = response.params;
//       console.log("response")
//       const credential = GoogleAuthProvider.credential(id_token, accessToken);
//       await signInWithCredential(auth, credential)
//         .then((e)=>console.log(e.user))
//         .catch((a)=> console.log(a))
//         .finally(()=>setLoading(false))
//     }
//   }

//   useEffect(() => {
//     signFunction()
//   }, [response]);


  
    const memoedValue = useMemo(() => ({
      user,
      userType,
      setUser,
      loading,
      error,
    //   signInWithGoogle,
      signInAsTester,
    }), [user, loading, error])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider> 
  )
}
export default function useAuth() {
    return useContext(AuthContext)
}   

// export const db = getFirestore(app)