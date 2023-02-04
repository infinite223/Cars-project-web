import { doc, setDoc } from "firebase/firestore";
import { Place, User } from "../../utils/types";
import { uploadImage } from "../uploadImage";
import { db } from "../config";

export const updateProfile = (user:any, name:string, description:string, image:any, place:Place) => {

    const promiseUpdate = new Promise<{message:string, user:User | null}>(async (resolve, reject) => { 
        if(typeof image !== 'string'){
            uploadImage(image, user.uid, true).then(async(promise:any)=> {
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
                    await setDoc(doc(db, "users", user.uid), profileData)
                    .then((a)=> resolve({message:'Profil został zaaktualizowany', user:profileData}))
                    .catch((e) => {reject('Coś poszło nie tak, spróbuj później');  console.log(profileData)})
                }
                else {
                    reject('Coś poszło nie tak, spróbuj później')
                }
            })
        }
        else {
            const profileData:User = {
                name,
                description,
                email:user.email,
                hideProjects:[],
                imageUri:image,
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
            .then((a)=> resolve({message:'Profil został zaaktualizowany', user:profileData}))
            .catch((e) => reject('Coś poszło nie tak, spróbuj później'))
        }
    })

    return promiseUpdate
}