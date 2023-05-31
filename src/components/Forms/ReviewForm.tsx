import React from 'react';
import { LoadingAnimation, PaymentResponse, Ticket } from 'components';


export function ReviewForm({ data }) {
  { console.log(data) }
  return (
    //< div className='h-[800px]' >
    < div className='' >
      {
        data.message === ""
          ? <LoadingAnimation />
          : data.paymentMethod === "2" ? <Ticket />
            : <div className='flex flex-col'>
              <h2 className='font-medium text-gray-600 pt-2'>Link do pix para pagamento:</h2>
              <a className='mt-8' href={data.pixQrCode} target='_blank'>{data.pixQrCode}</a>

            </div>
        // : <PaymentResponse
        //   message={data.message}
        //   description={data.description}
        // />

      }
    </div >
  )
}
