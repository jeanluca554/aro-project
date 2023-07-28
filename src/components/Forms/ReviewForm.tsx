import React, { useState } from 'react'
import { LoadingAnimation, PaymentResponse, Ticket } from '@/components'
import QRCode from 'react-qr-code'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export function ReviewForm({ data }) {
  const [buttonText, setButtonText] = useState('Copiar código PIX')
  // {
  //   console.log('o data no review é: ', data)
  // }

  return (
    // < div className='h-[800px]' >
    <div className="">
      {data.message === '' ? (
        <LoadingAnimation />
      ) : data.paymentMethod === '2' ? (
        <>
          <h1 className="pt-2 text-center text-xl font-medium text-orange-600">
            {data.message}:
          </h1>
          <h2 className="pt-6 font-medium text-gray-600">{data.description}</h2>

          {data.statusTransaction === 3 ? (
            <p className="pt-4 font-medium text-gray-600">
              Clique{' '}
              <a
                href={`/ticket/${data.idTransaction}`}
                target="_blank"
                className="cursor-pointer font-bold underline"
              >
                AQUI
              </a>{' '}
              para visualizar o seu ingresso.
            </p>
          ) : (
            <p className="pt-4 font-medium text-gray-600">
              Confira se as informações de pagamento estão corretas e{' '}
              <a
                href={`/checkout/`}
                className="cursor-pointer font-bold underline"
              >
                tente novamente
              </a>
            </p>
          )}
        </>
      ) : data.statusTransaction === 1 ? (
        <div className="flex flex-col">
          <span className="py-2 font-medium text-gray-600">
            Utilize o QR Code abaixo para realizar o pagamento ou clique no
            botão para copiar o código PIX.
          </span>
          <QRCode
            value={data.pixKey}
            size={180}
            className="mx-auto mt-3"
            bgColor="#fff"
            fgColor="#000"
            // fgColor='#4b5563'
          />

          <CopyToClipboard
            text={data.pixKey}
            onCopy={() => setButtonText('Código copiado!')}
          >
            <button
              className="mb-6 mt-8 w-full rounded-md bg-orange-600 px-2 py-4 text-sm text-white transition-all hover:bg-orange-500"
              onClick={(event) => event.preventDefault()}
            >
              <span className="font-semibold">{buttonText}</span>
            </button>
          </CopyToClipboard>
          <span className="rounded-md border border-orange-400 p-4 py-2 text-gray-600">
            {/* eslint-disable react/no-unescaped-entities */}
            Você pode conferir seus ingressos disponíveis para download na
            página principal do site no menu "Meus ingressos" ou apenas{' '}
            <a
              href={`/my-tickets/`}
              className="cursor-pointer font-bold underline"
            >
              clicando aqui.
            </a>
          </span>
        </div>
      ) : (
        <div className="flex flex-col">
          <h2 className="pt-2 font-bold text-gray-600">
            Erro ao gerar o QR Code do pix
          </h2>
          <p className="pt-4 font-medium text-gray-600">
            Parece que estamos com problemas para gerar o QR Code. Tente
            novamente mais tarde.
          </p>
        </div>
      )}
    </div>
  )
}
