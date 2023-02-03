import { doc, setDoc } from "firebase/firestore";
import { Place, User } from "../../utils/types";
import { uploadImage } from "../uploadImage";
import { db } from "../config";

export const updateProfile = (user:any, name:string, description:string, image:any, place:Place) => {
    let urlImage = user.image?user.image:user.imageUri
    const setUrlImage = (uri:string, image:any) => {
       urlImage = uri
       console.log(uri)
    }

    if(image?.length>0){
        uploadImage(
          //  image[0], '', true, user.uid, setUrlImage, setShowAlert
        ).then(async(promise:any)=> {
            if(promise){
                const profileData:User = {
                    name,
                    description,
                    email:user.email,
                    hideProjects:[],
                    imageUri:promise.url,
                    place: {
                        latitude: place.latitude?place.latitude:null,
                        longitude: place.longitude?place.longitude:null,
                        city:place.city?place.city:null
                    },
                    uid:user.uid,
                    stats: {
                        followers:user.stats?user.stats.followers:[],
                        views:user.stats?user.stats.views:[],    
                        following:user.stats?user.stats.following:[] 
                    }
                }
                console.log(profileData)
                await setDoc(doc(db, "users", user.uid), profileData)
                .then((a)=> console.log('success'))
                .catch((e) => console.log('error'))
            }
            else {
                console.log('error')
            }
        })
    }
}