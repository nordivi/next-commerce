import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function NavBar() {
    return (
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
          <Link href='/' 
          className='uppercase font-bold text-md h-12 flex item-center'>
            Next Store
          </Link>
          <div className="flex items-center gap-8">
            <div className="flex items-center cursor-pointer relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Cart" className="h-8 w-8  fill-current text-white">
              <path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96a2 2 0 0 0-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" fill="#ffffff">
              </path><path fill="none" d="M0 0h48v48H0z"></path></svg>
              <span className="bg-teal-700 text-sm text-bold rounded-full h-5 w-5 text-center flex items-center justify-center absolute top-5 ">
                  2
              </span>

            </div>
            <div>
              <SignedIn>
              <UserButton/>
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
              <button className='uppercase rounded-md border-gray-400 px-3 py-2'>
                Fazer Login
              </button>
              </SignInButton>
            </SignedOut>
            </div>
            
          </div>
        </nav>
    )
}

export default NavBar