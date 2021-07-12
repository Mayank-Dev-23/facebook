import Image from "next/image"


function Person({src,name}) {
    return (
       
            <div className=" relative flex intems-center space-x-3 mb-2 hover:bg-gray-200 rounded-sm cursor-pointer p-2">
                <Image  className="rounded-full" src={src} height={40} width={40} layout="fixed" objectFit="cover"/>
                <p>{name}</p>

                <div className="absolute bg-green-500 h-3 w-3 rounded-full bottom-2 left-5 "></div>
            </div>
            
        
    )
}

export default Person
