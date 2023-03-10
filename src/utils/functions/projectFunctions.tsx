import { arrayRemove, arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { UserList } from '../types';
import { db } from './../../firebase/config';

export const onShare = async (carMake:string, model:string, link:string) => {
    try {
      // const result = await Share.share({
      //   message:
      //     `Cars projects- ${carMake+ ' ' +model+' ' + link}`,
      // });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     // shared with activity type of result.activityType
      //   } else {
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
    } catch (error) {
    
    }
};

export const likeProject = async (id:string, authorUid:string, type:boolean, user:UserList) => {
  console.log(type, user)
  if(authorUid!==user.uid){
 
    await updateDoc(doc(db, `users/${authorUid}/projects`, id), {
      'car.likes':
      !type?arrayUnion(user.uid):
      arrayRemove(user.uid)
    })

    await updateDoc(doc(db, `users`, user.uid), {
      'likesProjects':  !type?arrayUnion(id):
      arrayRemove(id)
    })


    .then(()=> console.log('xd'))
    .catch(e=>console.log(e))
  }
}