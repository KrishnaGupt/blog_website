import Image from "next/image"
import img1 from '../public/images/img1.jpg'
export default function Hero(){
    return(
        <div className="flex flex-col w-[85%] my-10 md:mb-0 md:mt-20 mx-auto">
            <div className="flex flex-col md:flex-row">
            <div className="left w-[90%] m-auto md:w-[55%]">
                <Image src={img1} alt={"photo"} width={500}/>
            </div>
            <div className="right w-[90%] m-auto md:w-[45%]">
                <div className="text-2xl md:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div className="flex items-center my-2">
                    <div className="flex items-center mr-2">
                    <div>
                        <Image src={"https://xsgames.co/randomusers/assets/avatars/male/74.jpg"} height={30} alt={"author"} width={55} className="rounded-full mr-2"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-orange-700 text-[14px]">Sam Bunkman</span>
                    </div>
                </div>
                    <span className="text-[14px]"> -  Jun 3, 2022</span>
                </div>
                <div className="leading-20 my-3 md:my-6 text-slate-800">
                The main purpose of letters is the practical one of making thoughts visible. Ruskin says that all letters are frightful things and are to be endured upon occasion that is to say, in places where the inscription is of more importance than external ornament.
                </div>
            </div>
            </div>
            <hr className="w-full bg-gray-500 h-[2px] mt-4 m-auto" />
        </div>
    )
}