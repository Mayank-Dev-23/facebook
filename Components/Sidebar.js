import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from "@heroicons/react/solid"
import {UserGroupIcon,ShoppingBagIcon ,ChevronDownIcon } from "@heroicons/react/outline"
import SidebarRow from "./SidebarRow"
import { useSession } from "next-auth/client"

function Sidebar() {

    const [session] =useSession()
    return (
        <div  className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={session.user.image} title={session.user.name}/>
        <SidebarRow  Icon={UsersIcon} title="Friends"/>
        <SidebarRow  Icon={UserGroupIcon} title="Groups"/>
        <SidebarRow  Icon={ShoppingBagIcon} title="Marketplace"/>
        <SidebarRow  Icon={CalendarIcon} title="Events"/>
        <SidebarRow  Icon={ClockIcon} title="Memories"/>
        <SidebarRow  Icon={DesktopComputerIcon} title="Watch"/>
        <SidebarRow  Icon={ChevronDownIcon} title="SeeMore"/>
        </div>
    )
}

export default Sidebar
