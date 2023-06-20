import { Fragment, useEffect, useState } from 'react'

import { TicketsService } from 'services';
import InputMask from 'react-input-mask';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isCPF } from 'brazilian-values';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: orange[800],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type TicketsType = {
  product: string,
  userName: string,
  userCategory: string,
  paymentMethod: string,
  message: string,
  status: string,
  description: string,
}

export default function MyTickets() {
  const [identity, setIdentity] = useState('');
  const [email, setEmail] = useState('');

  const [tickets, setTickets] = useState([]);

  const createCheckoutSchema = z.object({
    identity: z.string().refine((identity) => isCPF(identity), { message: "Não é um CPF válido" }),
    email: z.string().email({ message: "Informe um e-mail válido" }),
  })

  type CreateCheckoutData = z.infer<typeof createCheckoutSchema>

  const createCheckoutForm = useForm<CreateCheckoutData>({
    resolver: zodResolver(createCheckoutSchema),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCheckoutData>({
    resolver: zodResolver(createCheckoutSchema),
  });

  const onSubmit: SubmitHandler<CreateCheckoutData> = (data) => getTicket(data.identity, data.email);

  function getTicket(identity: string, email: string) {
    TicketsService.tickets(identity, email).then((response) => {
      console.log(response.data)
      if (response.status === 200) {
        setTickets(response.data)
        //   if (response.data.transactionResult.errorCode) {
        //     setDataForm((prev) => {
        //       return {
        //         ...prev,
        //         description: response.data.transactionResult.errorMessage,
        //         message: "Algo deu errado"
        //       }
        //     })
        //   }
        //   else {
        //     setDataForm((prev) => {
        //       return {
        //         ...prev,
        //         description: response.data.transactionResult.description,
        //         message: response.data.transactionResult.message,
        //         pixKey: response.data.transactionResult.pixKey,
        //         idTransaction: response.data.transactionResult.idTransaction,
        //         statusTransaction: response.data.transactionResult.status,
        //       }
        //     })

        //     console.log(response.data.transactionResult.message)
        //     console.log(response.data.transactionResult.description)
        //     console.log(response);
        //     outputData()
        //   }
        // }
        // else {
        //   console.log(response)
      }
    })
      .catch(error => {
        if (error.code === "ERR_BAD_REQUEST") {
          console.log(JSON.stringify(error.response.data, null, 2));
        }
        else {
          console.log(error);
        }
      });
  }

  return (
    <div className='flex flex-col w-full h-screen bg-gray-100'>
      <FormProvider {...createCheckoutForm}>
        <form
          className='mt-8 mx-6 max-w-md'
          onSubmit={handleSubmit(onSubmit)}
        >

          <h2 className='font-medium text-gray-600 pb-6 text-lg'>Preencha os campos para visualizar os ingressos:</h2>

          <label htmlFor="" className='text-gray-700 ml-2'>Insira o CPF informado no momento da compra</label>
          <InputMask
            placeholder='000.000.000-00'
            id='identity'
            name='identity'
            {...register('identity')}
            value={identity}
            mask={'999.999.999-99'}
            maskChar=" "
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setIdentity(e.target.value)
            }
            className={`py-3 px-4 border-2 border-gray-200 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500  focus:outline-none focus:bg-white focus:border-orange-500 block w-full disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 focus:invalid:border-red-500 ${errors.identity ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-orange-500 mb-4'}`}
          />
          {errors.identity && (
            <p className="text-xs italic text-red-500 mb-4 mt-1">
              {errors.identity?.message}
            </p>
          )}

          <label htmlFor="" className='text-gray-700 ml-2 '>Insira o email informado no momento da compra</label>
          <input
            placeholder='E-mail'
            id='email'
            name='email'
            {...register('email')}
            value={email}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
            }
            className={`py-3 px-4 border-2 outline-gray-400 rounded bg-gray-200 text-gray-700 placeholder-gray-500  focus:outline-none focus:bg-white block w-full disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 focus:invalid:border-red-500 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'}`}
          />
          {errors.email && (
            <p className="text-xs italic text-red-500 mt-1">
              {errors.email?.message}
            </p>
          )}

          <button
            className='py-4 mt-8 font-bold w-full text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all mb-6 disabled:cursor-not-allowed'
            type='submit'
          >
            BUSCAR
          </button>

        </form>
      </FormProvider>

      <div className='flex items-center justify-center mx-6 pt-4 pb-6'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="center" className='font-bold'>Curso</StyledTableCell>
                <StyledTableCell align="center" className='font-bold'>Pagador</StyledTableCell>
                <StyledTableCell align="center" className='font-bold'>Categoria</StyledTableCell>
                <StyledTableCell align="center" className='font-bold'>Status</StyledTableCell>
                <StyledTableCell align="center" className='font-bold'>Descrição do pagamento</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {
                tickets.map((item) => (
                  item.map((ticketItem) => (
                    <StyledTableRow key={ticketItem[ticketItem]}>
                      <StyledTableCell align="center">{ticketItem.product}</StyledTableCell>
                      <StyledTableCell align="center">{ticketItem.userName}</StyledTableCell>
                      <StyledTableCell align="center">
                        {ticketItem.userCategory === "lawyer" && "Advogado"}
                        {ticketItem.userCategory === "student" && "Estudante"}
                      </StyledTableCell>
                      <StyledTableCell align="center">{ticketItem.message}</StyledTableCell>
                      <StyledTableCell align="center">{ticketItem.description}</StyledTableCell>
                    </StyledTableRow>
                  ))
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>

  )
}

MyTickets.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}