
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import {  PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logoz from "./assets/alexz.png"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  return (
    <header className="bg-white pt-2">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-0 lg:px-8 px-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src={logoz} alt="logo" />

          </a>
        </div>
        <div className="flex lg:hidden sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-6" aria-hidden="true" />
          </button>
        </div>
 
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

    </header>
  )
}
