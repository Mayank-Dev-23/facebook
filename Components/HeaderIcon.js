function HeaderIcon({ Icon ,active }) {
  return (
    <div className=" flex items-center cursor-pointer md:px-10 sm:h-12 md:hover:bg-gray-100 p-3
    sm:active:border-b-2 active:border-blue-400 rounded-l   group
    ">
      <Icon className={`h-5  text-gray-400 group-hover:text-blue-500 sm:h-6 mx-auto ${active && "text-blue-500"}`} />
    </div>
  );
}

export default HeaderIcon;
