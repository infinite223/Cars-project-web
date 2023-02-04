import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { resizeFile } from "../utils/functions/getResizeImage";
import { storage } from "./config";

export const uploadImage = async  (image:any, userUid:string, profileImage:boolean, project_id?:string ) => {
    const resizeImage:any = await resizeFile(image);
    //const response = await fetch(resizeImage) 
    console.log(image.name)
    // const blob = await response.blob()
     const immageFullName = image.name.substring(0, image.name.length - 3);
    
     const storageRef = ref(storage, `${userUid}/${profileImage?'profile':project_id}/${immageFullName}`);

    const promise = new Promise(async (resolve, reject) => { 
        uploadBytesResumable(storageRef, resizeImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if(progress===100){
                    console.log('100', url)
                    resolve({url:url, image:image})
                }
            });
        })
        .catch((e) => {
            reject('error')
            console.log(e)
        })
    })

   return promise
}