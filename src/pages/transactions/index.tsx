import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { purple } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { ProductsServices } from '../../services/ProductsService';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: purple[900],
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

const rows = [
  createData(1, "18/03/2021", 1, "mi sit amet lobortis", 561.26, 83, "Credit Card", 4, "Nadia McGettrick", "Lawyer"),
  createData(2, "04/07/2021", 2, "integer pede", 144.82, 51, "PIX", 7, "Merle Bourgourd", "Student"),
  createData(3, "25/07/2021", 3, "sed vestibulum sit amet", 111.42, 4, "PIX", 3, "Irina Lambertz", "Lawyer"),
  createData(4, "14/10/2021", 4, "ligula sit amet eleifend", 760.56, 92, "Credit Card", 5, "Abby Chesterfield", "Student"),
  createData(5, "01/01/2021", 5, "et eros vestibulum", 526.2, 74, "PIX", 6, "Milicent Brunelli", "Lawyer"),
  createData(6, "23/07/2021", 6, "porta volutpat", 20.61, 93, "Credit Card", 9, "Amii Toma", "Lawyer"),
  createData(7, "31/08/2021", 7, "aliquam augue quam sollicitudin", 712.16, 18, "PIX", 4, "Marylou Conkay", "Student"),
  createData(8, "18/02/2021", 8, "dui vel sem sed", 562.44, 13, "Credit Card", 7, "Torey Tribe", "Student"),
  createData(9, "05/09/2021", 9, "sapien urna", 167.8, 72, "Credit Card", 7, "Eve Shade", "Student"),
  createData(10, "23/08/2021", 10, "dui maecenas tristique est", 868.37, 12, "Credit Card", 8, "Claudian Toderi", "Lawyer"),
  createData(11, "28/11/2021", 11, "aliquam convallis", 575.57, 15, "Credit Card", 2, "Avery Haugen", "Student"),
  createData(12, "24/11/2021", 12, "vel augue vestibulum", 591.5, 67, "Credit Card", 1, "Ina Abramamov", "Student"),
  createData(13, "08/03/2021", 13, "natoque penatibus et", 232.28, 59, "Credit Card", 5, "Elwira MacIver", "Lawyer"),
  createData(14, "06/12/2021", 14, "consequat in", 282.39, 93, "PIX", 1, "Jerald Davey", "Lawyer"),
  createData(15, "31/08/2021", 15, "eget nunc", 746.71, 19, "Credit Card", 6, "Ardyth Eberts", "Student"),
  createData(16, "09/05/2021", 16, "eleifend donec ut", 563.04, 15, "Credit Card", 2, "Brunhilde Sculpher", "Lawyer"),
  createData(17, "09/07/2021", 17, "eu massa donec dapibus", 887.84, 35, "PIX", 4, "Zebulon Schroter", "Student"),
  createData(18, "01/03/2021", 18, "tempus vel pede morbi", 605.69, 6, "Credit Card", 9, "Lauraine Sackur", "Student"),
  createData(19, "10/02/2021", 19, "nulla eget eros", 386.75, 11, "Credit Card", 1, "Gertrudis Blomfield", "Lawyer"),
  createData(20, "23/05/2021", 20, "augue luctus tincidunt", 837.44, 42, "PIX", 4, "Robbie Alabaster", "Lawyer"),
  createData(21, "20/12/2021", 21, "mi in porttitor pede", 562.95, 77, "PIX", 6, "April Vanichev", "Student"),
  createData(22, "03/08/2021", 22, "in leo maecenas pulvinar", 531.42, 48, "PIX", 7, "Colan Yurov", "Lawyer"),
  createData(23, "05/01/2021", 23, "felis eu sapien", 781.67, 18, "Credit Card", 4, "Reagan Seago", "Lawyer"),
  createData(24, "15/02/2021", 24, "pretium iaculis", 126.17, 8, "PIX", 4, "Florentia Rains", "Student"),
  createData(25, "10/02/2021", 25, "curabitur in libero", 793.98, 54, "Credit Card", 7, "Konstanze Redmille", "Lawyer"),
  createData(26, "15/06/2021", 26, "erat volutpat in congue", 188.87, 63, "PIX", 10, "Denney Hodgen", "Lawyer"),
  createData(27, "18/10/2021", 27, "ipsum primis in faucibus", 511.6, 22, "PIX", 1, "Mirna Cutford", "Student"),
  createData(28, "15/04/2021", 28, "consequat morbi", 897.76, 60, "Credit Card", 9, "Mord Caseri", "Student"),
  createData(29, "22/03/2021", 29, "ultrices posuere", 550.95, 93, "PIX", 5, "Jana Goater", "Student"),
  createData(30, "04/04/2021", 30, "curae duis", 835.95, 50, "PIX", 9, "Esmaria Fallis", "Student"),
  createData(31, "01/02/2021", 31, "est et tempus", 498.49, 56, "Credit Card", 4, "Torin Simo", "Student"),
  createData(32, "23/07/2021", 32, "non pretium quis", 871.02, 72, "PIX", 1, "Eda Heister", "Student"),
  createData(33, "20/08/2021", 33, "ornare imperdiet sapien", 853.21, 37, "Credit Card", 6, "Gunner Seabridge", "Lawyer"),
  createData(34, "02/11/2021", 34, "quam nec dui", 995.6, 69, "PIX", 4, "Dre Maber", "Student"),
  createData(35, "13/08/2021", 35, "quam pharetra", 428.9, 68, "PIX", 2, "Reynold Caitlin", "Lawyer"),
  createData(36, "22/10/2021", 36, "quam sapien varius", 400.97, 64, "Credit Card", 4, "Meg Gallear", "Lawyer"),
  createData(37, "12/09/2021", 37, "vulputate vitae nisl", 496.59, 38, "Credit Card", 6, "Stanfield O'Heffernan", "Lawyer"),
  createData(38, "07/10/2021", 38, "accumsan tortor", 403.27, 9, "PIX", 4, "Tamiko Exrol", "Student"),
  createData(39, "07/09/2021", 39, "ligula vehicula consequat morbi", 204.03, 23, "PIX", 8, "Gail Warratt", "Student"),
  createData(40, "23/11/2021", 40, "vitae quam suspendisse potenti", 548.11, 68, "PIX", 8, "Edsel Smiz", "Lawyer"),
  createData(41, "16/01/2021", 41, "curabitur at ipsum", 856.67, 97, "Credit Card", 8, "Ola Phythean", "Student"),
  createData(42, "11/06/2021", 42, "curae nulla dapibus dolor", 180.34, 73, "PIX", 7, "Frederigo Bossingham", "Student"),
  createData(43, "19/01/2021", 43, "maecenas tincidunt", 629.05, 43, "Credit Card", 1, "Analiese Faulkner", "Lawyer"),
  createData(44, "24/08/2021", 44, "quam a odio in", 472.09, 92, "Credit Card", 5, "Marney Ravenscroftt", "Student"),
  createData(45, "06/11/2021", 45, "gravida sem praesent", 293.01, 6, "Credit Card", 1, "Lawrence Dyster", "Student"),
  createData(46, "14/02/2021", 46, "ligula nec", 964.33, 53, "PIX", 2, "Willamina Kristof", "Lawyer"),
  createData(47, "19/03/2021", 47, "nulla eget eros elementum", 704.35, 88, "PIX", 1, "Filip MacCoughan", "Lawyer"),
  createData(48, "25/02/2021", 48, "convallis tortor risus", 21.2, 4, "Credit Card", 6, "Winthrop Hortop", "Student"),
  createData(49, "14/04/2021", 49, "suspendisse potenti", 314.09, 26, "PIX", 4, "Gabey Ivasyushkin", "Student"),
  createData(50, "12/09/2021", 50, "mus vivamus", 602.63, 69, "PIX", 9, "Warren Cleghorn", "Lawyer")
];

export default function Customers() {
  const [age, setAge] = useState('');
  const [products, setProducts] = useState([]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);


  };

  async function getProducts() {
    await ProductsServices.products()
  }

  useEffect(() => {
    ProductsServices.products()
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.log(error)
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
          <InputLabel id="demo-simple-select-label">Selectione o produto</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Selectione o produto"
            onChange={handleChange}
          >
            {products.map((product) => (
              <MenuItem value={product.description} key={product.id}>
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
                <StyledTableCell >Id</StyledTableCell>
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
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell >{row.customer_name}</StyledTableCell>
                  <StyledTableCell align="center">{row.customer_category}</StyledTableCell>
                  <StyledTableCell align="center">{row.identity}</StyledTableCell>
                  <StyledTableCell align="center">{row.product_price}</StyledTableCell>
                  <StyledTableCell >{row.payment_method}</StyledTableCell>
                  <StyledTableCell align="center">{row.installments}</StyledTableCell>
                  <StyledTableCell >{row.product_name}</StyledTableCell>
                  <StyledTableCell align="center">{row.date}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
