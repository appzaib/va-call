import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"



export default function About(){


    return(
        <div className="bg-gray-200">
        <div className="w-full text-center">
            <h1 className="text-5xl py-16 font-semibold text-sky-900">About Us</h1>
        </div>
        <div className="lg:flex lg:flex-wrap lg:px-10 py-10 h-auto">
            <div className="lg:w-1/2">
                    <img className="rounded object-cover" src="https://themes.webdevia.com/digitalo-creative-digital-agency-wordpress-theme/wp-content/uploads/2017/12/blog-3--1000x500.jpg" alt="Img" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="lg:px-10">
                <h1 className="lg:text-4xl md:text-2xl text-sky-900 font-bold">The Next Generation of the Development in Our DNA</h1>
                <p className="text-lg px-2">The Next Generation of Development is in our DNA. We are committed to staying at the forefront of technological advancements and delivering innovative solutions to our clients. Our team of skilled developers and engineers are dedicated to creating custom software solutions that are tailored to the unique needs of each client. We believe in collaboration and communication, working closely with our clients to ensure that their vision is realized through every step of the development process.</p>
                </div>
            </div>
        </div>
        <div className="w-full py-10">
            <h1 className="font-bold text-6xl text-center text-sky-900">We complete +120 Project <br /> Yearly</h1>
            <p className="text-center text-lg py-3">We are fastest growing digital agency that with strong business idea and ethics. <br /> Check our info with some awesome numbers.</p>
        </div>

<div>
    <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Behind our success lies our brilliant team of dedicated professionals, whose expertise, creativity, and passion drive us to achieve excellence in all that we do.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/82768953?v=4"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Abdullah Khan</h2>
            <h3 class="text-gray-500 mb-3">Front End Web Developer</h3>
            <p class="mb-4">Highly skilled in designing and developing user-friendly interfaces that enhance the user experience and drive engagement.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500 hover:text-gray-600">
               <FaFacebook/>              
              </Link>
              <Link href={""} class="ml-2 text-gray-500 hover:text-gray-600">
               <FaTwitter/>
              </Link>
              <Link href={""} class="ml-2 text-gray-500 hover:text-gray-600">
                <FaInstagram/>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/83128763?s=70&v=4"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Nadia Khan</h2>
            <h3 class="text-gray-500 mb-3">Front End Web Developer</h3>
            <p class="mb-4">Expert in HTML, CSS, and JavaScript, she deliver visually appealing and responsive websites and applications to meet our clients' needs.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500 hover:text-gray-600">
               <FaFacebook/>              
              </Link>
              <Link href={""} class="ml-2 text-gray-500 hover:text-gray-600">
                <FaTwitter/>
              </Link>
              <Link href={""} class="ml-2 text-gray-500 hover:text-gray-600">
                <FaInstagram/>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/44477943?s=70&v=4"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Shoaib khan</h2>
            <h3 class="text-gray-500 mb-3">Back End Web Developer</h3>
            <p class="mb-4">Our systems run seamlessly and efficiently, ensuring optimal performance and user experience.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500 hover:text-gray-600">
                <FaFacebook/>
              </Link>
              <Link href={""} class="ml-2 text-gray-500 hover:text-gray-600">
                <FaTwitter/>

              </Link>
              <Link href={""} class="ml-2 text-gray-500 hover:text-gray-600">
               <FaInstagram/>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-3xl w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/28682772?v=4"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Rana Jahanzaib</h2>
            <h3 class="text-gray-500 mb-3">Full Stack Developer</h3>
            <p class="mb-4">Thanks to our brilliant full stack developer, we're able to deliver top-notch, customized solutions that meet and exceed our clients' expectations.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500 hover:text-gray-600">
                <FaFacebook/>

              
              </Link>
              <Link href={""} class="ml-2 text-gray-500 hover:text-gray-600">
               <FaTwitter/>
               
              </Link>
              <Link href={""} class="ml-2 text-gray-500 hover:text-gray-600">
               <FaInstagram/>                               
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div> 

            <div className="bg-red-500 h-max w-full text-center py-20">
            <h1 className="font-bold py-20 text-4xl text-center text-sky-900">Have any projects in your minds? <br /> Lets talk about it.</h1>
            <button class="inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-sky-900 hover:{transition-dely: 500ms} rounded-full font-semibold text-lg ">Register Now</button>
            </div>
        </div>
    )
}