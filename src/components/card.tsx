import React from 'react';

type CardProps = {
    nameConsultant: string;
    description: string;
    image: string;
}


const Card = (props: CardProps) => {
    return (
        <div className='bg-white rounded-3xl shadow-3xl py-4 md:w-1/3'>
            <div className='p-4 flex flex-col items-center'>
                <div className='w-40 h-40'>
                    <img src={props.image} alt="" className='rounded-full border-4 border-orange-400' />
                </div>
                <div className='pt-6 text-center '>
                    <hr className='border-orange-600 w-10 mx-auto' />
                    <strong className='text-gray-800 font-medium text-lg'>{props.nameConsultant}</strong>
                </div>
            </div>
            <div className='px-4 pb-4 text-center'>
                <span className='font-normal text-sm text-gray-500'>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

export default Card;