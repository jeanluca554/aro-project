import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import Image from 'next/image';
import Link from 'next/link';
import AreaCard from '../components/areaCard';
import ContactCard from '../components/contactCard';
import NavItem from '../components/NavItem'
import MenuItem from '../components/MenuItem';
import Consultants from '../components/Consultants';

import { Fade } from "react-awesome-reveal";


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

} from '@heroicons/react/outline';



export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [scrollPosition, setScrollPosition] = useState(0);

  {/*Get the scroll position*/ }
  useEffect(() => {
    function updatePosition() {
      setScrollPosition(window.pageYOffset);

    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);

  }, []);

  {/*Scroll Sections active link*/ }
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      let currentSection = 'home';


      sections.forEach(section => {
        const sectionEl = document.querySelector<HTMLElement>(`#${section}`);

        if (
          sectionEl !== null && sectionEl.offsetTop <= window.pageYOffset + (sectionEl.offsetHeight / 2)
        ) {
          currentSection = section;
        }
      });

      setCurrentSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <Head>
        <title>Instituto Aro</title>
        <meta name="description" content="Instituto Aro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Disclosure as="nav" className="">
        {({ open }) => (
          <div className={`fixed w-full top-0 left-0 bg-white z-10 ${scrollPosition >= 50 ? 'border-b-2 border-orange-200 border-opacity-50' : ''} `}>
            <div className=" max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="flex items-center justify-between py-5">
                <div className="flex-shrink-0 ">
                  <img
                    src="/logo.svg"
                    alt="LogoAro"
                  />
                </div>
                <div className="flex items-center ">

                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4 ">
                      <NavItem
                        currentSection={currentSection}
                        section="home"
                        text='Início'
                      />

                      <NavItem
                        currentSection={currentSection}
                        section="about"
                        text='Sobre Nós'
                      />

                      <NavItem
                        currentSection={currentSection}
                        section="contact"
                        text='Contato'
                      />

                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center md:ml-6">
                  <button className=" p-1 text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                </div> */}

                <div className="-mr-2 flex md:hidden" >
                  {/* Mobile menu button */}

                  <Disclosure.Button className="bg-orange-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
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
              <Transition
                show={open}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >

                <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 transition duration-1000">
                  <MenuItem
                    currentSection={currentSection}
                    section="home"
                    text='Início'
                  />
                  <MenuItem
                    currentSection={currentSection}
                    section="about"
                    text='Sobre Nós'
                  />

                  <MenuItem
                    currentSection={currentSection}
                    section="contact"
                    text='Contato'
                  />
                </div>
              </Transition>

            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <main>
        <div>
          <div className='home max-w-md sm:max-w-none sm:gap-8 lg:max-w-5xl mx-auto mb-12 px-6 py-6 lg:px-8 sm:flex sm:flex-row sm:pt-28' id='home'>
            <div className='flex flex-col items-center sm:w-2/3 mt-20 sm:items-start'>
              <Fade direction='down' duration={2500} delay={400} triggerOnce>
                <h1 className='font-semibold text-5xl text-center text-gray-800 sm:font-bold sm:text-left' >
                  <a className='text-orange-600'>Curso</a> Tribunal do Júri: Teoria e Prática
                </h1>
              </Fade>
              <Fade direction='down' duration={1000} delay={400} triggerOnce>
                <p className='mt-4 font-normal text-sm text-center sm:mt-10 text-gray-500 sm:font-normal sm:text-base sm:text-left'>
                  Participe do nosso Curso que é dividido em 3 módulos com diversos conteúdos que vão da prática à teoria.
                </p>
              </Fade>
              <a href="https://forms.gle/NFZxEV5hfrpMBLuz8" target="_blank" >
                <Fade direction='down' duration={1000} delay={400} triggerOnce>
                  <button className='mx-auto mr-auto mt-10 mb-14 bg-orange-600 text-white font-medium text-xl py-3 px-6 rounded focus:outline-none hover:bg-orange-400 transition duration-500 sm:ml-0'>
                    Inscreva-se
                  </button>
                </Fade>
              </a>
            </div>
            <div className='sm:w-2/5'>
              <Fade direction='down' duration={1500} delay={600} triggerOnce>
                <div className='border-2 border-orange-600 border-opacity-50 shadow-2xl '>
                  <div className='m-5'>
                    <button className=' border-orange-600 border-2 text-orange-600 font-medium text-xs py-2 px-4 rounded disabled cursor-auto mb-2 focus:outline-none'>
                      Vagas Limitadas
                    </button>
                    <div className='text-sm '>

                      <span className='flex items-center my-2'>
                        <CalendarIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />24 de junho (sábado)
                      </span>
                      <span className='flex items-center my-2'>
                        <MapIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />Em Volta Redonda - RJ
                      </span>

                      <span className='flex items-center my-2'>
                        <CheckCircleIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />
                        <a>Curso <strong className='text-orange-600'>presencial</strong></a>
                      </span>
                      <a href={'https://forms.gle/NFZxEV5hfrpMBLuz8'} target='_blank'>
                        <button className='flex items-center bg-orange-600 my-8 mx-auto font-medium text-xs py-2 px-4 rounded text-white focus:outline-none hover:bg-orange-400 transition duration-500'><TicketIcon className="h-6 w-6 mr-2 " aria-hidden="true" />Quero me inscrever</button>
                      </a>
                      <span className='flex items-center my-2 font-medium text-base'>
                        <CurrencyDollarIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />Investimento:
                      </span>

                      <div className='text-xs'>
                        <p> <strong> R$400,00</strong> em até 3x para <strong> ADVOGADOS </strong></p>
                        <p> <strong> R$300,00</strong> em até 3x para <strong> ESTUDANTES DE DIREITO </strong></p>
                      </div>

                      <div className='my-6 mr-auto'>
                        <span className='flex items-center my-2 font-medium text-base'>
                          <CreditCardIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />Formas de Pagamento:
                        </span>
                        <div className='text-xs '>
                          <p><strong>Cartão de Crédito ou Pix.</strong></p>
                        </div>
                      </div>

                      <span className='flex items-center my-2 font-medium text-base'>
                        <LocationMarkerIcon className="h-6 w-6 mr-2 text-orange-600" aria-hidden="true" />Local do curso:
                      </span>
                      <div className='text-xs'>
                        <p>Rua <strong>Simão da Cunha Gago</strong>, <strong>19</strong> - <strong>Aterrado</strong> </p>
                        <p>CEP <strong>27213-170</strong></p>
                      </div>

                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className='about bg-orange-50' id="about">
          <div className='max-w-md md:max-w-none md:max-w-5xl mx-auto pt-12 px-6 py-6 lg:px-8 md:flex md:flex-row md:mt-0'>
            <div className='md:w-3/5 pb-12 md:pt-12'>
              <Fade direction='down' duration={1000} delay={400} triggerOnce>
                <img src="success_factors.svg" alt="" />
              </Fade>
            </div>
            <div className='flex flex-col items-center md:w-2/3 md:mt-0 md:pl-5 md:items-start'>
              <Fade direction='down' duration={2500} delay={800} triggerOnce>
                <p className=' font-normal text-base text-orange-500 md:mr-auto'>Sobre nós </p>
              </Fade>
              <Fade direction='down' duration={1500} delay={400} triggerOnce>
                <h1 className='pt-5 font-semibold text-4xl text-center text-gray-800 md:font-bold md:text-5xl md:text-left md:pt-4' >
                  Consultoria e Formação de <a className='text-orange-600'>Profissionais</a> nas Principais<a className='text-orange-600'> Áreas</a>
                </h1>
              </Fade>
              <Fade direction='down' duration={1500} delay={400} triggerOnce>
                <p className='mt-4 font-normal text-sm text-center md:mt-10 text-gray-500 md:font-normal md:text-base md:text-left'>
                  Prestamos serviços nos ramos da formação de profissionais e consultoria nas áreas do Direito Educacional, Direito Administrativo, bem como nas Áreas Esportivas e Culturais
                </p>
              </Fade>
              <a href={'https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!'} target='_blank'>
                <Fade direction='down' duration={1000} delay={400} triggerOnce>
                  <button className='mx-auto mr-auto mt-10 mb-14 bg-orange-600 text-white font-medium text-lg py-3 px-6 rounded focus:outline-none hover:bg-orange-400 transition duration-500 sm:ml-0 md:mb-40'>
                    Entre em contato
                  </button>
                </Fade>
              </a>
            </div>
          </div>
        </div>

        {/* <div className=' px-6 pt-6 mb-12 lg:px-8 space-y-9 lg:max-w-5xl md:flex md:flex-row md:space-y-0 md:space-x-9  md:mx-auto md:-mt-24'>
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
        </div> */}

        <div className=' px-6 pt-6 mb-12 lg:px-8 space-y-9 lg:max-w-5xl md:flex md:flex-row md:space-y-0 md:space-x-9  md:mx-auto md:-mt-24 '>
          <div className=' md:w-1/2'>
            <Fade direction='down' duration={1000} delay={400} triggerOnce>
              <AreaCard
                nameArea='Âmbito Jurídico'
                icon={<ScaleIcon className='w-8 h-8  text-white ' />}
                description='Levamos informação e orientação, além de disseminar os direitos fundamentais previstos na Constituição Federal de 1988 aos profissionais atuantes dos setores públicos e privados, bem como assegurar que sua atuação seja desenvolvida com êxito.'
              />
            </Fade>
          </div>

          <div className=' md:w-1/2'>
            <Fade direction='down' duration={1000} delay={600} triggerOnce>
              <AreaCard
                nameArea='Âmbito Educacional'
                icon={<AcademicCapIcon className='w-8 h-8  text-white ' />}
                description='Atuamos diretamente no cotidiano de trabalho dos profissionais da Educação, o que permite conhecer essa realidade e planejar o trabalho de forma conectada às necessidades reais das escolas e demais instituições.'
              />
            </Fade>
          </div>
        </div>


        {/*<Consultants />*/}

        <div className='contact bg-white' id='contact'>
          <div className='max-w-md mx-auto pt-12 px-6 py-6 md:max-w-5xl'>
            <div className='flex flex-col items-center md:py-10'>
              <Fade direction='down' duration={2500} delay={400} triggerOnce>
                <hr className='border-orange-400 w-10' />
              </Fade>

              <Fade direction='down' duration={2500} delay={600} triggerOnce>
                <p className=' font-normal text-base text-orange-500 '>Fale com a gente</p>
              </Fade>

              <Fade direction='down' duration={2500} delay={800} triggerOnce>
                <hr className='border-orange-400 w-10' />
              </Fade>
            </div>

            <Fade direction='down' duration={1500} delay={400} triggerOnce>
              <h1 className='pt-5 font-semibold text-4xl text-center text-gray-800 md:font-bold md:text-5xl md:pt-5' >
                Sinta-se <a className='text-orange-600'>Livre </a>para <a className='text-orange-600'>Entrar em Contato </a>Conosco
              </h1>
            </Fade>

          </div>

          <div className='px-6 pt-6 pb-12 space-y-9 mx-auto md:flex md:flex-row md:space-y-0 md:space-x-9 md:max-w-5xl '>
            <div className=' md:w-1/3'>
              <Fade direction='down' duration={1000} delay={400} triggerOnce>
                <a href="mailto:institutoaroconsultoria@gmail.com" >
                  <ContactCard
                    titleOrange='E-mail'
                    titleGray='Deixe um e-mail'
                    icon={<MailIcon className='w-8 h-8  text-white ' />}
                    info='institutoaroconsultoria@gmail.com'
                  />
                </a>
              </Fade>
            </div>

            <div className=' md:w-1/3'>
              <Fade direction='down' duration={1000} delay={400} triggerOnce>
                <a href="tel:12996867080">
                  <ContactCard
                    titleOrange='Telefone'
                    titleGray='Faça uma ligação'
                    icon={<PhoneIcon className='w-8 h-8  text-white ' />}
                    info='(12) 99686-7080'
                  />
                </a>
              </Fade>
            </div>

            <div className=' md:w-1/3'>
              <Fade direction='down' duration={1000} delay={400} triggerOnce>
                <a href={'https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!'} target='_blank'>
                  <ContactCard
                    titleOrange='Whatsapp'
                    titleGray='Mande mensagem'
                    icon={<FaWhatsapp className='w-8 h-8  text-white ' />}
                    info='(12) 99686-7080'
                  />
                </a>
              </Fade>
            </div>

          </div>
          <div className='flex pb-10'>
            <div className='flex mx-auto space-x-4 '>
              <Fade direction='down' duration={1500} delay={400} triggerOnce>
                <a href="https://www.instagram.com/institutoaroconsultoria/" target='_blank'>
                  <FaInstagram className='w-8 h-8  text-orange-600 ' />
                </a>
              </Fade>

              <Fade direction='down' duration={1500} delay={600} triggerOnce>
                <a href="https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!" target='_blank'>
                  <FaWhatsapp className='w-8 h-8  text-orange-600 ' />
                </a>
              </Fade>

              <Fade direction='down' duration={1500} delay={800} triggerOnce>
                <a href="https://www.facebook.com/people/Aro-Institucional/100085932366282/" target='_blank'>
                  <FaFacebook className='w-8 h-8  text-orange-600' />
                </a>
              </Fade>
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