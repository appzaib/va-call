import { FaArrowRight, FaCashRegister, FaCheck, FaDigitalOcean, FaEyeSlash, FaHandsHelping, FaPersonBooth, FaToolbox, FaUser } from "react-icons/fa"



export default function Help(){


    return(
        <>
        <div className="h-1/2 bg-no-repeat items-center bg-cover bg-center sm:h-full"
        style={{backgroundImage: `url('https://preview.moxcreative.com/vocall/wp-content/uploads/sites/7/2022/02/call-center-1.jpg')`}}>
            <div className="flex-wrap flex-col text-center lg:px-40 pt-52">
                <h1 className="lg:text-6xl md:text-2xl font-extrabold text-sky-700 lg:mt-96">Help Center</h1>
                <p className="text-sky-700 py-3">Our Help Center is dedicated to providing timely and effective solutions to all your queries and concerns.</p>
          <button class="duration-700 my-7 inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-sky-900 hover:{transition-dely: 500ms} rounded-full font-semibold text-lg">Hire Us Now<FaArrowRight className="mt-1 mx-1 "/></button>

            </div>
            </div>  


                

             <div className="flex flex-wrap lg:flex-row flex-col items-center py-20">
          
          <div className=" lg:w-1/2 md:w-1/2 flex flex-wrap flex-col md:items-start md:text-left mb-16 md:mb-0 items-center px-10">
            <div className="">
            <h1 class="sm:text-2xl lg:text-5xl mb-4 font-bold text-sky-900">What do you need help with?</h1>

            </div>
            <div className="flex flex-wrap">
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaDigitalOcean className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Get Started</h1>
                <p className="m-3">We possess specialized knowledge, skills, and experience in a particular field to provide services or support to your company.</p>
              </div>
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaUser className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Account</h1>
                <p className="m-3">As a call center representative, I can provide assistance to customers with account-related inquiries and help resolve any issues they may have.</p>
              </div>

            </div>
            <div className="flex flex-wrap">
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaToolbox className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Services</h1>
                <p className="m-3">Providing exceptional customer service and resolving their inquiries or concerns efficiently..</p>
              </div>
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaEyeSlash className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Data & Privacy</h1>
                <p className="m-3">Data and privacy are critical aspects of our digital world, and it's crucial to ensure that personal and sensitive information is handled securely and protected from unauthorized access or misuse.</p>
              </div>

            </div>
            <div className="flex flex-wrap">
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaCashRegister className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Payment</h1>
                <p className="m-3">We assist others with their payment-related queries and provide guidance on making secure and hassle-free transactions.</p>
              </div>
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaHandsHelping className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Support</h1>
                <p className="m-3">We assist clients in providing excellent customer support and handling inquiries efficiently.</p>
              </div>

            </div>
          </div>
          <div className="lg:w-1/2 items-center">
            <img
            className=""
             src="https://preview.moxcreative.com/vocall/wp-content/uploads/sites/7/2022/02/img_7.png" alt="Img" />
          </div>
        </div>


     <div className="text-center lg:px-72">
        <h1 className=" text-6xl text-sky-900 font-bold">Customer’s Satisfaction is our first priority</h1>
        <p className="py-10">At our company, ensuring customer satisfaction is our topmost priority, and we strive to exceed their expectations with every interaction.</p>
          <button class="duration-700 my-7 inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-sky-900 hover:{transition-dely: 500ms} rounded-full font-semibold text-lg">Learn More<FaArrowRight className="mt-1 mx-1 "/></button>
     </div>
        </>
    )
}