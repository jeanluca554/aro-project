import React, { useState } from 'react';
import { LoadingAnimation, PaymentResponse, Ticket } from 'components';
import QRCode from 'react-qr-code';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function ReviewForm({ data }) {
  const [buttonText, setButtonText] = useState('Copiar código PIX');
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
                <span className='font-medium text-gray-600 py-2'>Utilize o QR Code abaixo para realizar o pagamento ou clique no botão para copiar o código PIX.</span>
                <QRCode
                  value={data.pixKey}
                  size={180}
                  className='mx-auto mt-3'
                  bgColor='#fff'
                  fgColor='#000'
                // fgColor='#4b5563'
                />

                <CopyToClipboard
                  text={data.pixKey}
                  onCopy={() => setButtonText('Código copiado!')}
                >
                  <button
                    className='py-4 px-2 mt-8 w-full text-sm text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all mb-6'
                    onClick={(event) => event.preventDefault()}
                  >
                    <span className='font-semibold'>{buttonText}</span>
                  </button>

                </CopyToClipboard>
                <span className='text-gray-600 py-2 border border-orange-400 rounded-md p-4'>
                  Você pode conferir seus ingressos disponíveis para download na página principal do site no menu "Meus ingressos" ou apenas <a href={`/my-tickets/`} className='underline cursor-pointer font-bold'>clicando aqui.</a>
                </span>
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
