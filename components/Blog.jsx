import Image from "next/image"

export default function Blog(props) {

    return (
        <div className="border border-black w-[85%] lg:w-[900px] cursor-pointer m-auto my-10 px-6 py-4 rounded-xl">
            <div>
                <p className="text-2xl md:text-4xl font-semibold">{props.title}</p>
                <div className="my-2 flex items-center">
                <Image loading="lazy" alt="photo" className="rounded-full ml-0 mr-2 md:mx-2" src={props.photo} width={30} height={30}/>
                    <span className="text-orange-700 font-bold mr-2">{props.author} - </span>
                    <span> { props.publishedDate}</span>
                </div>
            </div>
            <div>
                {props.content}
            </div>
        </div>
    )
}