import { FiLogOut, FiUser } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '@/firebase';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { setUserLogin, logOutUser } from '@/app/slice/userSlice';


const auth = getAuth(app);
const provider = new GoogleAuthProvider();  // Google Auth Provider

export default function Navbar() {
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)
    const [currentUserLog, setcurrentUserLog] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                dispatch(setUserLogin({ name: user.displayName, email: user.email, photo: user.photoURL }))
            } else {
                setUser(null) // user logged out
            }
        })
    })


    const signupWithGoogle = () => {
        signInWithPopup(auth, provider)
    }
    const userLog = () => {
        setcurrentUserLog(!currentUserLog);
    }


    return (
        <nav className='bg-gradient-to-l from-violet-600 to-indigo-600 text-white'>
            <div className='flex flex-row justify-between w-[95%] items-center h-20 m-auto '>
                <Link className='text-3xl md:text-4xl font-medium' href={'/'}>Let&apos;s Blog</Link>
                <div className='flex'>
                    <span className='mx-4'>
                        {
                            !user ? (<button className='bg-white text-black font-black text-xl px-4 py-2 rounded-lg'
                                onClick={signupWithGoogle}>Sign In</button>) : (
                                <div className='flex'>
                                    <Link href={'/new'} className='bg-green-700 mx-4 px-4 rounded-md flex items-center'><FaPlus className='mx-1' /> <span className='lg:block hidden'> Create New Blog </span></Link>
                                    <Image src={user.photoURL} alt={user.displayName}
                                        className='rounded-full cursor-pointer' width={40} height={40} onClick={userLog} />
                                    {
                                        currentUserLog ?
                                            (
                                                <div className='flex flex-col text-[#515151] justify-center items-start
                                     bg-white h-[100px] w-[200px] mt-12 right-5 absolute
                                              shadow-md rounded-lg shadow-black font-semibold text-xl'>
                                                    <Link href={`/${user.uid}/blogs`} className='my-1 cursor-pointer'>
                                                        <FiUser className='inline-block ml-4 mr-2' />
                                                        <span> My blogs</span>
                                                    </Link>
                                                    <Link className='my-1 cursor-pointer' href={'/'} onClick={() => signOut(auth).then(() => { dispatch(logOutUser()) })}>
                                                        <FiLogOut className='inline-block ml-4 mr-2' />
                                                        <span > Sign Out</span>
                                                    </Link>
                                                </div>
                                            ) : ""
                                    }
                                </div>
                            )
                        }
                    </span>
                </div>
            </div>
        </nav>
    )
}