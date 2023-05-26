import { Fragment, useContext, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AuthContext } from '../contexts/AuthContext';

import { CalendarCheck, CaretLeft, ChartLineUp, ChatTeardrop, FolderNotch, FolderNotchMinus, Gear, List, MagnifyingGlass, PresentationChart, UserCircle, UserRectangle, Warning, X } from "@phosphor-icons/react";


const Sidebar = () => {
  const { user } = useContext(AuthContext)

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const cancelButtonRef = useRef(null);

  const Menus = [
    { title: "Dashboard", src: <PresentationChart weight='duotone' size={20} /> },
    { title: "Inbox", src: <ChatTeardrop weight='bold' size={20} /> },
    { title: "Accounts", src: <UserRectangle weight='bold' size={20} />, gap: true },
    { title: "Schedule ", src: <CalendarCheck weight='bold' size={20} /> },
    { title: "Search", src: <MagnifyingGlass weight='bold' size={20} /> },
    { title: "Analytics", src: <ChartLineUp weight='bold' size={20} /> },
    { title: "Files ", src: <FolderNotchMinus weight='bold' size={20} />, gap: true },
    { title: "Setting", src: <Gear weight='bold' size={20} /> },
  ]

  function getFirstName(name: string) {
    if (name) {
      let splitName = name.trim().split(' ');

      return splitName[0];
    }
    console.log(name)
  }

  return (
    <>

      {/* Mobile menu */}
      <div className='flex items-center h-16 w-full px-4 bg-purple-900 md:hidden'>
        <List
          size={32}
          className='text-white'
          weight={'bold'}
          onClick={() => { setOpenMobileMenu(!openMobileMenu), setOpen(!openMobileMenu) }}
        />
        <span className='text-white font-medium ml-8'>Dashboard</span>
        <UserCircle
          size={32}
          className='text-white ml-auto'
          weight={'fill'}
          onClick={() => { setShowMenu(!showMenu), setOpen(!showMenu) }}
        />
      </div>

      <Transition.Root show={openMobileMenu} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenMobileMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="flex fixed inset-0 z-10 overflow-y-auto mr-5 ">

            <div className="flex h-screen w-72">

              <Transition.Child
                as={Fragment}
                enter="duration-300"
                enterFrom="opacity-0 -translate-x-72"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="-translate-x-72 duration-500"
              >
                <Dialog.Panel className="flex flex-col transform overflow-hidden bg-purple-900 shadow-xl transition-all pt-8 p-4 w-full">
                  <div className='flex gap-x-4 items-center'>
                    <img src="aro-logo-white.png"
                      alt="logo"
                      className='w-10 cursor-pointer duration-500'
                    />
                    <h1
                      className={`text-white origin-left font-medium text-xl duration-300 whitespace-nowrap`}
                    >Instituto Aro</h1>
                  </div>

                  <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                      <li
                        key={index}
                        className={`text-gray-300 text-sm flex items-center  gap-x-4 cursor-pointer p-2 hover:bg-purple-300 hover:bg-opacity-25 rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && 'bg-purple-300 bg-opacity-50 text-white'} `}
                      >
                        {menu.src}
                        <span className={``}>{menu.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className='flex gap-x-4 items-center text-white mt-auto mb-2'>
                    <UserCircle
                      weight='bold'
                      size={40}
                    />
                    <h1
                      className={` origin-left font-medium text-xl duration-300 whitespace-nowrap`}
                    >
                      {getFirstName(user?.name)}
                    </h1>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
            <div className='flex'>
              <Transition.Child
                as={Fragment}
                enter="duration-300"
                enterFrom="opacity-0 -translate-x-72"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="-translate-x-96  duration-500"
              >
                <X
                  size={24}
                  color='#fff'
                  weight="bold"
                  className='mt-5 ml-6'
                />
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop Menu */}
      <div className={`${open ? 'w-72 ' : 'w-20'} hidden relative duration-300 pt-8 p-4 h-screen bg-purple-900 md:flex flex-col `}>

        <div
          className={`hidden md:flex items-center justify-center absolute cursor-pointer rounded-full -right-3 top-9 w-7 h-7 border-2 border-purple-900 bg-white ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        >
          <CaretLeft
            size={14}
            color="#c084fc"
            weight="bold"
          />
        </div >

        <div className='flex gap-x-4 items-center'>
          <img src="aro-logo-white.png"
            alt="logo"
            className='w-10 cursor-pointer duration-500'
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 whitespace-nowrap ${!open && 'scale-0'}`}
          >Instituto Aro</h1>
        </div>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center  gap-x-4 cursor-pointer p-2 hover:bg-purple-300 hover:bg-opacity-25 rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && 'bg-purple-300 bg-opacity-50 text-white'} ${!open && 'justify-center w-10'}`}
            >
              {menu.src}
              <span className={`${!open && 'hidden'} origin-left duration-1000`}>{menu.title}</span>
            </li>
          ))}
        </ul>

        <div className='flex gap-x-4 items-center text-white mt-auto mb-2'>

          <UserCircle
            weight='bold'
            size={40}
          />

          <h1
            className={` origin-left font-medium text-xl duration-300 whitespace-nowrap ${!open && 'hidden'}`}
          >
            {getFirstName(user?.name)}
          </h1>
        </div>

      </div>
    </>
  )
}

export default Sidebar