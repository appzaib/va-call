import Link from "next/link"
import { FaEnvelope, FaPhone } from 'react-icons/fa';


export default function Header(){

const headlinks = [{href:"/section", title:"Home"}, {href:"/About", title:"About"}, {href:"/Contact", title:"Contact Us"}, {href:"/Help", title:"Help Center"} ]


    return(
        <>
        <header className="text-black">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex font-medium items-center text-gray-900 mb-4 md:mb-0 w-1/4">
                    <Link href={"/section"}>
                        <img 
                        style={{ height: "50px" }}
                        src="https://templatekit.jegtheme.com/callerr/wp-content/uploads/sites/101/2021/05/logo.png" 
                        alt="img" />
                    </Link>
                    </div>
                    <div className="w-1/2">
                        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            {headlinks.map((headlinks, i) => (
                                <li className="mx-5 font-semibold"><Link href={headlinks.href}>{headlinks.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className=" w-1/4 inline-flex items-center">
                        {/* <button className="bg-blue-700 hover:bg-blue-800 mx-5 my-3 text-xl inline-flex"><FaPhone className="mx-4"/>Talk to an Expert</button> */}
                        <Link href={"."} className="text-right font-semibold bg-yellow-300 border-0 px-5 py-3 focus:outline-none hover:bg-yellow-400 rounded mt-4 md:mt-0"><FaPhone className="mr-4 inline-flex"/>Talk to Expert</Link>

                    </div>
            </div>
        </header>
        </>
    )



}