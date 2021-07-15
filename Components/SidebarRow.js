import Image from "next/image"
import {useSession} from "next-auth/client"

function SidebarRow({src,Icon,title}) {
    const [session] = useSession();
    return (
        <div className="SidebarRow">
            {src && (
                <a href={session.user.image}>
            <Image 
            className="sidebarimage"
            src={src} 
            width={30}
            height={30}
            layout="fixed"
            />
            </a>
                )}
                {Icon &&(
                    <Icon  className="sidebarIcon"/>
                )}
                <p className="sidebarIconName">{title}</p>
        </div>
    )
}

export default SidebarRow
