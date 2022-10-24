import { Fragment } from 'react'
import Head from 'next/head'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  SunIcon,
  MenuIcon,
  XIcon,
  MapIcon,
  CalendarIcon,
  LocationMarkerIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  IdentificationIcon,
  TicketIcon,
  CreditCardIcon
} from '@heroicons/react/outline'
import Image from 'next/image';
import Link from 'next/link';

const navigation = ['Início', 'Sobre Nós', 'Contato'];
// const navigation = ['Home', 'About Us', 'Services'];
const profile = ['Your Profile', 'Settings'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Aro Project</title>
        <meta name="description" content="Instituto Aro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between pt-7">
                <div className="flex-shrink-0 ">
                  <Image
                    src="/../public/aro-logo.svg"
                    alt="LogoAro"
                    width={55}
                    height={40}
                  />
                </div>
                <div className="flex items-center ml-auto">

                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4 ">
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a href="#" className=" text-orange-600 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-poppins font-medium text-xl">
                              {item}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={item}
                            href="#"
                            className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-poppins font-medium text-xl"
                          >
                            {item}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className=" p-1 text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <SunIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        {item}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-normal"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">

                  <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>


      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-auto flex ">
              <div className='mt-20 w-2/3'>
                <h1 className=' font-bold text-5xl text-gray-800'>
                  <a className='text-orange-600'>Curso</a> Tribunal do Júri: Teoria e Prática
                </h1>

                <p className='mt-10 text-gray-500 font-normal text-base'>
                  Participe do nosso primeiro Curso dividido em 3 módulos com diversos conteúdos que irão da prática à teoria.
                </p>
                <Link href={'https://forms.gle/ty8bVWVCreRMpCjf7'}>
                  <button className='mt-10 bg-orange-600 text-white font-medium text-xl py-3 px-6 rounded focus:outline-none hover:bg-orange-400 transition duration-500'>
                    Inscreva-se
                  </button>
                </Link>
              </div>
              <div className='border-2 border-orange-600 border-opacity-50 shadow-2xl w-2/5'>
                <div className='m-5'>
                  <button className=' border-orange-600 border-2 text-orange-600 font-medium text-xs py-2 px-4 rounded disabled cursor-auto mb-2 focus:outline-none'>
                    Vagas limitadas
                  </button>
                  <div className='text-sm '>

                    <span className='flex items-center my-2'>
                      <CalendarIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />10 e 11 de Dezembro
                    </span>
                    <span className='flex items-center my-2'>
                      <MapIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />Em Campos do Jordão-SP
                    </span>
                    <span className='flex items-center my-2'>
                      <LocationMarkerIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />Auditório Hotel Platanus
                    </span>
                    <span className='flex items-center my-2'>
                      <CheckCircleIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />
                      <a>Curso com certificação de  <strong className='text-orange-600'>20h</strong></a>
                    </span>
                    <Link href={'https://forms.gle/ty8bVWVCreRMpCjf7'}>
                      <button className='flex items-center bg-orange-600 my-8 mx-auto font-medium text-xs py-2 px-4 rounded text-white focus:outline-none hover:bg-orange-400 transition duration-500'><TicketIcon className="h-6 w-6 mr-2 " aria-hidden="true" />Quero me inscrever</button>

                    </Link>
                    <span className='flex items-center my-2 font-medium text-base'>
                      <CurrencyDollarIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />Investimento:
                    </span>

                    <div className='text-xs'>

                      <p> <strong> R$500,00</strong> em até 3x para <strong> ADVOGADOS </strong></p>
                      <p> <strong> R$349,90</strong> em até 3x para <strong> ESTUDANTES DE DIREITO </strong></p>
                    </div>

                    <div className='my-6 mr-auto'>

                      <span className='flex items-center my-2 font-medium text-base'>
                        <CreditCardIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />Formas de Pagamento:
                      </span>
                      <div className='text-xs '>
                        <p><strong>Cartão de Crédito</strong></p>
                        <p><strong>Pix</strong></p>
                        <p><strong>Transferência Bancária</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      </main >

    </div >
  )
}