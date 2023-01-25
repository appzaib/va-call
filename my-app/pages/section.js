import { FaArrowRight } from "react-icons/fa"



export default function Section(){

    return(
      <>
        <div className="bg-sky-700">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="sm:text-4xl text-8xl mb-4 font-bold text-white">Connecting World for Better Solving.</h1>
      <p class="mb-8 leading-relaxed font-bold">Improve customer experience by listening and acting on their feedback</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Start Free Trial<FaArrowRight className="mt-1 mx-1 "/></button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="Img" src="https://preview.moxcreative.com/vocall/wp-content/uploads/sites/7/2022/02/img_9.png"/>
    </div>
  </div>
        </div>
        <div className="">
          <div></div>
          <div></div>
        </div>
        </>
    )
}