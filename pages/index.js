import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import logo from "../public/logo.png";
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

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>INI WEB AJA BANG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" transition-all duration-300 ease-in-out bg-gray-300 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-4xl">MasHel</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-pink-500 text- to-rose-400 text-white px-4 py-2 border-none rounded-md ml-8 hover:scale-110 hover:animate-pulse transition-all ease-in-out"
                  href="#"
                >
                  Ini Tombol
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-pink-600 font-medium dark:text-pink-400 md:text-6xl">
              HellYeah
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Ini Tulisan Bang
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Anim occaecat nisi anim amet irure sunt sint. Esse nulla ad deserunt laborum magna cillum. Et reprehenderit id non occaecat do cillum irure reprehenderit amet in non adipisicing minim cupidatat. Id irure laboris do aute occaecat fugiat consequat consequat amet in. Enim ullamco minim proident excepteur ipsum minim exercitation do est exercitation laborum aute consectetur proident. Velit sint qui occaecat laboris excepteur ipsum aliquip labore velit.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a className="hover:text-pink-500 hover:scale-110 transition  ease-in-out duration-300" href="https://github.com/">
                  <AiFillGithub />
              </a>
              <a className="hover:text-pink-500 hover:scale-110 transition  ease-in-out duration-300" href="https://www.instagram.com/">
                  <AiFillInstagram />
              </a>
              <a className="hover:text-pink-500 hover:scale-110 transition  ease-in-out duration-300" href="https://www.linkedin.com/">
                  <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-pink-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={logo} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Gatau Nulis Apaan</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Incididunt qui pariatur nostrud ut proident. Non aliqua fugiat laborum amet nostrud laboris. Ea aliquip officia ut tempor consectetur incididunt non velit reprehenderit tempor velit culpa.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1 hover:bg-pink-300 transition ease-in-out duration-300 hover:scale-110 dark:hover:bg-pink-300">
              <Image src={design} width={100} height={100} />
              <h3 className="text-3xl font-medium pt-8 pb-2  ">
                Skill 1
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-pink-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1 hover:bg-pink-300 transition ease-in-out duration-300 hover:scale-110 dark:hover:bg-pink-300">
              <Image src={code} width={100} height={100} />
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Skill 2
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-pink-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1 hover:bg-pink-300 transition ease-in-out duration-300 hover:scale-110 dark:hover:bg-pink-300">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                  Skill 3
              </h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-pink-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Ini Juga Gatau Nulis Apaan</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Magna labore minim eu dolor ea consectetur nostrud excepteur anim. Ea pariatur est deserunt laborum duis laboris sunt exercitation labore nostrud sint. Ut proident elit qui commodo reprehenderit magna eu consequat.

Eiusmod eu ut mollit quis occaecat voluptate minim do veniam. Nulla Lorem ullamco officia eiusmod dolor. Veniam pariatur occaecat adipisicing proident velit aliquip culpa labore veniam est anim nulla. Eu do fugiat duis ut tempor irure exercitation reprehenderit qui. Aute et laboris culpa eiusmod. Lorem minim laboris ullamco dolor elit adipisicing nisi sunt nulla reprehenderit sint id.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:scale-105 transition ease-in-out duration-300 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition ease-in-out duration-300">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition ease-in-out duration-300">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition ease-in-out duration-300">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition ease-in-out duration-300">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition ease-in-out duration-300">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
