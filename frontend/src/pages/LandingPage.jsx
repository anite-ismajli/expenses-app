import { Link } from "react-router-dom";
import {LogIn} from "lucide-react";
import WebImage from "@/components/shared/landing/WebImage";

const LandingPage = () => {
  return (
    <main className='pt-24 bg-white'>
        <div className='px-12 mx-auto max-w-7xl'>
            <div className='w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center'>
                <h1>Manage your Expenses!</h1>
                    <p>Enjoy the most useful application that we serve for you..</p>

                    <div className='mb-4 space-x-0 md:space-x-2 md:mb-8'>
                        <Link to="/login">
                        Get Started <LogIn /> 
                        </Link>
                        <Link to="/register">
                        Sign Up
                        </Link>
                    </div>
            </div>
            <WebImage />
        </div>
    </main>
  )
}

export default LandingPage