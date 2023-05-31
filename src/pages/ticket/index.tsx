import { Ticket } from "components";
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';

export default function PrintTicket() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'ingresso-Instituto-Aro',
    //onAfterPrint: () => alert('Pdf gerado com sucesso'),
    pageStyle: 'body {padding-top: 1.5rem}'

  })

  return (
    <div className="pt-8 pl-16">
      <div ref={componentRef} >
        <Ticket />
      </div>
      <div className="pt-6">
        <button
          className='py-4 px-2 text-sm text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all '
          onClick={handlePrint}
        >
          <span className='font-semibold'>Baixar PDF</span>
        </button>
      </div>
    </div>
  )
}

PrintTicket.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}