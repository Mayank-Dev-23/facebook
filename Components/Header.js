import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { useSession ,signout } from "next-auth/client";

function Header() {

    const [session] = useSession();
  return (
    <div className=" header ">
      {/* LEFT */}
      <div className=" left_header">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          objectFit="contain"
        />
        <div className=" headersearch ">
        <SearchIcon className="SearchIcon" />
          <input
          
            className="searchinput"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* CENTER */}
      <div className="center_header">
        <div className="center  ">
          <HeaderIcon  classNaem="active"  Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* RIGHT */}

      <div className="right">
        {/* PROFILE PIC */}
        <img 
        onClick={signout}
         className="Image "
        src={session.user.image}  />

        <p 
           
        className=" username">
        {session.user.name}
      
        </p>
        <ViewGridIcon className="  rightIcon   " />
        <ChatIcon className="  rightIcon " />
        <BellIcon className=" rightIcon" />
        <ChevronDownIcon className=" rightIcon" />
      </div>
    </div>
  );
}

export default Header;
