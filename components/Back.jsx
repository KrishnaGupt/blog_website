import Link from "next/link"
import {FaArrowLeft} from 'react-icons/fa'
export default function Back(){
    return (
        <Link className="text-3xl md:text-4xl absolute mt-0 md:mt-4 ml-7" href={'/'}> <FaArrowLeft/></Link>
    )
}