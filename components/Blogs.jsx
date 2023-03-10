import { useEffect, useState } from "react"
import { getFirestore ,collection, query, where, getDocs } from "firebase/firestore"
import { app, auth } from "@/firebase"
import Blog from "@/components/Blog"

export default function Blogs(){
    const [posts, setPosts] = useState([])
    const firestore = getFirestore(app)
    useEffect(() => {
        const getPosts= async()=>{
            const collectionRef = collection(firestore, "posts") 
            const snapshot = await getDocs(collectionRef);
            setPosts(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})));
        }
        getPosts()
    })
    
    return(
        <div className="w-full m-auto">
            <h1 className="my-4 text-6xl text-center">Posts</h1>
            {
                posts && posts.map(data => <Blog key={data.id} title={data.title} content={data.postContent} 
                    publishedDate={data.publishedDate} photo={data.author.photo} author={data.author.name} />)
            }
        </div>
    )
}