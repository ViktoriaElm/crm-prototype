import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.text.secondary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function createData(nameCandidate, position, city, phone, email, status, comments) {
  return { nameCandidate, position, city, phone, email, status, comments };
}

const rows = [
  createData('Сазонов Иван Витальевич', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отправлено письмо`, ``,),

  createData('Крушинин Алексей', `Angular разработчик`, `Екатеринбург`, 79211234567, `v9218743998@yandex.ru`, `отказ`, `не в поисках`),

  createData('Петров Григорий', `QA`, `Москва`, ``, `v9218743998@yandex.ru`, `новый`, ``,),

  createData('Иванов Иван', `React разработчик`, `Ростов-на-Дону`, 79211234567, ``, `повторное письмо`, ``,),

  createData('Жуков Артем', `Java разработчик`, `Ставрополь`, 79211234567, ``, `тех интервью`, `хочет релокацию`),

  createData('Киселева Надежда', `Java разработчик`, `Нижний-Новгород`, 79211234567, `v9218743998@yandex.ru`, `резерв`, `до декабря 2023_Горкина`),

  createData('Пушкарев Андрей', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отказ`, `не рассматривает удаленку`,),

  createData('Иванов Иван Иванович', `Java разработчик`, `Санкт-Петербург`, 79211234567, ``, `лайфкоддинг`, `27.07.2023`),

  createData('Иванов Иван Иванович', `Java разработчик`, `Москва`, ``, `v9218743998@yandex.ru`, `принял оффер`, `выход_17.06.23_Иванова`),

  createData('Булыгин Васлий Викторович', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отказ`, `не готов ездить в офис`),

  createData('Краснова Наталья', `Java разработчик`, `Саратов`, ``, `v9218743998@yandex.ru`, `новый`, ``,),

  createData('Орехов Игнат', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `новый`, ``,),
];

export default function AllCandidates() {
  return (
    <TableContainer component={Paper}>

      <Table sx={{ maxWidth: 1917 }} aria-label="customized table">

        <TableHead >
          <TableRow>

            <StyledTableCell sx={{ width: 119, border: 1, borderColor: 'grey.100' }} align="left"><b></b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>30 кандидатов</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Должность</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Город</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Телефон</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Email</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Статус</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Комментарий</b></StyledTableCell>

          </TableRow>
        </TableHead>

        <TableBody>

          {rows.map((row) => (

            <StyledTableRow key={row.id}>

              <StyledTableCell sx={{ width: 119, border: 1, borderColor: 'grey.300' }} align="left"><b></b></StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} component="th" scope="row">
                <Link style={{ textDecoration: 'none', color: 'black' }} href="/Candidate">
                  {row.nameCandidate}
                </Link>
              </StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left">
                <Link style={{ textDecoration: 'none', color: 'black' }} href="/Candidate">
                  {row.position}
                </Link>
              </StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left">
                <Link style={{ textDecoration: 'none', color: 'black' }} href="/Candidate">
                  {row.city}
                </Link>
              </StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left">
                <Link style={{ textDecoration: 'none', color: 'black' }} href="/Candidate">
                  {row.phone}
                </Link>
              </StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left">
                <Link style={{ textDecoration: 'none', color: 'black' }} href="/Candidate">
                  {row.email}
                </Link>
              </StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left">
                <Link style={{ textDecoration: 'none' }} href="/Candidate">
                  <Typography variant="inherit" color='darkgray'>
                    {row.status}
                  </Typography>
                </Link>
              </StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left">
                <Link style={{ textDecoration: 'none' }} href="/Candidate">
                  <Typography variant="inherit" color='darkgray'>
                    {row.comments}
                  </Typography>
                </Link>
              </StyledTableCell>

            </StyledTableRow>

          ))}

        </TableBody>

      </Table>

    </TableContainer>
  );
}