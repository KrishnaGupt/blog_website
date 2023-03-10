"use client"

import { useEffect, useState } from "react"
import { getFirestore ,collection, query, where, getDocs } from "firebase/firestore"
import { useRouter } from 'next/navigation'
import { app, auth } from "@/firebase"
import Blog from "@/components/Blog"
import Back from "@/components/Back"


export default function MyBlogs(){
    const router = useRouter();
    const [post, setPost] = useState([])
    const firestore = getFirestore(app)
    useEffect(() => {
    const getData = async ()=>{
    const collectionRef = collection(firestore, "posts") 
    const q = query(collectionRef, where("id", "==", auth.currentUser.uid))
    const snapshot = await getDocs(q);
    setPost(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
}
    getData()
    })
    
    return(
        <>
        {
            !auth.currentUser ?
        ( router.push('/'))
       : (<div className="w-full">
        <Back/>
        <div className="text-3xl md:text-5xl font-semibold w-full m-auto text-center my-6">My Blogs</div>
        <div className="w-full">
            {
            post && post.map(data=>  <Blog key={data.id} title={data.title} content={data.postContent} 
                publishedDate={data.publishedDate} photo={data.author.photo} author={data.author.name} />)
            }
        </div>
        </div>)
        }
        </>
    )
}