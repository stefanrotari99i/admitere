import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { TiStarOutline } from "react-icons/ti";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-10 py bg-white ">
      <Link href={"/"} className="flex items-center gap-4">
        <Image
          src="/../public/mne.png"
          alt="Picture of the author"
          className=""
          width={300}
          height={40}
        />
      </Link>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <ul className="flex items-center gap-6 mr-2 ">
          <li className="text-gray-600 hover:text-sky-500 text-xs font-medium uppercase flex items-center">
            <a href="#">Acasă</a>
            <span className="bg-sky-200 pointer-events-none hover:text-sky-500 text-[10px] font-medium rounded-full px-2 py-[2px] ml-2">
              New
            </span>
          </li>
          <li className="text-gray-600 hover:text-sky-500 text-xs uppercase font-medium">
            <a href="#">Despre</a>
          </li>
          <li className="text-gray-600 hover:text-sky-500 text-xs font-medium uppercase">
            <a href="#">Contacte</a>
          </li>
          <li className="text-gray-600 hover:text-sky-500 text-xs font-medium uppercase">
            <a href="#">Întrebări frecvente</a>
          </li>
        </ul>

        <button
          type="button"
          className="text-gray-400 hover:text-sky-600 border-none outline-none focus:outline-none"
        >
          <FiSearch className="text-xl" />
        </button>
        <div className="border-r border-gray-300 h-6"></div>
        <button
          type="button"
          className="bg-transparent border-none outline-none focus:outline-none text-gray-400 hover:text-sky-600"
        >
          <TiStarOutline className="text-2xl" />
        </button>

        <Link href="/admitere">
          <Image
            src="/../public/1.jpeg"
            alt="Picture of the author"
            className="cover rounded-full ring-2 ring-sky-500 ring-offset-2"
            width={35}
            height={35}
          />
        </Link>      
      </div>
    </header>
  );
};

export default Header;
