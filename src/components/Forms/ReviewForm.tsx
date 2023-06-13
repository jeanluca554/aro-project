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
          : data.paymentMethod === "2"
            ?
            <>
              <h1 className='font-medium text-xl text-orange-600 pt-2 text-center'>{data.message}:</h1>
              <h2 className='font-medium text-gray-600 pt-6'>{data.description}</h2>

              {data.statusTransaction === 3
                ?
                <p className='font-medium text-gray-600 pt-4'>Clique  <a href={`/ticket/${data.idTransaction}`} target='_blank' className='underline cursor-pointer font-bold'>AQUI</a>  para visualizar o seu ingresso.</p>

                :
                <p className='font-medium text-gray-600 pt-4'>Confira se as informações de pagamento estão corretas e  <a href={`/checkout/`} className='underline cursor-pointer font-bold'>tente novamente</a></p>
              }

            </>
            :
            data.statusTransaction === 1
              ?
              <div className='flex flex-col'>
                <h2 className='font-medium text-gray-600 pt-2'>Link do pix para pagamento:</h2>
                <a className='mt-8 underline cursor-pointer font-bold text-gray-600' href={data.pixQrCode} target='_blank'>{data.pixQrCode}</a>
                <img src={data.pixQrCode} alt="pix QR Code" />
              </div>
              :
              <div className='flex flex-col'>
                <h2 className='font-bold text-gray-600 pt-2'>Erro ao gerar o QR Code do pix</h2>
                <p className='font-medium text-gray-600 pt-4'>Parece que estamos com problemas para gerar o QR Code. Tente novamente mais tarde.</p>
              </div>
      }
    </div >
  )
}
