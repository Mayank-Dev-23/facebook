import Image from "next/image"


function Person({src,name}) {
    return (
       
            <div className="person ">
                <Image  className="person_Image" src={src} height={40} width={40} layout="fixed" objectFit="cover"/>
                <p className="person_text">{name}</p>

                <div className="active_dot "></div>
            </div>
            
        
    )
}

export default Person




