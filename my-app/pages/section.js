import { FaArrowRight, FaComment, FaHeadset, FaMoneyBillAlt, FaPhoneSlash, FaRobot, FaUserSecret, FaCheck, FaDollarSign, FaBalanceScaleRight, FaBars, FaMicrophoneAltSlash, FaMicrophoneAlt } from "react-icons/fa"



export default function Section(){

    return(
      <>
        <div className="bg-sky-700">
        <div class="mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
    <div class="md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
      <h1 class="md:text-4xl lg:text-6xl mb-4 font-semibold text-white">Connecting World for Better Solving.</h1>
      <p class="mb-8 leading-relaxed text-white font-bold py-6">Improve customer experience by listening and acting on expert's feedback</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white hover:duration-500 bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-transparent hover:transition-transform  rounded-xl text-lg font-semibold">Start Free Trial<FaArrowRight className="mt-1 mx-1 "/></button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full w-5/6">
      <img class="object-cover object-center rounded" alt="Img" src="/call.png"/>
    </div>
  </div>
        </div>
        <div className="flex flex-wrap py-20 flex-col lg:flex-row justify-center ">
          <div className="lg:w-1/2 w-full">
            <img
            className="object-cover object-center rounded p-10"
             src="/call2.jpg" alt="Img" />
          </div>
          <div className="flex flex-wrap flex-col justify-center px-10 w-full lg:w-1/2">
            <p className="py-4 uppercase font-medium text-amber-600">who we are</p>
            <h1 class="sm:text-2xl lg:text-5xl mb-4 font-bold text-sky-900">We communicate to get your business to the next level.</h1>
            <p className="lg:text-lg md:text-base mb-4">Strategic planning and innovation can propel a business to new heights.</p>
            
            <div>

            <button class="inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-sky-900 hover:duration-500 rounded-full font-semibold text-lg">Discover More<FaArrowRight className="mt-1 mx-1 "/></button>
            </div>

          </div>
        </div>
            <h1 className="font-bold text-4xl pb-20 text-center text-sky-900 px-10">We are trusted by over 5000 companies.</h1>
            <div className="bg-sky-900 py-20">
              <div className="lg:ml-10 text-center md:items-start mb-16 md:mb-0 items-center px-10">
            <p className="leading-relaxed uppercase text-amber-600 font-medium">what we offer</p>
            <h1 class="md:text-5xl lg:text-5xl mb-4 font-bold text-white">We will help your <br /> business grow.</h1>

            {/* <div> */}
 
            {/* </div> */}

            
  <div>
  <div class=" px-5 py-5 mx-auto  text-center">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex flex-col lg:flex-row items-center mb-3">
            <FaMicrophoneAlt className="text-indigo-400 mr-3  w-24 h-24" />

              {/* <img className="w-20 mx-3"
              src="https://themes.webdevia.com/digitalo-creative-digital-agency-wordpress-theme/wp-content/uploads/2019/03/Message-App.svg" alt="Img" /> */}
            <h2 class="text-sky-900 text-2xl font-medium">Call Center</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">We provide exceptional customer service, promptly handle inquiries, and ensure customer satisfaction through active listening, problem-solving, and effective communication skills.</p>
          </div>
        </div>
      </div>
     <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex flex-col lg:flex-row items-center mb-3">
              <FaMoneyBillAlt className="text-amber-400 mr-3 w-24 h-24"/>
            <h2 class="text-sky-900 text-2xl font-medium">Debt Collection</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">As a debt collection agent, we work to recover unpaid debts and improve cash flow for businesses, while maintaining ethical and legal standards and preserving customer relationships.</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex flex-col lg:flex-row items-center mb-3">
            <FaPhoneSlash className="text-sky-400 mr-3  w-24 h-24" />
            <h2 class="text-sky-900 text-2xl font-medium">Inbound Requests</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">As an inbound call center representatives, we provide prompt and courteous service, efficiently handle customer inquiries, and resolve issues to ensure customer satisfaction and loyalty.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div>
  <div class=" px-5 py-5 mx-auto  text-center">
    <div class="flex flex-wrap -m-4 ">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex flex-col lg:flex-row items-center mb-3">
            <FaHeadset className="text-lime-400 mr-3  w-24 h-24"/> 
            <h2 class="text-sky-900 text-2xl font-medium">Customer Support</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Our call center representatives provide top-quality customer support through timely, accurate, and friendly service, helping to resolve issues and ensure customer satisfaction with your products or services.</p>
          </div>
        </div>
      </div>
     <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex flex-col lg:flex-row items-center mb-3">
              <FaRobot className="text-fuchsia-400 mr-3 w-24 h-24" />
            <h2 class="text-sky-900 text-2xl font-medium">Virtual Assistance</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">As virtual assistants, we provide comprehensive call center services including customer support, technical assistance, order processing, and appointment scheduling to enhance your business operations.</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex flex-col lg:flex-row items-center mb-3">
            <FaComment className="text-indigo-400 mr-3 w-24 h-24" />
            <h2 class="text-sky-900 text-2xl font-medium">Live Chat Support</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Our live chat support services provide instant, personalized assistance to your customers, helping them resolve their issues quickly and efficiently, leading to increased customer satisfaction and loyalty.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </div>




          </div>
          
              </div>
   <div className="flex flex-wrap py-20 lg:px-20 md:px-0">
          <div className="w-full lg:w-1/2 flex flex-col ">
            
            <img
            className="object-cover object-center rounded "
             src="/call3.png" alt="Img" />
          
          </div>
          <div className="g:flex-grow md:w-1/2 flex flex-wrap md:items-start md:text-left mb-16 md:mb-0 items-center px-10">
            <p className="eading-relaxed uppercase font-medium text-amber-600">who we are</p>
            <h1 class="sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-sky-900">We communicate to get your business to the next level.</h1>
            <div className="flex flex-wrap">
              <div className="w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaCheck className="mr-2 inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Professional Staff</h1>
                <p className="m-3">We possess specialized knowledge, skills, and experience in a particular field to provide services or support to your company.</p>
              </div>
              <div className="w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaCheck className="mr-2 inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Affordable Price</h1>
                <p className="m-3">We possess specialized knowledge, skills, and experience in a particular field to provide services or support to your company.</p>
              </div>

            </div>
            <div className="flex flex-wrap">
              <div className="w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaCheck className="mr-2 inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>100% Guarantee Satisfaction</h1>
                <p className="m-3">We strive to provide exceptional customer service with a 100% satisfaction guarantee.</p>
              </div>
              <div className="w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaCheck className="mr-2 inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>24/7 Support</h1>
                <p className="m-3">We provide round-the-clock customer support services with a team of dedicated call center.</p>
              </div>

            </div>

          </div>
        </div>

        <div className="flex flex-wrap py-20 lg:px-20 justify-center">
          
          <div className="flex flex-wrap flex-col md:items-start md:text-left mb-16 px-10 lg:w-1/2 justify-center">
            <h1 class="sm:text-2xl lg:text-5xl font-bold text-sky-900">We are focused on making your process a success</h1>
            <p className="lg:text-lg md:text-base py-10">At our core, we are driven by a passion for making your process a success, leveraging our expertise and resources to deliver measurable results.</p>
          <div>
          <button class="inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:duration-500  hover:bg-sky-900 hover:{transition-dely: 500ms} rounded-full font-semibold text-lg">Discover More<FaArrowRight className="mt-1 mx-1 "/></button>
          </div>
          </div>
          <div className="lg:w-1/2 p-5">
          <div className="">
              <h1 className="text-3xl font-bold m-3"><FaDollarSign className="mr-2 inline-flex rounded-lg p-1 bg-indigo-400 text-fuchsia-700"/>Save Time And Money</h1>
                <p className="m-3">Customers can save time and money by leveraging our efficient call center services.</p>

            </div>
            <div className="">
              <h1 className="text-3xl font-bold m-3"><FaBalanceScaleRight className="mr-2 inline-flex rounded-lg p-1 bg-indigo-400 text-fuchsia-700"/>Boost Sales Conversions</h1>
                <p className="m-3">Boost your sales conversions with our customer-centric call center solutions today.</p>

            </div>            
            <div className="">
              <h1 className="text-3xl font-bold m-3"><FaHeadset className="mr-2 inline-flex rounded-lg p-1 bg-indigo-400 text-fuchsia-700"/>Recruit Better Talent</h1>
                <p className="m-3">Our call center can help you recruit top talent, improving your hiring process.</p>

            </div>
            <div className="">
              <h1 className="text-3xl font-bold m-3"><FaBars className="mr-2 inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Scale Your Business</h1>
                <p className="m-3">Partnering with our call center can help scale your business operations.</p>
            </div>
            </div>
        </div>

        <div className="w-full px-20 py-10 bg-sky-900 text-center">
          <p className="text-xl text-amber-700 font-semibold uppercase">Incredible Services</p>
          <h1 className="lg:text-7xl md:text-6 sm:text-5xl font-semibold mb-10 text-white">We do a business of Satisfaction</h1>
          <p className="text-white">Customer satisfaction is at the heart of everything we do, and we strive to exceed expectations by delivering exceptional service and quality products at all times.</p>
          <button class="my-7 inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:duration-500 hover:bg-sky-900 hover:{transition-dely: 500ms} rounded-full font-semibold text-lg">Discover More<FaArrowRight className="mt-1 mx-1 "/></button>

        </div>
        </>
    )
}