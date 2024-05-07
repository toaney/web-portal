import Link from "next/link";
import HeaderNav from "./HeaderNav";
import HeaderAccount from "./HeaderAccount";

const Header = () => {
  return (
    <>
      <HeaderAccount />
      <div className="h-24 px-14 flex justify-between items-center border-b-2 border-[]">
        <Link href="/">
          <div className={`w-[241px] h-[73px] bg-[#D9D9D9] flex justify-center items-center`}>
            WEB PORTAL LOGO
          </div>
        </Link>
        <HeaderNav />
      </div>      
    </>
  )
}

export default Header;





