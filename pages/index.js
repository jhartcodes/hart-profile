import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import ContactForm from "../components/ContactForm.js";
import Avatar from "../public/Avatar.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import video from "../public/video.mp4";
import Link from "next/link.js";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hart Portoflio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">HartCodes</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Joel Hart
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Web Developer providing services for programming and design
              content needs. Read about my work below!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiOutlineGithub />
              <AiFillLinkedin />
              <AiTwotoneMail>
                <button onClick={() => setModalIsOpen(true)}>Open Form</button>
                <ContactForm isOpen={setModalIsOpen} />
              </AiTwotoneMail>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={Avatar} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Started learning how to code at the beginning of 2021 and have
              fallen in love with creating websites and applications.
              <span className="text-teal-500"> </span>I am a skilled developer
              with a strong track record of creating high-quality, user-friendly
              websites. With a passion for problem-solving and a talent for
              creating, I am able to effectively translate customer needs into
              functional and visually appealing web solutions. In addition to my
              technical skills, I am a strong communicator and work well in
              high-pressure environments.
              <span className="text-teal-500">startup </span>
              to help build a small
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am open to new opportunities.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto d-block"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Projects</h3>
              <p className="text-gray-800 py-2">Bloom</p>
              <p className="text-gray-800 py-2">Trillo</p>
              <p className="text-gray-800 py-2">Natours</p>
              <p className="text-gray-800 py-2">Scheduler</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={code}
                width={100}
                height={100}
                className="mx-auto d-block"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Interested In working with me?
              </h3>

              <p className="py-2"> Form FORM </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">My Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I've made some really cool stuff.
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
            <div class="card">
              <h3 className="text-3xl my-10 dark:text-white ">Bloom</h3>
              <div class="flex flex-wrap -mx-2">
                <Image
                  src={web2}
                  width={50}
                  height={50}
                  class="w-1/2 px-2 mb-2"
                />
                <Image src={web1} class="w-1/2 px-2 mb-2" />
                <Image src={web3} class="w-1/2 px-2 mb-2" />
                <Image src={web4} class="w-1/2 px-2 mb-2" />
              </div>
            </div>

            <div class="card">
              <h3 className="text-3xl my-10 dark:text-white ">Scheduler</h3>
              <div class="flex flex-wrap -mx-2">
                <Image
                  src={web7}
                  width={50}
                  height={50}
                  class="w-1/2 px-2 mb-2"
                />
                <Image
                  src={web6}
                  width={50}
                  height={50}
                  class="w-1/2 px-2 mb-2"
                />
              </div>
            </div>
            <div class="card">
              <h3 className="text-3xl my-10 dark:text-white ">Trillo</h3>
              <div class="flex flex-wrap -mx-2">
                <Image
                  src={web5}
                  width={100}
                  height={100}
                  class="w-1/2 px-2 mb-2"
                />
              </div>
            </div>
          </div>
        </section>
        <Link href="/projects">About Us</Link>
      </main>
    </div>
  );
}
