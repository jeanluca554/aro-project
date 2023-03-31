import React from 'react';

type ContactCardProps = {
    titleOrange: string;
    titleGray: string;
    info: string;
    icon: any;
}


const ContactCard = (props: ContactCardProps) => {
    return (
        <div className='bg-white rounded-3xl shadow-3xl '>
            <div className='p-4 flex items-center'>
                <div>
                    <div className='w-14 h-14 rounded-full bg-orange-600 flex flex-col justify-center items-center'>
                        {props.icon}
                    </div>
                </div>
                <div className='pl-4 space-y-3'>
                    <div >
                        <strong className='text-orange-600 font-medium text-lg'>{props.titleOrange}</strong>
                    </div>
                    <div>
                        <strong className='text-gray-800 font-semibold text-lg'>{props.titleGray}</strong>
                    </div>
                </div>
            </div>
            <div className='px-4 py-4'>
                <span className='font-normal text-sm text-gray-500'>
                    {props.info}
                </span>
            </div>
        </div>
    )
}

export default ContactCard;