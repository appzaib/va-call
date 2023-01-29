import Link from "next/link";

function Card() {

  return (    
<div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500">
               <img src="" alt="img" />               
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
               <img src="" alt="img" />
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
                <img src="" alt="img" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500">
                <img src="" alt="img" />
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
                <img src="" alt="img" />
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
                <img src="" alt="img" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500">
               <img src="" alt="img" />
                
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
                               <img src="" alt="img" />

              </Link>
              <Link href={""} class="ml-2 text-gray-500">
               <img src="" alt="img" />
                
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <Link href={""} class="text-gray-500">
               <img src="" alt="img" />
              
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
               <img src="" alt="img" />
                
              </Link>
              <Link href={""} class="ml-2 text-gray-500">
               <img src="" alt="img" />
                
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card;
