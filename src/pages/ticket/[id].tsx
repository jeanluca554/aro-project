import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import { Ticket } from "components";
import { useReactToPrint } from 'react-to-print';
import { TicketService } from 'services/TicketService';
import Alert from '@mui/material/Alert';

export default function PrintTicket() {
  const [idTicket, setIdTicket] = useState('');
  const router = useRouter();
  const idQuery = router.query.id;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'ingresso-Instituto-Aro',
    //onAfterPrint: () => alert('Pdf gerado com sucesso'),
    pageStyle: 'body {padding-top: 1.5rem}'

  })

  useEffect(() => {
    idTicket !== undefined &&
      console.log(idTicket)
    TicketService.ticket(idQuery)
      .then((response) => {
        console.log(response.data.ticket.ticket.ticketId)
        setIdTicket(response.data.ticket.ticket.ticketId);
      })
      .catch(error => {
        //console.log(error)
        setIdTicket('');
      });
  }, [idQuery])

  return (
    idTicket !== '' ?
      <div className="pt-8 pl-16">
        <div ref={componentRef} className="">
          <Ticket
            id={idTicket}
          />
        </div>
        <div className="pt-6 overflow-x-auto">
          <button
            className='py-4 px-2 text-sm text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all '
            onClick={handlePrint}
          >
            <span className='font-semibold'>Baixar PDF</span>
          </button>
        </div>
      </div>
      :
      <Alert variant="filled" severity="error" className='max-w-md m-6'>
        Algo deu errado com a geração do ingresso. Verifique se as informações estão corretas e tente mais tarde.
      </Alert>
  )
}

PrintTicket.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}