import React from 'react';

type AreaCardProps = {
    nameArea: string;
    description: string;
    icon: any;
}


const AreaCard = (props: AreaCardProps) => {
    return (
        <div className='bg-white rounded-t-3xl shadow-3xl border-b-4 border-orange-400 md:h-64 lg:h-60'>
            <div className='p-4 flex items-center'>
                <div>
                    <div className='w-14 h-14 rounded-full bg-orange-600 flex flex-col justify-center items-center'>
                        {props.icon}
                    </div>
                </div>
                <div className='pl-4'>
                    <strong className='text-gray-800 font-medium text-lg'>{props.nameArea}</strong>
                    <hr className='border-orange-600 w-10' />
                </div>
            </div>
            <div className='px-4 pb-4'>
                <span className='font-normal text-sm text-gray-500'>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

export default AreaCard;