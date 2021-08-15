import Image from "next/image";
export default function Footer() {
  return (
    <div className="lg:px-16 px-8 py-14 bg-gray-800">
      <div className="lg:flex space-y-4 lg:space-y-0 justify-around ">
        <div>
          <div className="w-20 ">
            <Image src="/logo.png" alt="logo" width="720" height="800" />
          </div>

          <div className="lg:w-80 text-center lg:text-left text-gray-300">
            Congratulations! At YIC You can now learn your post graduate degree
            from the comfort of your home.
          </div>
        </div>
        <div>
          <div className="text-2xl text-center lg:text-left text-gray-100 font-semibold">
            Contact us
          </div>
          <ul>
            <li className="text-center lg:text-left text-gray-300">
              Addis Ababa, Ethiopia
            </li>
            <li className=" text-center lg:text-left text-gray-300">
              info@yic.edu.et
            </li>
            <li className=" text-center lg:text-left text-gray-300">
              0906505050
            </li>
          </ul>
        </div>
        <div>
          <div className="text-2xl text-center lg:text-left  text-gray-100 font-semibold">
            Quick Links
          </div>
          <ul>
            <li className=" text-center lg:text-left text-gray-300">Home</li>
            <li className=" text-center lg:text-left text-gray-300">
              Accreditation
            </li>
            <li className="text-center lg:text-left    text-gray-300">
              How It Works
            </li>
            <li className="text-center lg:text-left  text-gray-300">Program</li>
            <li className=" text-center lg:text-left text-gray-300">About</li>
          </ul>
        </div>
        <div>
          <div className="text-2xl text-center lg:text-left text-gray-100 font-semibold">
            Programs
          </div>
          <ul>
            <li className=" text-center lg:text-left text-gray-300">MBA</li>
            <li className=" text-center lg:text-left text-gray-300">
              Leadership
            </li>
            <li className=" text-center lg:text-left text-gray-300">
              Project Management
            </li>
            <li className=" text-center lg:text-left text-gray-300">
              ACcounting
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
