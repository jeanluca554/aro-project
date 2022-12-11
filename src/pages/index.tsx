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
  MailIcon,
  TicketIcon,
  CreditCardIcon,
  AcademicCapIcon,
  ScaleIcon,
  PhoneIcon,
  UserGroupIcon

} from '@heroicons/react/outline'

import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/card';
import AreaCard from '../components/areaCard';
import ContactCard from '../components/contactCard';

const test = 'ScaleIcon';

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
                  <img
                    src="/logo.svg"
                    alt="LogoAro"
                  />
                </div>
                <div className="flex items-center ">

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
                {/*<div className="flex items-center md:ml-6">
                                    <button className=" p-1 text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <SunIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                                </div>*/}

                <div className="-mr-2 flex md:hidden" >
                  {/* Mobile menu button */}

                  <Disclosure.Button className="bg-orange-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-white">
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
                      className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-normal"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main>
        <div>
          <div className='max-w-md sm:max-w-none lg:max-w-5xl mx-auto mt-12 mb-12 px-6 py-6 lg:px-8 sm:flex sm:flex-row sm:mt-0'>
            <div className='flex flex-col items-center sm:w-2/3 sm:mt-20'>
              <h1 className='font-semibold text-4xl text-center text-gray-800 sm:font-bold sm:text-5xl sm:text-left' >
                <a className='text-orange-600'>Curso</a> Tribunal do Júri: Teoria e Prática
              </h1>

              <p className='mt-4 font-normal text-sm text-center sm:mt-10 text-gray-500 sm:font-normal sm:text-base sm:text-left'>
                Participe do nosso primeiro Curso dividido em 3 módulos com diversos conteúdos que irão da prática à teoria.
              </p>
              <Link href={'https://forms.gle/ty8bVWVCreRMpCjf7'}>
                <button className='mx-auto mr-auto mt-10 mb-14 bg-orange-600 text-white font-medium text-xl py-3 px-6 rounded focus:outline-none hover:bg-orange-400 transition duration-500 sm:ml-0'>
                  Inscreva-se
                </button>
              </Link>
            </div>
            <div className='border-2 border-orange-600 border-opacity-50 shadow-2xl sm:w-2/5'>
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
        </div>

        <div className='bg-orange-50'>
          <div className='max-w-md md:max-w-none md:max-w-5xl mx-auto pt-12 px-6 py-6 lg:px-8 md:flex md:flex-row md:mt-0'>
            <div className='md:w-3/5 pb-12 md:pt-12'>
              <img src="success_factors.svg" alt="" />
            </div>
            <div className='flex flex-col items-center md:w-2/3 md:mt-0 md:pl-5'>
              <p className=' font-normal text-base text-orange-500 md:mr-auto'>Sobre nós </p>
              <h1 className='pt-5 font-semibold text-4xl text-center text-gray-800 md:font-bold md:text-5xl md:text-left md:pt-4' >
                Consultoria e Formação de <a className='text-orange-600'>Profissionais</a> nas Principais<a className='text-orange-600'> Áreas</a>
              </h1>

              <p className='mt-4 font-normal text-sm text-center md:mt-10 text-gray-500 md:font-normal md:text-base md:text-left'>
                Prestamos serviços nos ramos da formação de profissionais e consultoria nas áreas do Direito Educacional, Direito Administrativo, bem como nas Áreas Esportivas e Culturais
              </p>
              <a href={'https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!'} target='_blank'>
                <button className='mx-auto mr-auto mt-10 mb-14 bg-orange-600 text-white font-medium text-lg py-3 px-6 rounded focus:outline-none hover:bg-orange-400 transition duration-500 sm:ml-0 md:mb-40'>
                  Entre em contato
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className=' px-6 pt-6 mb-12 lg:px-8 space-y-9 lg:max-w-5xl md:flex md:flex-row md:space-y-0 md:space-x-9  md:mx-auto md:-mt-24'>
          <AreaCard
            nameArea='Âmbito Jurídico'
            icon={<ScaleIcon className='w-8 h-8  text-white ' />}
            description='Levamos informação e orientação, além de disseminar os direitos fundamentais previstos na Constituição Federal de 1988 aos profissionais atuantes dos setores públicos e privados, bem como assegurar que sua atuação seja desenvolvida com êxito.'
          />

          <AreaCard
            nameArea='Âmbito Educacional'
            icon={<AcademicCapIcon className='w-8 h-8  text-white ' />}
            description='Atuamos diretamente no cotidiano de trabalho dos profissionais da Educação, o que permite conhecer essa realidade e planejar o trabalho de forma conectada às necessidades reais das escolas e demais instituições.'
          />
        </div>

        {/*<div className='bg-white'>
          <div className='max-w-md mx-auto pt-12 px-6 py-6 md:max-w-5xl '>
            <div className='flex flex-col items-center '>
              <hr className='border-orange-400 w-10' />
              <p className=' font-normal text-base text-orange-500 '>Nossos Consultores</p>
              <hr className='border-orange-400 w-10' />
              <h1 className='pt-5 font-semibold text-4xl text-center text-gray-800 md:font-bold md:text-5xl md:pt-5' >
                Consultores que levam <a className='text-orange-600'>Formação </a>e <a className='text-orange-600'>Orientação </a>a você
              </h1>

              <p className='mt-4 font-normal text-sm text-center text-gray-500 md:max-w-4xl md:font-normal md:text-base md:mt-10'>
                Levamos informação e orientação, além de disseminar os direitos fundamentais previstos na Constituição Federal de 1988 aos profissionais atuantes dos setores públicos e privados, bem como assegurar que sua atuação seja desenvolvida com êxito.
              </p>

            </div>
          </div>

          <div className='px-6 pt-6 mb-12 space-y-9 mx-auto md:flex md:flex-row md:space-y-0 md:space-x-9 md:max-w-5xl'>

            <Card
              nameConsultant='Marcio Alvarenga'
              description='Advogado criminalista com 20 anos de experiência profissional, Professor Universitário Titular, Mestre em Direito Público, Especialista em Direito Penal e Processual Penal, Especialista em Docência do Ensino Superior, Extensão em Tribunal do Júri pela Escola Superior de Advocacia.'
              image='marcio-consultor.jpg'
            />

            <Card
              nameConsultant='Isabela Rocha'
              description='Formada em Pedagogia, pós graduada em Psicopedagogia Clínica e Institucional e Direito Educacional, MBA pela Universidade de São Paulo em Gestão Escolar, graduanda em Direito pela Faculdade Santa Cecília. '
              image='isabela-consultora.jpg'
            />

            <Card
              nameConsultant='Fabiola Zoffoli'
              description='Formada em Letras, pós graduada em Didática do Ensino Superior e Alfabetização e Letramento, mestranda em Linguística Aplicada pela Universidade de Taubaté e graduanda em Direito pela Faculdade Santa Cecília.'
              image='fabiola-consultora.jpg'
            />
          </div>
                  </div>*/}

        <div className='bg-white'>
          <div className='max-w-md mx-auto pt-12 px-6 py-6 md:max-w-5xl '>
            <div className='flex flex-col items-center '>
              <hr className='border-orange-400 w-10' />
              <p className=' font-normal text-base text-orange-500 '>Fale com a gente</p>
              <hr className='border-orange-400 w-10' />
              <h1 className='pt-5 font-semibold text-4xl text-center text-gray-800 md:font-bold md:text-5xl md:pt-5' >
                Sinta-se <a className='text-orange-600'>Livre </a>para <a className='text-orange-600'>Entrar em Contato </a>Conosco
              </h1>

            </div>
          </div>

          <div className='px-6 pt-6 pb-12 space-y-9 mx-auto md:flex md:flex-row md:space-y-0 md:space-x-9 md:max-w-5xl'>
            <div className=' md:w-1/3'>
              <a href="mailto:institutoaroconsultoria@gmail.com" >
                <ContactCard
                  titleOrange='E-mail'
                  titleGray='Deixe um e-mail'
                  icon={<MailIcon className='w-8 h-8  text-white ' />}
                  info='institutoaroconsultoria@gmail.com'
                />
              </a>
            </div>

            <div className=' md:w-1/3'>
              <a href="tel:12996867080">
                <ContactCard
                  titleOrange='Telefone'
                  titleGray='Faça uma ligação'
                  icon={<PhoneIcon className='w-8 h-8  text-white ' />}
                  info='(12) 99686-7080'
                />
              </a>
            </div>

            <div className=' md:w-1/3'>
              <a href={'https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!'} target='_blank'>
                <ContactCard
                  titleOrange='Whatsapp'
                  titleGray='Mande mensagem'
                  icon={<FaWhatsapp className='w-8 h-8  text-white ' />}
                  info='(12) 99686-7080'
                />
              </a>
            </div>

          </div>
          <div className='flex pb-10'>
            <div className='flex mx-auto space-x-4 '>
              <a href="https://www.instagram.com/institutoaroconsultoria/" target='_blank'>
                <FaInstagram className='w-8 h-8  text-orange-600 ' />
              </a>

              <a href="https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!" target='_blank'>
                <FaWhatsapp className='w-8 h-8  text-orange-600 ' />
              </a>

              <a href="https://www.facebook.com/people/Aro-Institucional/100085932366282/" target='_blank'>
                <FaFacebook className='w-8 h-8  text-orange-600' />
              </a>
            </div>
          </div>
        </div>
        <div className='bg-orange-500'>
          <div className='mx-auto px-6 py-4 flex items-center space-x-9 max-w-5xl'>
            <div className='mr-auto'>
              <img
                src="/logo-white.svg"
                alt="LogoAro"
                width={145}
                height={42}
              />
            </div>
            <div className=' text-sm text-center text-white'>
              Copyright © - Instituto Aro - 2022
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}