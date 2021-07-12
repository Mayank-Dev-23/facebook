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
    <div className="flex items-center  sticky top-0 z-50 bg-white shadow-md p-1 lg:px-5 ">
      {/* LEFT */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          objectFit="contain"
        />
        <div className=" hidden xl:inline-flex items-center ml-2 space-x-2 bg-gray-100 p-2 rounded-full">
          <SearchIcon className="h-6 text-gray-400" />
          <input
            className="   bg-transparent outline-none flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* CENTER */}
      <div className="flex  justify-center flex-grow">
        <div className="flex  space-x-4 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex items-center">
        {/* PROFILE PIC */}
        <Image 
        onClick={signout}
         className="rounded-full hover:animate-pulse cursor-pointer "
        src={session.user.image} height={30} width={30} layout="fixed" objectFit="contain" />

        <p 
           
        className=" hidden xl:inline-flex whitespace-nowrap font-semiBold font-sans-serrif pr-2 pl-1">
        {session.user.name}
      
        </p>
        <ViewGridIcon className="  hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full  text-gray-700 cursor-pointer hover:bg-gray-300 ml-1 " />
        <ChatIcon className="  hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full  text-gray-700 cursor-pointer hover:bg-gray-300  ml-1" />
        <BellIcon className="  hidden xl:inline-flex p-2 h-10 w-10  bg-gray-200 rounded-full  text-gray-700 cursor-pointer hover:bg-gray-300 ml-1" />
        <ChevronDownIcon className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200  rounded-full  text-gray-700 cursor-pointer ml-1 hover:bg-gray-300" />
      </div>
    </div>
  );
}

export default Header;
