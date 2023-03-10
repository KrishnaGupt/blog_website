"use client"

import Back from '@/components/Back'
import { app, auth } from '@/firebase'
import {getFirestore , addDoc, getDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSelector } from "react-redux"
import { setName } from "../slice/userSlice"

const firestore = getFirestore(app);
export default function New() {
    const router = useRouter();
    const userName = useSelector(setName);
    const [title, setTitle] = useState('')
    const [postContent, setPostContent] = useState('')

    const createPost = async()=>{
        await addDoc(collection(firestore, "posts"), {
            title,
            postContent,
            id: auth.currentUser.uid,
            author: {
                name: auth.currentUser.displayName,
                photo: auth.currentUser.photoURL
            },
            email: auth.currentUser.email,
            publishedDate : new Date().toJSON().slice(0, 10)
        })
        router.push('/');
    }
    
    return (
        <>
            {
                !userName ? (
                    <div className="w-full h-[100vh] flex justify-center items-center">
                        <div className="bg-red-800 h-16 w-[400px] rounded-lg text-center pt-3 text-3xl font-semibold text-red-200">Sign In to write a new blog</div>
                    </div>
                ) : (
                    <div className="w-full">
                        <div>
                        <Back/>
                        </div>
                        <h1 className="w-full m-auto text-center text-3xl px-8 md:px-0 md:text-5xl my-6 font-semibold">Create a New Blog</h1>
                        <div className="w-[90%] m-auto">
                            <div className="w-full mb-10">
                                <span className="text-2xl w-full"> Title:</span>
                                <input className="w-full border border-black rounded-lg py-3 px-4 text-2xl mt-1" required onChange={(e)=> setTitle(e.target.value)} type="text" />
                            </div>
                            <div className="w-full">
                                <span className="text-2xl w-full">Content:</span>
                                <textarea className="w-full border border-black rounded-lg py-3 px-4 text-2xl mt-1" required onChange={(e)=> setPostContent(e.target.value)} cols="30" rows="10"></textarea>
                            </div>
                            <div className="w-full m-auto text-center">
                                <button className="bg-blue-600 px-4 py-2 rounded-lg text-4xl my-14 text-white" onClick={createPost}>Submit</button>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}