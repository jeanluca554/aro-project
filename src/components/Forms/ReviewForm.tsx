import React from 'react';
import { LoadingAnimation, PaymentResponse, Ticket } from 'components';


export function ReviewForm({ data }) {
  return (
    <div className='h-[800px]'>
      {data.message === ""
        ? <LoadingAnimation />
        : <Ticket
        />
        // : <PaymentResponse
        //   message={data.message}
        //   description={data.description}
        // />

      }
    </div>
  )
}
