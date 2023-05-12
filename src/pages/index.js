import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../../containers/Hero'
import About from '../../containers/About'
import Howtobuy from '../../containers/Howtobuy'
import Tokenomics from '../../containers/Tokenomics'
import Roadmap from '../../containers/Roadmap'
import Contact from '../../containers/Contact'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>MEOW</title>
        <meta name="description" content="$MEOW" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main
      className="flex max-w-full min-h-screen flex-col bg-cover bg-[#f19b45]"
    >
       <div className=' bg-white w-full   bg-cover bg-center h-8'></div>
       <Hero id="#home"></Hero>
       <div className=' bg-white w-full   bg-cover bg-center h-8'></div>
       <About id="#about"></About>
       <div className=' bg-white w-full   bg-cover bg-center h-8'></div>
       <Howtobuy id="#how"></Howtobuy>
       <div className=' bg-white w-full   bg-cover bg-center h-8'></div>
       <Tokenomics id="#token" ></Tokenomics>
       <div className=' bg-white w-full   bg-cover bg-center h-8'></div>
       <Roadmap id="#road"></Roadmap>
       <div className=' bg-white w-full   bg-cover bg-center h-8'></div>
       <Contact></Contact>
       <div className=' bg-white w-full   bg-cover bg-center h-12 flex justify-center items-center text-white font-black'>
       © 2023 by MEOW. All rights reserved!
       </div>
    </main></>
  )
}
