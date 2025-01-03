import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutCom = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover h-full w-full object-center rounded" alt="Rayyan Naveed" src="/about/rayyan.jpeg" width={500} height={500}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Muhammad Rayyan Naveed
      </h1>
      <p className="mb-8 leading-relaxed">I am a passionate web developer currently pursuing a Bachelor of Science in Computer Science (BSCS) at Dawood University of Engineering and Technology. Alongside my academic journey, I am also enrolled in the prestigious Governor&apos;s Initiative for Artificial Intelligence and Cloud Computing. This program enables me to deepen my expertise in cutting-edge technologies, further complementing my skills as a web developer. My commitment to learning and growth drives me to explore innovative solutions in both web development and the dynamic fields of AI and cloud computing.</p>
      <div className="flex justify-center">
        <Link href={"https://www.linkedin.com/in/muhammad-rayyan-naveed-63090b329/"} target='_blank'>
        <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">LinkedIn</Button>
        </Link>
        <Link href={"https://www.instagram.com/rayyan_naveed_10/profilecard/?igsh=dHdiN2hraGZuNm44"} target='_blank'>
        <Button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Instragram</Button>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutCom