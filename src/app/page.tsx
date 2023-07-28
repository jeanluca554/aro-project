'use client'

import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'

import { Disclosure, Transition } from '@headlessui/react'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import AreaCard from '../components/AreaCard'
import ContactCard from '../components/ContactCard'
import NavItem from '../components/NavItem'
import MenuItemComponent from '../components/MenuItem'
// import Consultants from '../components/Consultants'

import { Fade } from 'react-awesome-reveal'

import {
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
} from '@heroicons/react/outline'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home')
  const [scrollPosition, setScrollPosition] = useState(0)

  // Get the scroll position
  useEffect(() => {
    function updatePosition() {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  /* Scroll Sections active link */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact']
      let currentSection = 'home'

      sections.forEach((section) => {
        const sectionEl = document.querySelector<HTMLElement>(`#${section}`)

        if (
          sectionEl !== null &&
          sectionEl.offsetTop <= window.pageYOffset + sectionEl.offsetHeight / 2
        ) {
          currentSection = section
        }
      })

      setCurrentSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Instituto Aro</title>
        <meta name="description" content="Instituto Aro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Disclosure as="nav" className="">
        {({ open }) => (
          <div
            className={`fixed left-0 top-0 z-10 w-full bg-white ${
              scrollPosition >= 50
                ? 'border-b-2 border-orange-200 border-opacity-50'
                : ''
            } `}
          >
            <div className=" mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
              <div className=" flex items-center justify-between py-5">
                <div className="flex-shrink-0 ">
                  <img src="/logo.svg" alt="LogoAro" />
                </div>
                <div className="flex items-center ">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4 ">
                      <NavItem
                        currentSection={currentSection}
                        section="home"
                        text="Início"
                      />

                      <NavItem
                        currentSection={currentSection}
                        section="about"
                        text="Sobre Nós"
                      />

                      <NavItem
                        currentSection={currentSection}
                        section="contact"
                        text="Contato"
                      />

                      <a
                        href={`/my-tickets`}
                        className=" font-poppins rounded-md px-3 py-2 text-xl font-medium text-gray-800 transition duration-100 hover:text-gray-500"
                      >
                        Meus ingressos
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center md:ml-6">
                  <button className=" p-1 text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                </div> */}

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}

                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-orange-600 p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
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
                <div className="flex flex-col space-y-1 px-2 pb-3 pt-2 transition duration-1000 sm:px-3">
                  <MenuItemComponent
                    currentSection={currentSection}
                    section="home"
                    text="Início"
                  />
                  <MenuItemComponent
                    currentSection={currentSection}
                    section="about"
                    text="Sobre Nós"
                  />

                  <MenuItemComponent
                    currentSection={currentSection}
                    section="contact"
                    text="Contato"
                  />

                  <a
                    href={`/my-tickets`}
                    className="block rounded-md  px-3 py-2 text-left text-base font-normal text-gray-500 transition duration-700 hover:bg-gray-700 hover:text-white"
                  >
                    Meus ingressos
                  </a>
                </div>
              </Transition>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <main>
        <div>
          <div
            className="home mx-auto mb-12 max-w-md px-6 py-6 sm:flex sm:max-w-none sm:flex-row sm:gap-8 sm:pt-28 lg:max-w-5xl lg:px-8"
            id="home"
          >
            <div className="mt-20 flex flex-col items-center sm:w-2/3 sm:items-start">
              <Fade direction="down" duration={2500} delay={400} triggerOnce>
                <h1 className="text-center text-5xl font-semibold text-gray-800 sm:text-left sm:font-bold">
                  <a className="text-orange-600">Curso</a> Tribunal do Júri:
                  Teoria e Prática
                </h1>
              </Fade>
              <Fade direction="down" duration={1000} delay={400} triggerOnce>
                <p className="mt-4 text-center text-sm font-normal text-gray-500 sm:mt-10 sm:text-left sm:text-base sm:font-normal">
                  Participe do nosso Curso que é dividido em 3 módulos com
                  diversos conteúdos que vão da prática à teoria.
                </p>
              </Fade>
              <a href={`/checkout`} target="_blank" rel="noreferrer">
                <Fade direction="down" duration={1000} delay={400} triggerOnce>
                  <button className="mx-auto mb-14 mr-auto mt-10 rounded bg-orange-600 px-6 py-3 text-xl font-medium text-white transition duration-500 hover:bg-orange-400 focus:outline-none sm:ml-0">
                    Inscreva-se
                  </button>
                </Fade>
              </a>
            </div>
            <div className="sm:w-2/5">
              <Fade direction="down" duration={1500} delay={600} triggerOnce>
                <div className="border-2 border-orange-600 border-opacity-50 shadow-2xl ">
                  <div className="m-5">
                    <button className=" disabled mb-2 cursor-auto rounded border-2 border-orange-600 px-4 py-2 text-xs font-medium text-orange-600 focus:outline-none">
                      Vagas Limitadas
                    </button>
                    <div className="text-sm ">
                      <span className="my-2 flex items-center">
                        <CalendarIcon
                          className="mr-2 h-6 w-6 text-orange-600"
                          aria-hidden="true"
                        />
                        22 de junho (sábado)
                      </span>
                      <span className="my-2 flex items-center">
                        <MapIcon
                          className="mr-2 h-6 w-6 text-orange-600"
                          aria-hidden="true"
                        />
                        Em Volta Redonda - RJ
                      </span>

                      <span className="my-2 flex items-center">
                        <CheckCircleIcon
                          className="mr-2 h-6 w-6 text-orange-600"
                          aria-hidden="true"
                        />
                        <a>
                          Curso{' '}
                          <strong className="text-orange-600">
                            presencial
                          </strong>
                        </a>
                      </span>
                      <a href={'/checkout'} target="_blank" rel="noreferrer">
                        <button className="mx-auto my-8 flex items-center rounded bg-orange-600 px-4 py-2 text-xs font-medium text-white transition duration-500 hover:bg-orange-400 focus:outline-none">
                          <TicketIcon
                            className="mr-2 h-6 w-6 "
                            aria-hidden="true"
                          />
                          Quero me inscrever
                        </button>
                      </a>
                      <span className="my-2 flex items-center text-base font-medium">
                        <CurrencyDollarIcon
                          className="mr-2 h-6 w-6 text-orange-600"
                          aria-hidden="true"
                        />
                        Investimento:
                      </span>

                      <div className="text-xs">
                        <p>
                          {' '}
                          <strong> R$400,00</strong> em até 3x para{' '}
                          <strong> ADVOGADOS </strong>
                        </p>
                        <p>
                          {' '}
                          <strong> R$300,00</strong> em até 3x para{' '}
                          <strong> ESTUDANTES DE DIREITO </strong>
                        </p>
                        <p>
                          {' '}
                          <strong> R$349,90</strong> em até 3x para Advogados{' '}
                          <strong>
                            Inscritos na Subseção de Volta Redonda e Barra Mansa
                          </strong>
                        </p>
                      </div>

                      <div className="my-6 mr-auto">
                        <span className="my-2 flex items-center text-base font-medium">
                          <CreditCardIcon
                            className="mr-2 h-6 w-6 text-orange-600"
                            aria-hidden="true"
                          />
                          Formas de Pagamento:
                        </span>
                        <div className="text-xs ">
                          <p>
                            <strong>Cartão de Crédito ou Pix.</strong>
                          </p>
                        </div>
                      </div>

                      <span className="my-2 flex items-center text-base font-medium">
                        <LocationMarkerIcon
                          className="mr-2 h-6 w-6 text-orange-600"
                          aria-hidden="true"
                        />
                        Local do curso:
                      </span>
                      <div className="text-xs">
                        <p>
                          Rua <strong>Simão da Cunha Gago</strong>,{' '}
                          <strong>19</strong> - <strong>Aterrado</strong>{' '}
                        </p>
                        <p>
                          CEP <strong>27213-170</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="about bg-orange-50" id="about">
          <div className="mx-auto max-w-md px-6 py-6 pt-12 md:mt-0 md:flex md:max-w-5xl md:flex-row lg:px-8">
            <div className="pb-12 md:w-3/5 md:pt-12">
              <Fade direction="down" duration={1000} delay={400} triggerOnce>
                <img src="success_factors.svg" alt="" />
              </Fade>
            </div>
            <div className="flex flex-col items-center md:mt-0 md:w-2/3 md:items-start md:pl-5">
              <Fade direction="down" duration={2500} delay={800} triggerOnce>
                <p className=" text-base font-normal text-orange-500 md:mr-auto">
                  Sobre nós{' '}
                </p>
              </Fade>
              <Fade direction="down" duration={1500} delay={400} triggerOnce>
                <h1 className="pt-5 text-center text-4xl font-semibold text-gray-800 md:pt-4 md:text-left md:text-5xl md:font-bold">
                  Consultoria e Formação de{' '}
                  <a className="text-orange-600">Profissionais</a> nas
                  Principais<a className="text-orange-600"> Áreas</a>
                </h1>
              </Fade>
              <Fade direction="down" duration={1500} delay={400} triggerOnce>
                <p className="mt-4 text-center text-sm font-normal text-gray-500 md:mt-10 md:text-left md:text-base md:font-normal">
                  Prestamos serviços nos ramos da formação de profissionais e
                  consultoria nas áreas do Direito Educacional, Direito
                  Administrativo, bem como nas Áreas Esportivas e Culturais
                </p>
              </Fade>
              <a
                href={'https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!'}
                target="_blank"
                rel="noreferrer"
              >
                <Fade direction="down" duration={1000} delay={400} triggerOnce>
                  <button className="mx-auto mb-14 mr-auto mt-10 rounded bg-orange-600 px-6 py-3 text-lg font-medium text-white transition duration-500 hover:bg-orange-400 focus:outline-none sm:ml-0 md:mb-40">
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

        <div className=" mb-12 space-y-9 px-6 pt-6 md:mx-auto md:-mt-24 md:flex md:flex-row md:space-x-9 md:space-y-0  lg:max-w-5xl lg:px-8 ">
          <div className=" md:w-1/2">
            <Fade direction="down" duration={1000} delay={400} triggerOnce>
              <AreaCard
                nameArea="Âmbito Jurídico"
                icon={<ScaleIcon className="h-8 w-8  text-white " />}
                description="Levamos informação e orientação, além de disseminar os direitos fundamentais previstos na Constituição Federal de 1988 aos profissionais atuantes dos setores públicos e privados, bem como assegurar que sua atuação seja desenvolvida com êxito."
              />
            </Fade>
          </div>

          <div className=" md:w-1/2">
            <Fade direction="down" duration={1000} delay={600} triggerOnce>
              <AreaCard
                nameArea="Âmbito Educacional"
                icon={<AcademicCapIcon className="h-8 w-8  text-white " />}
                description="Atuamos diretamente no cotidiano de trabalho dos profissionais da Educação, o que permite conhecer essa realidade e planejar o trabalho de forma conectada às necessidades reais das escolas e demais instituições."
              />
            </Fade>
          </div>
        </div>

        {/* <Consultants /> */}

        <div className="contact bg-white" id="contact">
          <div className="mx-auto max-w-md px-6 py-6 pt-12 md:max-w-5xl">
            <div className="flex flex-col items-center md:py-10">
              <Fade direction="down" duration={2500} delay={400} triggerOnce>
                <hr className="w-10 border-orange-400" />
              </Fade>

              <Fade direction="down" duration={2500} delay={600} triggerOnce>
                <p className=" text-base font-normal text-orange-500 ">
                  Fale com a gente
                </p>
              </Fade>

              <Fade direction="down" duration={2500} delay={800} triggerOnce>
                <hr className="w-10 border-orange-400" />
              </Fade>
            </div>

            <Fade direction="down" duration={1500} delay={400} triggerOnce>
              <h1 className="pt-5 text-center text-4xl font-semibold text-gray-800 md:pt-5 md:text-5xl md:font-bold">
                Sinta-se <a className="text-orange-600">Livre </a>para{' '}
                <a className="text-orange-600">Entrar em Contato </a>Conosco
              </h1>
            </Fade>
          </div>

          <div className="mx-auto space-y-9 px-6 pb-12 pt-6 md:flex md:max-w-5xl md:flex-row md:space-x-9 md:space-y-0 ">
            <div className=" md:w-1/3">
              <Fade direction="down" duration={1000} delay={400} triggerOnce>
                <a href="mailto:institutoaroconsultoria@gmail.com">
                  <ContactCard
                    titleOrange="E-mail"
                    titleGray="Deixe um e-mail"
                    icon={<MailIcon className="h-8 w-8  text-white " />}
                    info="institutoaroconsultoria@gmail.com"
                  />
                </a>
              </Fade>
            </div>

            <div className=" md:w-1/3">
              <Fade direction="down" duration={1000} delay={400} triggerOnce>
                <a href="tel:12996867080">
                  <ContactCard
                    titleOrange="Telefone"
                    titleGray="Faça uma ligação"
                    icon={<PhoneIcon className="h-8 w-8  text-white " />}
                    info="(12) 99686-7080"
                  />
                </a>
              </Fade>
            </div>

            <div className=" md:w-1/3">
              <Fade direction="down" duration={1000} delay={400} triggerOnce>
                <a
                  href={
                    'https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!'
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactCard
                    titleOrange="Whatsapp"
                    titleGray="Mande mensagem"
                    icon={<FaWhatsapp className="h-8 w-8  text-white " />}
                    info="(12) 99686-7080"
                  />
                </a>
              </Fade>
            </div>
          </div>
          <div className="flex pb-10">
            <div className="mx-auto flex space-x-4 ">
              <Fade direction="down" duration={1500} delay={400} triggerOnce>
                <a
                  href="https://www.instagram.com/institutoaroconsultoria/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="h-8 w-8  text-orange-600 " />
                </a>
              </Fade>

              <Fade direction="down" duration={1500} delay={600} triggerOnce>
                <a
                  href="https://wa.me/5512996867080?text=Olá%20Instituto%20Aro!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="h-8 w-8  text-orange-600 " />
                </a>
              </Fade>

              <Fade direction="down" duration={1500} delay={800} triggerOnce>
                <a
                  href="https://www.facebook.com/people/Aro-Institucional/100085932366282/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="h-8 w-8  text-orange-600" />
                </a>
              </Fade>
            </div>
          </div>
        </div>

        <div className="bg-orange-500">
          <div className="mx-auto flex max-w-5xl items-center space-x-9 px-6 py-4">
            <div className="mr-auto">
              <img
                src="/logo-white.svg"
                alt="LogoAro"
                width={145}
                height={42}
              />
            </div>
            <div className=" text-center text-sm text-white">
              Copyright © - Instituto Aro - 2022
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

Home.getLayout = function PageLayout(page) {
  return <>{page}</>
}
