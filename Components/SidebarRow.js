import Image from "next/image"
import {useSession} from "next-auth/client"

function SidebarRow({src,Icon,title}) {
    const [session] = useSession();
    return (
        <div className="flex items-center space-x-2 p-2 sm:p-3 lg:hover:bg-gray-200 rounded-lg cursor-pointer">
            {src && (
                <a href={session.user.image}>
            <Image 
            className="rounded-full"
            src={src} 
            width={30}
            height={30}
            layout="fixed"
            />
            </a>
                )}
                {Icon &&(
                    <Icon  className="h-8 w-8 text-blue-500"/>
                )}
                <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    )
}

export default SidebarRow
