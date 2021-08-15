import { LocationMarkerIcon } from "@heroicons/react/solid";
import { NavBar } from "../components";
import Carousel from "../components/Carousel";
import Image from "next/image";
import Head from "next/head";
import heroSideImage from "./../public/college-bg.png";
import Footer from "../components/Footer";

const slides = [
  { src: "/class-three.jpg", title: "MBA" },
  { src: "/class-two.jpg", title: "ABM" },
  { src: "/class-three.jpg", title: "ABC" },
  { src: "/class-four.jpg", title: "CDE" },
  { src: "/class-three.jpg", title: "EFG" },
  { src: "/class-two.jpg", title: "HIJ" },
  { src: "/class-three.jpg", title: "XYZ" },
  { src: "/class-four.jpg", title: "123" },
];

function Home(props) {
  return (
    <div>
      <Head>
        <title>college portal home page</title>
        <meta name="Description" content="Build college portal"></meta>
      </Head>
      <NavBar />

      <div className="  pt-16  bg-gradient-to-r from-blue-200 via-white to-white ">
        <div className="flex">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="md:w-3/4  space-y-6">
              <div className="text-5xl text-center md:text-left font-bold text-gray-900">
                Earn your masters at Yardstick Online.
              </div>
              <div className="font-semibold text-center md:text-left">
                Congratulations! At YIC You can now learn your post graduate
                degree from the comfort of your home.
              </div>
              <div className="space-x-6 mt-4 flex justify-around lg:justify-start">
                <button className="px-8 py-1 rounded-md text-white font-semibold bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </button>
                <button className="font-semibold rounded-md border-2 border-blue-200 px-4 py-1 hover:bg-blue-200">
                  How To Apply
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex justify-center w-1/2 hidden">
            <Image src={heroSideImage} alt="left-g" className="h-cs" />
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex space-x-16 md:relative md:bottom-20  md:justify-center">
        <div className="px-4 py-4 cursor-pointer flex justify-center rounded-md  shadow-md h-36 w-44 items-center bg-gradient-to-br from-white to-blue-300 via-white  ">
          <div className="font-semibold">How does YIC Online Work</div>
        </div>
        <div className="px-4 py-4 cursor-pointer flex justify-center rounded-md  shadow-md h-36 w-44 items-center bg-gradient-to-br to-blue-300 via-white  from-white">
          <div className="font-semibold">Facts About YIC</div>
        </div>
        <div className="px-4 py-4 cursor-pointer flex justify-center rounded-md  shadow-md h-36 w-44 items-center bg-gradient-to-br from-blue-300 via-white  to-white">
          <div className="font-semibold">Intro to MBA</div>
        </div>
        <div className="px-4 py-4 cursor-pointer flex justify-center rounded-md  shadow-md h-36 w-44 items-center bg-gradient-to-br from-blue-300 via-white  to-white">
          <div className="font-semibold">Online Learning Requirments</div>
        </div>
      </div>
      <div className="space-y-4 px-4 py-8 lg:px-80">
        <div className="text-center text-4xl font-bold text-gray-800">
          Welcome!
        </div>
        <div className="text-center  text-gray-500">
          Welcome to YIC online website, we hope you find all of the information
          you are looking for and that the website will giveyou an insight into
          our wonderful institution. At YIC we strive for excellence in
          education.
        </div>
      </div>
      <div className="lg:px-20 px-4 mt-20 space-y-2 bg-gradient-to-r from-blue-100 via-white to-white py-10">
        <div className="text-4xl text-center lg:text-left font-bold text-gray-800">
          Check out our programs below
        </div>
        <div className="lg:w-2/3 text-sm text-center lg:text-left text-gray-700">
          Become a YIC online student by registering to one of the four programs
          for which we have gained accreditation to provide graduate degrees.
        </div>
        <div>
          <Carousel slides={slides} />
        </div>
      </div>
      <div className="py-32 lg:px-20 px-4 lg:flex items-center">
        <div className="lg:w-1/2 space-y-6">
          <div className="text-4xl text-center lg:text-left font-bold text-gray-900">
            How to use our Learning <div>Platform</div>
          </div>
          <div className="text-gray-600 text-center lg:text-left">
            Self-paced learning, enabled through our e-learning platform, gives
            students the flexibility to learn in the pace and style that works
            best for them. Our learning platform has modern, easy to use
            interface designed to be responsive and accessible and it is easy to
            navigate on both PC and mobile devices. It also has a personalized
            dashboard to display current, past and future courses, along with
            collaborative tools and activities to work and learn together in
            forums, glossaries, database activities, and much more.
          </div>
          <button className="px-3 py-2 bg-blue-800 font-semibold text-white">
            Read More
          </button>
        </div>
        <div className="lg:w-1/2 flex mt-4 lg:mt-0 justify-center">
          <div className="w-5/6">
            <Image
              src="/classroom.jpg"
              alt="classroom-img"
              height="628"
              width="1100"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:px-20 items-center px-4 py-20 bg-blue-50">
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className=" w-5/6 ">
            <Image
              src="/class-uni.jpg"
              alt="side-img"
              height="628"
              width="1100"
            />
          </div>
        </div>
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <div className="text-4xl font-bold text-gray-800 ">
            Your Future is on the Horizon
          </div>
          <div className="font-semibold text-gray-700">
            There are multiple benefits for learning online
          </div>
          <ul className="list-disc px-10 mt-4 space-y-2">
            <li className="text-gray-700">
              Students have the freedom to juggle their careers and school
              because they aren't tied down to a fixed schedule
            </li>
            <li className="text-gray-700">
              Online education can cost less due to a variety of reasons. For
              example, there is no cost for commuting
            </li>
            <li className="text-gray-700">
              Online education also provides students with the chance to network
              with peers across nations or even different continents
            </li>
            <li className="text-gray-700">
              All the information that you will need will be safely stored in an
              online database. This includes things like live discussion
              documents, training materials and emails
            </li>
          </ul>
          <button className="mt-4 text-blue-600 font-semibold">
            Explore Graduate Programs
          </button>
        </div>
      </div>
      <div className="py-20 lg:px-20 px-4 lg:flex items-center">
        <div className="lg:w-1/2 space-y-6">
          <div className="text-4xl text-center lg:text-left font-bold text-gray-800">
            How to Apply to YIC Online?
          </div>
          <div className="text-gray-700 text-center lg:text-left">
            Our application and enrollment process is very simple and easy to
            use. You can visit the "how it works" section to understand the
            application process until the final payment verification steps.
          </div>
          <button className="px-3 py-2 bg-blue-800 font-semibold text-white">
            How To Apply
          </button>
        </div>
        <div className="lg:w-1/2 mt-4 lg:mt-0 flex items-center justify-center">
          <div className="w-5/6">
            <Image src="/apply.jpg" alt="how-to" height="628" width="1100" />
          </div>
        </div>
      </div>
      <div className="py-20 lg:px-20 px-2 flex justify-center bg-blue-50">
        <div className="space-y-4">
          <div className="text-center text-4xl font-bold text-gray-800">
            Check out our Payment Options
          </div>
          <div className="text-center font-semibold text-gray-700">
            Our payment options include both regular banking systems as well as
            Mobile banking.
          </div>{" "}
          <div className="md:flex  px-6 justify-center space-x-4 ">
            <div className="w-48">
              <Image src="/cbe.png" alt="cbe" height="628" width="1100" />
            </div>
            <div className="w-48">
              <Image
                src="/cbe-birr.png"
                alt="cbe-birr"
                height="628"
                width="1100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-32 lg:px-20 px-4 lg:flex  ">
        <div className="lg:w-1/2    ">
          <div>
            <div className="text-4xl font-bold text-gray-800">About Us</div>
            <div className="text-gray-700 font-semibold text-lg">
              14 years and counting
            </div>
          </div>

          <div className="shadow-lg bg-gradient-to-br  from-blue-200 to-white   px-4 py-5 lg:pr-40 lg:flex  rounded-xl">
            <div className="space-y-4">
              <div className="text-gray-900 font-semibold">
                YIC has 14 years of experience and was founded on 2006 GC
              </div>
              <ul className="list-disc lg:px-6 space-y-2">
                <li className="text-sm text-gray-700 font-semibold">
                  First private college in the country to get accredited to
                  teach Agriculture and Disaster risk management courses
                </li>
                <li className="text-sm text-gray-700 font-semibold">
                  20+ accredited programs in our faculty{" "}
                </li>
                <li className="text-sm text-gray-700 font-semibold">
                  80+ distance education branches and centers all around
                  Ethiopia
                </li>
              </ul>
            </div>
          </div>
          <div className=" hidden lg:block lg:relative lg:bottom-2/4 lg:left-96 rounded-b-lg  ">
            <div style={{ width: "19rem" }}>
              <Image
                src="/card-side-i.png"
                alt="sideiimg"
                height="359"
                width="371"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex  justify-end py-10  ">
          <div className="lg:w-3/5 space-y-3">
            <div className="text-4xl text-gray-700 font-bold">
              85% of learning is offline
            </div>
            <div className="text-gray-700">
              As it is self paced and as our digital contents are pre prepared
              and downloadable, the system doesn’t necessarily require you to be
              online all the time. However, you are required to be online with
              good connection for live lectures, , while submitting assignments,
              during examination schedules as well as submitting documents.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 px-4 lg:px-0 flex justify-center py-10">
        <div>
          <div className="text-center text-4xl font-bold text-gray-800">
            Meet Our Teachers
          </div>
          <div className="text-center text-gray-700">
            We are committed to employing a talented and diverse teaching force,
            one that reflects the students we teach every day.
          </div>
          <div className="mt-4">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
      <div className="pt-20  space-y-4">
        <div className="flex justify-center items-center space-x-2">
          <LocationMarkerIcon className="h-8 text-yellow-400" />
          <div className="text-4xl text-gray-800 font-bold">Contact us</div>
        </div>{" "}
        <div className="text-center text-xl font-semibold text-gray-700">
          Asmara Street, Addis Ababa, Ethiopia . info@yic.edu.et . +251906505050
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
