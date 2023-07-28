'use client'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import {
  CalendarCheck,
  CaretLeft,
  ChartLineUp,
  ChatTeardrop,
  FolderNotch,
  FolderNotchMinus,
  Gear,
  List,
  MagnifyingGlass,
  PresentationChart,
  UserCircle,
  UserRectangle,
  Warning,
  X,
} from '@phosphor-icons/react'

type SidebarProps = {
  name: string
}

export default function Sidebar(props: SidebarProps) {
  const [userName, setUserName] = useState('')
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const cancelButtonRef = useRef(null)

  const Menus = [
    {
      title: 'Dashboard',
      src: <PresentationChart weight="duotone" size={20} />,
    },
    { title: 'Inbox', src: <ChatTeardrop weight="bold" size={20} /> },
    {
      title: 'Accounts',
      src: <UserRectangle weight="bold" size={20} />,
      gap: true,
    },
    { title: 'Schedule ', src: <CalendarCheck weight="bold" size={20} /> },
    { title: 'Search', src: <MagnifyingGlass weight="bold" size={20} /> },
    { title: 'Analytics', src: <ChartLineUp weight="bold" size={20} /> },
    {
      title: 'Files ',
      src: <FolderNotchMinus weight="bold" size={20} />,
      gap: true,
    },
    { title: 'Setting', src: <Gear weight="bold" size={20} /> },
  ]

  function getFirstName(name: string) {
    if (name) {
      const splitName = name.trim().split(' ')

      return splitName[0]
    }
    console.log('first name no getFirstName: ', name)
  }

  return (
    <>
      {/* Mobile menu */}
      <div className="flex h-16 w-full items-center bg-orange-500 px-4 md:hidden">
        <List
          size={32}
          className="text-white"
          weight={'bold'}
          onClick={() => {
            setOpenMobileMenu(!openMobileMenu)
          }}
        />
        <span className="ml-8 font-medium text-white">Dashboard</span>
        <UserCircle
          size={32}
          className="ml-auto text-white"
          weight={'fill'}
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        />
      </div>

      <Transition.Root show={openMobileMenu} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenMobileMenu}
        >
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

          <div className="fixed inset-0 z-10 mr-5 flex overflow-y-auto ">
            <div className="flex h-screen w-72">
              <Transition.Child
                as={Fragment}
                enter="duration-300"
                enterFrom="opacity-0 -translate-x-72"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="-translate-x-72 duration-500"
              >
                <Dialog.Panel className="flex w-full transform flex-col overflow-hidden bg-orange-500 p-4 pt-8 shadow-xl transition-all">
                  <div className="flex items-center gap-x-4">
                    <img
                      src="/aro-logo-white.png"
                      alt="logo"
                      className="w-10 cursor-pointer duration-500"
                    />
                    <h1
                      className={`origin-left whitespace-nowrap text-xl font-medium text-white duration-300`}
                    >
                      Instituto Aro
                    </h1>
                  </div>

                  <ul className="pt-6">
                    {Menus.map((menu, index) => (
                      <li
                        key={index}
                        className={`flex cursor-pointer items-center gap-x-4  rounded-md p-2 text-sm text-gray-100 hover:bg-orange-300 hover:bg-opacity-25 ${
                          menu.gap ? 'mt-9' : 'mt-2'
                        } ${
                          index === 0 &&
                          'bg-orange-200 bg-opacity-50 text-white'
                        } `}
                      >
                        {menu.src}
                        <span className={``}>{menu.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-2 mt-auto flex items-center gap-x-4 text-white">
                    <UserCircle weight="bold" size={40} />
                    <h1
                      className={` origin-left whitespace-nowrap text-xl font-medium duration-300`}
                    >
                      {getFirstName(props.name)}
                    </h1>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
            <div className="flex">
              <Transition.Child
                as={Fragment}
                enter="duration-300"
                enterFrom="opacity-0 -translate-x-72"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="-translate-x-96  duration-500"
              >
                <X size={24} color="#fff" weight="bold" className="ml-6 mt-5" />
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop Menu */}
      <div
        className={`${
          open ? 'w-72 ' : 'w-20'
        } relative hidden h-screen flex-col bg-orange-500 p-4 pt-8 duration-300 md:flex `}
      >
        <div
          className={`absolute -right-3 top-9 hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-orange-300 bg-white md:flex ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        >
          <CaretLeft size={14} color="#fb923c" weight="bold" />
        </div>

        <div className="flex items-center gap-x-4">
          <img
            src="/aro-logo-white.png"
            alt="logo"
            className="w-10 cursor-pointer duration-500"
          />
          <h1
            className={`origin-left whitespace-nowrap text-xl font-medium text-white duration-300 ${
              !open && 'scale-0'
            }`}
          >
            Instituto Aro
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex cursor-pointer items-center gap-x-4  rounded-md p-2 text-sm text-gray-100 hover:bg-orange-300 hover:bg-opacity-25 ${
                menu.gap ? 'mt-9' : 'mt-2'
              } ${index === 0 && 'bg-orange-300 bg-opacity-50 text-white'} ${
                !open && 'w-10 justify-center'
              }`}
            >
              {menu.src}
              <span
                className={`${!open && 'hidden'} origin-left duration-1000`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mb-2 mt-auto flex items-center gap-x-4 text-white">
          <UserCircle weight="bold" size={40} />

          <h1
            className={` origin-left whitespace-nowrap text-xl font-medium duration-300 ${
              !open && 'hidden'
            }`}
          >
            {getFirstName(props.name)}
          </h1>
        </div>
      </div>
    </>
  )
}
