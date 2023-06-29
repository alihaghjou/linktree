import Image from "next/image";
import Link from "next/link";
import vercel from "../public/vercel.svg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:justify-around justify-between p-24">
      <Image src={vercel} alt="Profile Picture" width={256} height={256} />
      <section className="flex flex-col justify-center items-center gap-8">
        <Link
          href={"https://www.github.com/alihaghjou"}
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          <AiFillGithub size={32} />
          Github
        </Link>
        <Link
          href={"https://www.linkedin.com"}
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          <AiFillLinkedin size={32} />
          Linkedin
        </Link>
        <Link
          href={"https://instagram.com/alii.haghjou?igshid=NTc4MTIwNjQ2YQ=="}
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          <AiOutlineInstagram size={32} />
          Instagram
        </Link>
      </section>
    </main>
  );
}
