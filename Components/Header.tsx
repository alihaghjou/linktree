import Image from "next/image";
import Link from "next/link";
import icon from "../public/icon.png"

const Header = () => {
  return (
    <header className="header">
      <Image src={icon} alt="icon" width={64} height={64} className="icon" />
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </header>
  );
};

export default Header;
