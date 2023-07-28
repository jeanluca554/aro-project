import { Fragment, useEffect, useState } from 'react'

import { TicketsService } from 'services';
import InputMask from 'react-input-mask';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isCPF } from 'brazilian-values';

import QRCode from 'react-qr-code';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Header from 'components/Header';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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

export default function MyTickets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pixKey, setPixKey] = useState('');
  const [buttonText, setButtonText] = useState('Copiar código PIX');

  function handleClickOpen(pixKey: string) {
    setPixKey(pixKey)
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const [errorMessage, setErrorMessage] = useState('');

  const [tickets, setTickets] = useState([]);

  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

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
    setIsBackdropOpen(true)
    TicketsService.tickets(identity, email).then((response) => {
      if (response.status === 200) {
        setTickets(response.data)
        setErrorMessage('')
      }
      setIsBackdropOpen(false)
    })
      .catch(error => {
        if (error.code === "ERR_BAD_REQUEST") {
          // console.log(JSON.stringify(error.response.data, null, 2));
          setErrorMessage(error.response.data.message);
        }
        else {
          console.log(error);
        }
        setIsBackdropOpen(false)
      });
  }

  return (
    <div className='flex flex-col w-full bg-gray-100'>
      <Header />
      <div className='md:max-w-5xl md:mx-auto px-8 md:px-0'>
        <FormProvider {...createCheckoutForm}>
          <form
            className='mt-8 max-w-md md:ml-16'
            onSubmit={handleSubmit(onSubmit)}
          >

            <h2 className='font-medium text-gray-600 pb-6 text-lg'>Preencha os campos para visualizar seus ingressos:</h2>

            <label htmlFor="" className='text-gray-700 ml-2'>Insira o CPF informado no momento da compra</label>
            <InputMask
              placeholder='000.000.000-00'
              id='identity'
              name='identity'
              {...register('identity')}
              // value={identity}
              mask={'999.999.999-99'}
              maskChar=" "
              // onChange={
              //   (e: React.ChangeEvent<HTMLInputElement>) => setIdentity(e.target.value)
              // }
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
              // value={email}
              // onChange={
              //   (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
              // }
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



        {errorMessage !== ''
          ? <Alert variant="filled" severity="error" className='max-w-md mx-6 md:mx-16 mb-6'>{errorMessage} Verifique se o <span className='font-bold'>E-MAIL</span> e/ou o <span className='font-bold'>CPF</span> estão corretos.</Alert>
          : <div className='flex items-center justify-center pt-4 pb-6 md:px-16'>

            {tickets.length > 0 &&

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow >
                      <StyledTableCell align="center" className='font-bold'>Ingresso</StyledTableCell>
                      <StyledTableCell align="center" className='font-bold'>Curso</StyledTableCell>
                      <StyledTableCell align="center" className='font-bold'>Status</StyledTableCell>
                      <StyledTableCell align="center" className='font-bold'>Pagador</StyledTableCell>
                      <StyledTableCell align="center" className='font-bold'>Categoria</StyledTableCell>
                      <StyledTableCell align="center" className='font-bold'>Informação do pagamento</StyledTableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      tickets.map((ticket, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell align="center">
                            {ticket.status === 3
                              ? <a href={`/ticket/${ticket.ticket}`} target='_blank' className='underline cursor-pointer font-bold text-blue-600'>Visualizar</a>
                              : ticket.status === 1 && <button onClick={() => handleClickOpen(ticket.pixKey)} className='underline font-bold text-blue-600'>Visualizar</button>}

                          </StyledTableCell>
                          <StyledTableCell align="center">{ticket.product}</StyledTableCell>
                          <StyledTableCell
                            align="center"
                            className={`${ticket.status === 3 ? 'text-green-700' : 'text-orange-600'}`}
                          >
                            {ticket.message}
                          </StyledTableCell>
                          <StyledTableCell align="center">{ticket.userName}</StyledTableCell>
                          <StyledTableCell align="center">
                            {ticket.userCategory === "lawyer" && "Advogado"}
                            {ticket.userCategory === "student" && "Estudante"}
                          </StyledTableCell>
                          <StyledTableCell align="center">{ticket.description}</StyledTableCell>
                        </StyledTableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            }
          </div>
        }
      </div>
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isBackdropOpen}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <div>
        <Dialog
          open={isModalOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" className='text-orange-500'>
            {"Pagamento pendente"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className='md:px-8'>
              <span className='font-medium text-gray-600 py-2'>Utilize o QR Code abaixo para realizar o pagamento ou clique no botão para copiar o código PIX.</span>
              <QRCode
                value={pixKey}
                size={180}
                className='mx-auto mt-3'
                bgColor='#fff'
                fgColor='#000'
              // fgColor='#4b5563'
              />

              <CopyToClipboard
                text={pixKey}
                onCopy={() => setButtonText('Código copiado!')}
              >
                <button
                  className='py-4 px-2 mt-8 w-full font-bold text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all mb-6'
                  onClick={(event) => event.preventDefault()}
                >
                  <span className='font-semibold'>{buttonText}</span>
                </button>

              </CopyToClipboard>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              className='p-2 font-bold text-white rounded-md bg-orange-600 hover:bg-orange-500 transition-all'
              onClick={handleClose}>Fechar</button>
          </DialogActions>
        </Dialog>
      </div>
    </div >
  )
}

MyTickets.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}