import { Link } from "react-router-dom";
import {ArrowBigRight, SquarePen} from "lucide-react";
import WebImage from "@/components/shared/landing/WebImage";

const LandingPage = () => {
  return (
    <main className='pt-24 bg-accent-foreground'>
        <div className='px-12 mx-auto max-w-5xl'>
            <div className='w-full mx-auto md:w-10/12 xl:w-9/12 md:text-center'>
                <h1 className="mb-7 text-4xl font-extrabold leading-none tracking-normal text-slate-600 md:text-5xl md:tracking-tight">
                  Manage your Expenses!
                  </h1>
                    <p className="block w-full py-2 bg-clip-text leading-12 text-2xl font-semibold  text-transparent bg-linear-to-r from bg-blue-800 to-red-300">
                      Enjoy the most useful application that we serve for you..
                      </p>

                    <div className='mb-5 space-x-0 md:space-x-3 md:mb-10'>
                        <Link 
                        to="/login"
                        className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-slate-600 rounded-2xl sm:w-auto sm:mb-0"
                        >
                        Get Started <ArrowBigRight />
                        </Link>
                        <Link 
                            to="/register"
                            className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-slate-600 rounded-2xl sm:w-auto sm:mb-0"
                            >
                        Sign Up <SquarePen />
                        </Link>
                    </div>
            </div>
            <WebImage />
        </div>
    </main>
  )
}

export default LandingPage;