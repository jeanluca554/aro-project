import React from 'react';
import Card from '../components/card';


const Consultants = () => {
    return (
        <div className='bg-white'>
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
        </div>
    )
}

export default Consultants;