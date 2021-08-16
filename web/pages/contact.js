import { Footer, NavBar } from "./../components";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";
export default function Contact() {
  return (
    <div>
      <NavBar />
      <div className=" flex flex-col items-center space-y-6 pb-10 pt-32 bg-gradient-to-r from-blue-200 to-white via-white">
        {" "}
        <div className="text-4xl font-bold text-gray-800">Contact Us</div>
        <div className=" lg:w-3/5 w-4/5 lg:flex shadow-md rounded-lg">
          <div className="lg:w-2/5 py-5 space-y-4 bg-gray-800 rounded-xl px-2 lg:px-10">
            <div className=" text-xl font-bold text-gray-100">
              Contact Information
            </div>
            <div className="text-sm font-semibold text-gray-100">
              Fill Up the form and our Team will get back to you with in 24
              hours
            </div>
            <div className="space-y-8 py-10">
              <div className="flex space-x-2">
                <PhoneIcon className="h-6 text-gray-100" />
                <span className="text-gray-100">+251942194459</span>
              </div>
              <div className="flex space-x-2">
                <MailIcon className="h-6 text-gray-100" />
                <span className="text-gray-100">nahomt@gmail.com</span>
              </div>
              <div className="flex space-x-2">
                <LocationMarkerIcon className="h-6 text-gray-100" />
                <span className="text-gray-100">Addis Ababa</span>
              </div>
            </div>
          </div>
          <div className=" lg:px-20 px-2 mt-2 lg:mt-0 space-y-8 bg-white">
            <div className="lg:flex space-x-2">
              <div className="space-y-1">
                <label
                  id="firstname "
                  className="text-sm text-gray-800 font-semibold"
                >
                  First Name
                </label>
                <div className="flex space-x-2  bg-gray-50 px-2 py-1 rounded-md">
                  <UserIcon className="h-5" />
                  <input
                    type="text"
                    name="firstname"
                    className="  bg-gray-50  outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label
                  id="firstname "
                  className="text-sm text-gray-800 font-semibold"
                >
                  Last Name
                </label>
                <div className="flex space-x-2 bg-gray-50 px-2 py-1 rounded-md">
                  <UserIcon className="h-5" />
                  <input
                    type="text"
                    name="firstname"
                    className="  bg-gray-50  outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="lg:flex space-x-2 px-2 mt-2 lg:mt-0">
              <div className="space-y-1">
                <label
                  id="firstname "
                  className="text-sm text-gray-800 font-semibold"
                >
                  Email
                </label>
                <div className="flex space-x-2 bg-gray-50 px-2 py-1 rounded-md">
                  <MailIcon className="h-5" />
                  <input
                    type="email"
                    name="firstname"
                    className="  bg-gray-50  outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label
                  id="firstname "
                  className="text-sm text-gray-800 font-semibold"
                >
                  Phone
                </label>
                <div className="flex space-x-2 bg-gray-50 px-2 py-1 rounded-md">
                  <PhoneIcon className="h-5" />
                  <input
                    type="text"
                    name="firstname"
                    className="  bg-gray-50  outline-none"
                  />
                </div>
              </div>
            </div>{" "}
            <div>
              <label
                id="firstname "
                className="text-sm text-gray-800 font-semibold"
              >
                message
              </label>
              <textarea
                row={4}
                className="bg-gray-50 w-full h-36 rounded-md"
              ></textarea>
              <button className="px-8 py-2 bg-blue-800 text-white font-semibold my-2 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
