import Image from "next/image";
import Link from "next/link";
import icon from "../public/icon.png"

const Header = () => {
  return (
    <header className="border-b-2 border-b-slate-800 p-2 m-1 text-center text-xl flex items-center justify-between">
      <Image src={icon} alt="icon" width={64} height={64} className="rounded-full" />
      <div className="flex gap-4 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </header>
  );
};

export default Header;