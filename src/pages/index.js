import Image from "next/image";
import Layout from "../components/layout";
import profilePic from "../../public/pictures/dp/developer-pic-1.png"
import Animatedtext from "../components/animatedtext";
import Link from "next/link";
import { LinkArrow } from "../components/icons";
import Footer from "../components/Footer";
import Hireme from "../components/Hireme";



export default function Home() {
  return (
    <>
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="w-full flex items-center justify-between">
          <div className="w-1/2">
            <Image src={profilePic} alt="Tahakhan" className="w-full h-auto"/>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <Animatedtext className="!text-5xl !text-left" text="Turning Vision Into Reality With Coding & Design"/>

            
            <p className="my-4 text-base font-medium">
              As a skilled front-end web developer, Iam dedicated to turning ideas into innovative web alications. Explore my latest projects and articles, showcssing my expertise in react ns web development.

            </p>
            <div className=" flex items-center self-start mt-2 ">
              <Link href={``} target="_blank" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark " download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
              <Link href={`mailto:tahak6715@gmail.com`} className="ml-4 text-lg font-medium capitalize text-dark underline"  target="_blank">Contact</Link>
            </div>
          </div>


        </div>

        

      </Layout>

      <Hireme/>

      


    </main>
    </>
  )
}
