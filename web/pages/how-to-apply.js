import { NavBar, Footer } from "./../components";
import Image from "next/image";
import Head from "next/head";
export default function HowToApply() {
  return (
    <div>
      <Head>
        <title>college portal how to page</title>{" "}
        <meta name="Description" content="Build college portal"></meta>
      </Head>
      <NavBar />
      <div className="pt-16 px-6 lg:px-20  lg:flex bg-gradient-to-r from-blue-200 via-white to-white">
        <div className="lg:w-1/2 lg:pr-8 py-20 space-y-8">
          <div className="text-4xl font-bold text-gray-800">
            Start your Application to YIC Online
          </div>
          <div className="text-gray-800">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </div>
          <button className="px-4 py-3 font-semibold text-white bg-blue-800">
            Apply Now
          </button>
        </div>
        <div className="lg:w-1/2 py-20 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BbilqOBOfg8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <div className="lg:flex px-6 lg:px-20 py-20">
          <div className="lg:w-1/2 px-4 space-y-3">
            <div className="font-semibold text-xl text-gray-700">STEP 1</div>
            <div className="font-bold text-bold text-3xl text-gray-800">
              Registration
            </div>
            <div className="  text-gray-500">
              Click on the "Apply Now" button, Enter your email and password and
              hit the "Submit" button. Go to your email and click the
              verification link. Once your email is verified, Enter your email
              and password and continue the registration process. Fill all the
              required all the required fields within your personal
              innformation, your address information, your emeregency contact
              person information, and your educational information.
            </div>
          </div>
          <div className="flex justify-center mt-4 lg:mt-0 lg:w-1/2">
            <Image
              src="/howto-side-1.png"
              alt="side-image"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="lg:flex  px-10 py-10 bg-blue-50 lg:bg-gradient-to-l from-blue-50 via-white to-white">
          <div className="flex justify-center lg:w-1/2">
            <Image
              src="/howto-side-1.png"
              alt="side-image"
              width={400}
              height={300}
            />
          </div>{" "}
          <div className="lg:w-1/2 px-4 space-y-3">
            <div className="font-semibold text-xl text-gray-700">STEP 2</div>
            <div className="font-bold text-bold text-3xl text-gray-800">
              Registration
            </div>
            <div className="  text-gray-500">
              Click on the "Apply Now" button, Enter your email and password and
              hit the "Submit" button. Go to your email and click the
              verification link. Once your email is verified, Enter your email
              and password and continue the registration process. Fill all the
              required all the required fields within your personal
              innformation, your address information, your emeregency contact
              person information, and your educational information.
            </div>
          </div>
        </div>

        {/* should be Component */}

        <div className="lg:flex  px-10 py-10 bg-white lg:bg-gradient-to-r from-blue-50 via-white to-white">
          <div className="lg:w-1/2 px-4 space-y-3">
            <div className="font-semibold text-xl text-gray-700">STEP 2</div>
            <div className="font-bold text-bold text-3xl text-gray-800">
              Registration
            </div>
            <div className="  text-gray-500">
              Click on the "Apply Now" button, Enter your email and password and
              hit the "Submit" button. Go to your email and click the
              verification link. Once your email is verified, Enter your email
              and password and continue the registration process. Fill all the
              required all the required fields within your personal
              innformation, your address information, your emeregency contact
              person information, and your educational information.
            </div>
          </div>
          <div className="flex my-4 lg:my-0 justify-center lg:w-1/2">
            <Image
              src="/howto-side-1.png"
              alt="side-image"
              width={400}
              height={300}
            />
          </div>{" "}
        </div>
        <div className="lg:flex  px-10 py-10 bg-blue-50 lg:bg-gradient-to-l from-blue-50 via-white to-white">
          <div className="flex my-4 lg:my-0 justify-center lg:w-1/2">
            <Image
              src="/howto-side-1.png"
              alt="side-image"
              width={400}
              height={300}
            />
          </div>{" "}
          <div className="lg:w-1/2 px-4 space-y-3">
            <div className="font-semibold text-xl text-gray-700">STEP 2</div>
            <div className="font-bold text-bold text-3xl text-gray-800">
              Registration
            </div>
            <div className="  text-gray-500">
              Click on the "Apply Now" button, Enter your email and password and
              hit the "Submit" button. Go to your email and click the
              verification link. Once your email is verified, Enter your email
              and password and continue the registration process. Fill all the
              required all the required fields within your personal
              innformation, your address information, your emeregency contact
              person information, and your educational information.
            </div>
          </div>
        </div>
        <div className="lg:flex  px-10 py-10 bg-white lg:bg-gradient-to-r from-blue-50 via-white to-white">
          <div className="lg:w-1/2 px-4 space-y-3">
            <div className="font-semibold text-xl text-gray-700">STEP 2</div>
            <div className="font-bold text-bold text-3xl text-gray-800">
              Registration
            </div>
            <div className="  text-gray-500">
              Click on the "Apply Now" button, Enter your email and password and
              hit the "Submit" button. Go to your email and click the
              verification link. Once your email is verified, Enter your email
              and password and continue the registration process. Fill all the
              required all the required fields within your personal
              innformation, your address information, your emeregency contact
              person information, and your educational information.
            </div>
          </div>
          <div className="flex my-4 lg:my-0 justify-center lg:w-1/2">
            <Image
              src="/howto-side-1.png"
              alt="side-image"
              width={400}
              height={300}
            />
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}
