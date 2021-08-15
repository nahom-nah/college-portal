import { Footer, NavBar } from "./../components";
import { AcademicCapIcon, DesktopComputerIcon } from "@heroicons/react/solid";
import sideImage from "./../public/class-uni.jpg";
import Image from "next/image";
import Head from "next/head";
export default function ProgramDetail() {
  return (
    <div>
      <Head>
        <title>college portal program detail page</title>
        <meta name="Description" content="Build college portal"></meta>
      </Head>
      <NavBar />
      <div className="pt-16">
        <div className="lg:flex px-6 py-6 lg:px-20 lg:py-20 bg-gradient-to-r from-blue-200 via-white to-white">
          <div className="lg:w-1/2 px-3 space-y-4">
            <div className="text-4xl text-center lg:text-left font-bold text-gray-800">
              Master of Business Administration (MBA)
            </div>
            <div className="text-gray-700 text-center lg:text-left">
              Our YIC MBA prepares managers for the changing demands of the
              global market and the increasing challenges of contemporary
              business. You will gain practical insight into the key issues
              facing organizations today and investigate key methodologies
              relevant to the real world. We'll encourage you to think about
              business in a responsible way, creating sustainable value for
              business and society at large, and contributing to a healthy
              economy.
            </div>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <div className="w-96">
              <Image src={sideImage} alt="side-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex px-6 lg:px-20 py-20 border-b">
        <div className="lg:w-1/2 space-y-4">
          <div className="text-3xl text-center lg:text-left font-bold text-gray-800">
            Program at a glance
          </div>
          <div>
            <div className="font-bold text-xl text-center lg:text-left text-gray-700">
              TYPE
            </div>
            <div className="text-gray-700 text-center lg:text-left font-semibold">
              Online Masters Program
            </div>
          </div>
          <div>
            <div className="font-bold text-xl text-center lg:text-left text-gray-700">
              TYPE
            </div>
            <div className="text-gray-700 text-center lg:text-left font-semibold">
              Online Masters Program
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:flex mt-8 lg:mt-0 justify-around ">
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div>
              {" "}
              <DesktopComputerIcon className="h-20 text-yellow-800" />
            </div>
            <div className="text-4xl font-bold text-gray-600">36</div>
            <div className="text-xl text-gray-600 font-semibold">
              Credit Hours
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div>
              {" "}
              <AcademicCapIcon className="h-20 text-yellow-800" />
            </div>
            <div className="text-4xl font-bold text-gray-600">Total Price</div>
            <div className="text-xl space-y-4 text-gray-600 font-semibold">
              <div className="text-3xl font-bold text-gray-600 text-center ">
                {" "}
                1400 ETB
              </div>{" "}
              <div>Per Credit Hour</div>
            </div>
          </div>
        </div>
      </div>
      <div className="  lg:flex bg-blue-50">
        <div className="lg:w-3/4 px-6 lg:px-20 py-20 space-y-4 border-r">
          <div className="text-4xl font-bold text-gray-800">
            Study real world problems and look for a better Solution
          </div>
          <div className="text-gray-700 ">
            An MBA helps you towards better prospects, salaries, and ultimately,
            further fulfillment in business. Our MBA is rooted in the real world
            of business and has been carefully designed to give you a practical
            insight into the key issues facing organisations today in all parts
            of the world. People choose to study for an MBA for different
            reasons and with different outcomes in mind. Our course is
            vocationally focused, allowing you to tailor your studies to develop
            areas of knowledge relevant to your career plan, meet your
            particular goals, and shape your business future. Whatever you want
            to get out of the course, it's going to be demanding and challenging
            - dedication, energy and enthusiasm are a prerequisite. An MBA helps
            you towards better prospects, salaries, and ultimately, further
            fulfillment in business. Our MBA is rooted in the real world of
            business and has been carefully designed to give you a practical
            insight into the key issues facing organisations today in all parts
            of the world. People choose to study for an MBA for different
            reasons and with different outcomes in mind. Our course is
            vocationally focused, allowing you to tailor your studies to develop
            areas of knowledge relevant to your career plan, meet your
            particular goals, and shape your business future. Whatever you want
            to get out of the course, it's going to be demanding and challenging
            - dedication, energy and enthusiasm are a prerequisite. An MBA helps
            you towards better prospects, salaries, and ultimately, further
            fulfillment in business. Our MBA is rooted in the real world of
            business and has been carefully designed to give you a practical
            insight into the key issues facing organisations today in all parts
            of the world. People choose to study for an MBA for different
            reasons and with different outcomes in mind. Our course is
            vocationally focused, allowing you to tailor your studies to develop
            areas of knowledge relevant to your career plan, meet your
            particular goals, and shape your business future. Whatever you want
            to get out of the course, it's going to be demanding and challenging
            - dedication, energy and enthusiasm are a prerequisite.
          </div>
        </div>
        <div className="lg:w-1/4 bg-white lg:bg-blue-50 py-20 space-y-4">
          <div className="px-6 text-gray-800 text-xl font-bold">
            CAREER OPPORTUNITIES
          </div>
          <ul className="px-16 list-disc">
            <li className="font-semibold  text-gray-700">
              Business operation manager
            </li>
            <li className="font-semibold  text-gray-700">Project Management</li>
            <li className="font-semibold  text-gray-700">Financial manager</li>
            <li className="font-semibold  text-gray-700">Marketing manager</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
