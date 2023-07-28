'use client'

import { useRef, useState } from 'react'
import { Ticket } from '@/components'
import { useReactToPrint } from 'react-to-print'
import { TicketService } from '@/services/TicketService'
import Alert from '@mui/material/Alert'

export default function PrintTicket({ params }: { params: { id: string } }) {
  const [idTicket, setIdTicket] = useState('')
  // const router = useRouter()
  const idQuery = params.id
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'ingresso-Instituto-Aro',
    // onAfterPrint: () => alert('Pdf gerado com sucesso'),
    pageStyle: 'body {padding-top: 1.5rem}',
  })

  TicketService.ticket(idQuery)
    .then((response) => {
      console.log(response.data.ticket.ticket.ticketId)
      setIdTicket(response.data.ticket.ticket.ticketId)
    })
    .catch((error) => {
      console.log(error)
      setIdTicket('')
    })

  return idTicket !== '' ? (
    <div className="pl-16 pt-8">
      <div ref={componentRef} className="">
        <Ticket id={idTicket} />
      </div>
      <div className="overflow-x-auto pt-6">
        <button
          className="rounded-md bg-orange-600 px-2 py-4 text-sm text-white transition-all hover:bg-orange-500 "
          onClick={handlePrint}
        >
          <span className="font-semibold">Baixar PDF</span>
        </button>
      </div>
    </div>
  ) : (
    <Alert variant="filled" severity="error" className="m-6 max-w-md">
      Algo deu errado com a geração do ingresso. Verifique se as informações
      estão corretas e tente mais tarde.
    </Alert>
  )
}
