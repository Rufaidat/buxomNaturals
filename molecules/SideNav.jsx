import Link from "next/link";
import { RiMenuFoldFill } from "react-icons/ri";

const SideNav = ({ isMenuOpen, handleMenu, logo }) => {
  return (
    <div
      className={
        isMenuOpen
          ? " lg:hidden fixed left-0 top-0 w-full h-screen bg-black/60"
          : ""
      }
    >
      <div
        className={
          isMenuOpen
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[65%]  h-screen bg-green/80 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            className=" shadow-lg shadow-grey-400 p-3 cursor-pointertext-gold"
            onClick={handleMenu}
          >
            <RiMenuFoldFill className="w-8 h-8" />
          </div>
        </div>

        <div className="py-4 md:py-0 flex-col">
          <ul className="text-white ">
            <Link href="#/">
              <li className="hover:text-gold my-4">Home</li>
            </Link>

            <Link href="#story">
              <li className="hover:text-gold my-4">Our Story </li>
            </Link>
            <Link href="#founder" className="link my-4 ">
              <li className=" my-4">Founder</li>
            </Link>
            <Link href="#products">
              <li className="hover:text-gold my-4">Products</li>
            </Link>
            <Link href="#ingredients">
              <li className="hover:text-gold my-4 ">Ingredients</li>
            </Link>

            <Link href="#contact">
              <li className="hover:text-gold my-4 ">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
