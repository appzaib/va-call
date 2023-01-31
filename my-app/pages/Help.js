import { FaArrowRight, FaCashRegister, FaCheck, FaDigitalOcean, FaEyeSlash, FaHandsHelping, FaPersonBooth, FaToolbox, FaUser } from "react-icons/fa"



export default function Help(){


    return(
        <>
        <div className="h-1/2 bg-no-repeat items-center bg-cover bg-center sm:h-full"
        style={{backgroundImage: `url('https://preview.moxcreative.com/vocall/wp-content/uploads/sites/7/2022/02/call-center-1.jpg')`}}>
            <div className="flex-wrap flex-col text-center lg:px-40 pt-52">
                <h1 className="lg:text-6xl md:text-2xl font-extrabold text-sky-700 lg:mt-96">Help Center</h1>
                <p className="text-sky-700 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti, quo id doloremque ipsum fuga modi omnis, non repellendus ducimus eaque deleniti quibusdam excepturi aliquid sequi odio similique possimus hic.</p>
          <button class="duration-700 my-7 inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-sky-900 hover:{transition-dely: 500ms} rounded-full font-semibold text-lg">Hire Us Now<FaArrowRight className="mt-1 mx-1 "/></button>

            </div>
            </div>  


                

             <div className="flex flex-wrap container py-20 lg:px-20 md:px-0">
          
          <div className=" lg:flex-grow md:w-1/2 lg:w-2/3  flex flex-wrap md:items-start md:text-left mb-16 md:mb-0 items-center px-10">
            <div className="lg:ml-10 lg:pr-24 md:pr-16">
            <h1 class="sm:text-2xl lg:text-5xl mb-4 font-bold text-sky-900">What do you need help with?</h1>

            </div>
            <div className="flex flex-wrap">
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaDigitalOcean className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Get Started</h1>
                <p className="m-3">We possess specialized knowledge, skills, and experience in a particular field to provide services or support to your company.</p>
              </div>
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaUser className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Account</h1>
                <p className="m-3">We possess specialized knowledge, skills, and experience in a particular field to provide services or support to your company.</p>
              </div>

            </div>
            <div className="flex flex-wrap">
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaToolbox className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Services</h1>
                <p className="m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi .</p>
              </div>
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaEyeSlash className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Data & Privacy</h1>
                <p className="m-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, blanditiisris id enim!</p>
              </div>

            </div>
            <div className="flex flex-wrap">
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaCashRegister className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Payment</h1>
                <p className="m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi .</p>
              </div>
              <div className="sm:w-full lg:py-0 sm:py-10 lg:w-1/2">
                <h1 className="text-xl font-semibold m-3"><FaHandsHelping className="mr-2 text-5xl inline-flex rounded-lg p-1 bg-indigo-400 text-white"/>Support</h1>
                <p className="m-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, blanditiisris id enim!</p>
              </div>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-1/3 md:w-1/2 ">
            <img
            className="object-cover object-center rounded "
             src="https://preview.moxcreative.com/vocall/wp-content/uploads/sites/7/2022/02/img_7.png" alt="Img" />
          </div>
        </div>


     <div className="text-center lg:px-72">
        <h1 className=" text-6xl text-sky-900 font-bold">Customer’s Satisfaction is our first priority</h1>
        <p className="py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur quisquam quam quas culpa ab, ipsum consequuntur corporis cupiditate inventore eligendi repudiandae autem facere debitis sequi, minus tempore nesciunt eius.</p>
          <button class="duration-700 my-7 inline-flex text-white bg-sky-500 border-0 py-3 px-6 focus:outline-none hover:bg-sky-900 hover:{transition-dely: 500ms} rounded-full font-semibold text-lg">Learn More<FaArrowRight className="mt-1 mx-1 "/></button>
     </div>
        </>
    )
}