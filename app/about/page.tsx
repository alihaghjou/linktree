import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8">
      <p className="pb-8">
        Hi My name is <span className="under text-lg">Ali Haghjou</span>.<br />
        Welcome to my personal website kind of 🧐.
        <br />
        let&apos;s have a talk about me.
        <br />
        Right now that i am writing this, i am 22. (it&apos;s year 2023 by the
        way)
        <br />
        I am a fourth year medical student at UMSU in Iran.
        <br />
        I love to code so here i am creating my own personal website. I started
        to code right after i was accepted to university.
        <br />
        In my github i have the projects that i have worked on and i am proud of
        😎.
        <br />
        You might say that you have chosen two entirely different majors to
        learn, but my ultimate goal is that i become an entrepreneur who works
        on developing <span className="text-red-700 text-2xl">AI</span> tools
        for health and safety 🦾.
        <br />
        By the Way that icon that you see upthere is created by{" "}
        <Link className="under" href={"https://labs.openai.com/"}>DALL-E</Link>.<br />
      </p>

      <span className="py-4">Contact Me via Email: <span className="under">alihaghjou30@gmail.com</span></span>
    </main>
  );
}
