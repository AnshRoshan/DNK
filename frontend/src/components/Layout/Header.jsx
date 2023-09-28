import React from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { NavLink, Link } from "react-router-dom"

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [cartCount, setCartCount] = React.useState(0)
  // Define the function to handle the click and navigate to the login page
  function handleLoginClick() {
    window.location.href = "/login"
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='relative w-full  bg-slate-600'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
        <div className='inline-flex items-center space-x-2'>
          <span>
            <Link to='/'>
              <div className='flex pt-0'>
                <div>
                  <img src='/logo.png' alt='image' width='54' height='54' />
                </div>
                <div className='pt-4 px-2'>
                  <span className='font-bold text-white'>DNK</span>
                </div>
              </div>
            </Link>
          </span>
        </div>
        <div className='hidden grow items-start lg:flex'>
          <ul className='ml-12 inline-flex space-x-8'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='inline-flex items-center text-sm font-semibold  text-white hover:text-sky-100'
                >
                  {item.name}
                  <span>
                    <ChevronDown className='ml-2 h-4 w-4' />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden space-x-2 lg:block'>
          <NavLink to='/cart'>
            <span className='cart-icon'>
              <i className='fa fa-shopping-cart'></i>
              {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
            </span>
          </NavLink>
          <NavLink
            to='/signup'
            className='rounded-md border px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            Sign Up
          </NavLink>
          <NavLink
            to='/login'
            className='rounded-md border px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            Log In
          </NavLink>
        </div>
        <div className='lg:hidden'>
          <Menu onClick={toggleMenu} className='h-6 w-6 cursor-pointer' />
        </div>
        {isMenuOpen && (
          <div className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden'>
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pb-6 pt-5'>
                <div className='flex items-center justify-between'>
                  <div className='inline-flex items-center space-x-2'>
                    <span>
                      <Link to='/'>
                        <div className='flex pt-0'>
                          <div>
                            <img src='/logo.png' alt='image' width='54' height='54' />
                          </div>
                          <div className='pt-4 px-2'>
                            <span className='font-bold text-Black'>DNK</span>
                          </div>
                        </div>
                      </Link>
                    </span>
                  </div>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      onClick={toggleMenu}
                      className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                    >
                      <span className='sr-only'>Close menu</span>
                      <X className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-4'>
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50'
                      >
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className='ml-3 h-4 w-4' />
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className='mt-2 space-y-2'>
                  <NavLink
                    to='/signup'
                    className='w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to='/login'
                    className='w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                  >
                    Log In
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
