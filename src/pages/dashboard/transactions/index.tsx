import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { orange } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { ProductsServices } from 'services/ProductsService';
import { TransactionsService } from 'services/TransactionService';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: orange[600],
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

function createData(
  id: number,
  date: string,
  identity: number,
  product_name: string,
  product_price: number,
  quantity: number,
  payment_method: string,
  installments: number,
  customer_name: string,
  customer_category: string,
) {
  return { id, date, identity, product_name, product_price, quantity, payment_method, installments, customer_name, customer_category };
}

function transformDate(date: string) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(newDate);
}

export default function Customers() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [transactions, setTransactions] = useState([]);


  const handleSelectedProductChange = async (event: SelectChangeEvent) => {
    setSelectedProduct(event.target.value as string);
    await TransactionsService.transactions(event.target.value).then((response) => {
      setTransactions(response.data.transactions);
      console.log('data transaction', response.data.transactions)
    })
      .catch(error => {
        console.log('erro data transaction', error)
        // if (error.code === "ERR_BAD_REQUEST") {
        //   console.log(JSON.stringify(error.response.data, null, 2));
        // }
        // else {
        //   console.log(error);
        // }
      });

  };

  useEffect(() => {
    ProductsServices.products()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.log('erro data products', error)
        // if (error.code === "ERR_BAD_REQUEST") {
        //   console.log(JSON.stringify(error.response.data, null, 2));
        // }
        // else {
        //   console.log(error);
        // }
      });

  }, []);

  return (
    <div className='flex-1 items-center justify-center p-7'>
      <div className='text-2xl font-semibold'>
        <h1>Últimas transações</h1>


      </div>

      <div className='py-6 w-4/5 md:w-2/5'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" >
            Selecione o produto
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedProduct}
            label="Selectione o produto"
            onChange={handleSelectedProductChange}
          >
            {products.map((product) => (
              <MenuItem value={product.id} key={product.id}>
                {product.description}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

      </div>


      <div className='flex items-center justify-center'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Cliente</StyledTableCell>
                <StyledTableCell align="center">Categoria</StyledTableCell>
                <StyledTableCell align="center">identidade</StyledTableCell>
                <StyledTableCell align="center">Valor do curso</StyledTableCell>
                <StyledTableCell align="center">Método de pagamento</StyledTableCell>
                <StyledTableCell align="center">Parcelas</StyledTableCell>
                <StyledTableCell align="center">Curso</StyledTableCell>
                <StyledTableCell align="center">Data do Pagamento</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((item) => (
                <StyledTableRow key={item.transaction.id}>
                  <StyledTableCell >{item.transaction.customer.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.transaction.customer.category}</StyledTableCell>
                  <StyledTableCell align="center">{item.transaction.customer.identity}</StyledTableCell>
                  <StyledTableCell align="center">R$ {item.product.price - item.transaction.discount},00</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.transaction.paymentMethod === "2" && "Catão de Crédito"}
                    {item.transaction.paymentMethod === "6" && "Pix"}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.transaction.installments}</StyledTableCell>
                  <StyledTableCell >{item.product.description}</StyledTableCell>
                  <StyledTableCell align="center">{transformDate(item.transaction.createdAt)}</StyledTableCell>
                  {/* <StyledTableCell align="center">{new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(item.transaction.createdAt)}</StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
