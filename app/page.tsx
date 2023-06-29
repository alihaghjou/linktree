import Image from 'next/image'
import Link from 'next/link'
import vercel from "../public/vercel.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <Image src={vercel} alt='Profile Picture' width={256} height={256}/>
      <section className='flex flex-col justify-center items-center gap-8'>
      <Link href={"https://www.github.com"} target='_blank' >Github</Link>
      <Link href={"https://www.linkedin.com"} target='_blank' >Linkedin</Link>
      </section>
    </main>
  )
}
