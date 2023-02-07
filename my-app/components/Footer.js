import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"


export default function Footer(){
    const Footlinks1 = ["Call Center", "Collections", "Virtual Assistance", "Inbound Requests"]
    const Footlinks2 = ["Our Team", "FAQ", "Our Work", "Leadership"]
    const Footlinks3 = ["Ticket System", "Contact Now", "", "Articals And News"]


    return(
<>
  <div class="px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link href={""} class="flex font-medium items-center md:justify-start justify-center text-gray-900 ">
       <img className="h-12" src="https://templatekit.jegtheme.com/callerr/wp-content/uploads/sites/101/2021/05/logo.png" alt="Img" />
        <span class="ml-3 text-xl">VA Call</span>
      </Link>
      <p class="mt-2 text-sm text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem iusto saepe, magnam quod amet rem. Ipsa pariatur corrupti dolorem quas quaerat est eveniet vitae sunt possimus dolores, deserunt accusamus?
      </p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="font-bold text-violet-900 tracking-widest text-sm mb-3">SERVICES</h2>
        <ul class="list-none mb-10">
          {Footlinks1.map((Footlinks1, i)=>(

          <li className="py-1">
            <Link href={""} class="text-gray-600 hover:text-gray-800">{Footlinks1}</Link>
          </li>
          ))}
        </ul>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="font-bold text-violet-900 tracking-widest text-sm mb-3">COMPANY</h2>
       <ul class="list-none mb-10">
          {Footlinks2.map((Footlinks2, i)=>(

          <li className="py-1">
            <Link href={""} class="text-gray-600 hover:text-gray-800">{Footlinks2}</Link>
          </li>
          ))}
        </ul>
      </div>
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="font-bold text-violet-900 tracking-widest text-sm mb-3">SUPPORT</h2>
        <ul class="list-none mb-10">
          {Footlinks3.map((Footlinks3, i)=>(

          <li className="py-1">
            <Link href={""} class="text-gray-600 hover:text-gray-800">{Footlinks3}</Link>
          </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 VA Call —
        <Link href={""} class="text-gray-600 ml-1">@Abdullah Khan</Link>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href={""} class="text-gray-500">
          <FaFacebook className="text-3xl"/>
        </Link>
        <Link href={""} class="ml-3 text-gray-500">
          <FaTwitter className="text-3xl"/>
        </Link>
        <Link href={""} class="ml-3 text-gray-500">
          <FaLinkedin className="text-3xl"/>
        </Link>
        <Link href={""} class="ml-3 text-gray-500">
          <FaInstagram className="text-3xl"/>
        </Link>
      </span>
    </div>
  </div>
</>
    )
}