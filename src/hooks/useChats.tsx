import { collectionGroup, onSnapshot, query, limit, startAfter, getDocs, orderBy, QuerySnapshot, collection, where } from "firebase/firestore";
import { useState, useEffect, useMemo } from "react";
import { setChats } from "../reducers/chatsSlices";
import { setProjectsState } from "../reducers/projectsSlice";
import { User } from "../utils/types";
import { db } from "./../firebase/config";

export const useChats = (userUid:string,  dispatch:any) => {
    const [loadingChats, setLoadingChats] = useState<boolean>(false)

    useEffect(()=> {
        setLoadingChats(true) 
        const chatsRef = collection(db, "chats")

        const chatsQuery = query(chatsRef, where("persons", "array-contains", userUid))
        const unsubscribe = onSnapshot(chatsQuery, (snapchot) => {      
          dispatch(setChats(snapchot.docs.map((doc, i)=> {
                return doc.data()
            })))  
        })
      
        setLoadingChats(false) 

      return unsubscribe
    }, [])

    return { loadingChats }
}