import { collectionGroup, onSnapshot, query, limit, startAfter, getDocs, orderBy, QuerySnapshot, collection, where } from "firebase/firestore";
import { useState, useEffect, useMemo } from "react";
import { setChats } from "../reducers/chatsSlices";
import { setProjectsState } from "../reducers/projectsSlice";
import { User } from "../utils/types";
import { db } from "./../firebase/config";

export const useChats = (user:any,  dispatch:any) => {
    const [loadingChats, setLoadingChats] = useState<boolean>(false)

    useEffect(()=> {
      if(user){
        setLoadingChats(true) 
        const chatsRef = collection(db, "chats")
        
        const chatsQuery = query(chatsRef, where("persons", "array-contains", user.uid))
        const unsubscribe = onSnapshot(chatsQuery, (snapchot) => {  
          console.log('read snapshot, allChats state') 
          dispatch(setChats(snapchot.docs.map((doc, i)=> {
                return doc.data()
            })))  
        })
      
        setLoadingChats(false) 

        return () => {
          if(user) unsubscribe();
        };
      }
    }, [user])

    return { loadingChats }
}