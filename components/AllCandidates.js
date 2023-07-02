import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.dark,
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

function createData(name, position, city, phone, email, status, comments ) {
  return { name, position, city, phone, email, status, comments };
}

const rows = [
  createData('Сазонов Иван Витальевич', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отправлено письмо_03.07.23_Горкина`, ``, ),

  createData('Крушинин Алексей', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отказ_25.05.23_Иванова`, `не в поисках`),

  createData('Петров Григорий', `Java разработчик`, `Москва`,``, `v9218743998@yandex.ru`, ``, ``, ),

  createData('Иванов Иван', `Java разработчик`, `Москва`, 79211234567, ``, `отказ_техинтервью_01.07.23_Круглова`, ``, ),

  createData('Жуков Артем', `Java разработчик`, `Москва`, 79211234567, ``, `резерв_релокация_Круглова`, `хочет релокацию`),

  createData('Киселева Нажежда', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `резерв до декабря 2023_Горкина`, ``),

  createData('Пушкарев Андрей', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отказ_12.06.23_Горкина`, `не рассматривает удаленку`, ),

  createData('Иванов Иван Иванович', `Java разработчик`, `Москва`, 79211234567, ``, `лайфкоддинг_23.07.2023_Горкина`, ``),

  createData('Иванов Иван Иванович', `Java разработчик`, `Москва`, ``, `v9218743998@yandex.ru`, `принял оффер_17.06.23_Иванова`, `` ),

  createData('Булыгин Васлий Викторович', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отказ_11.05.23_Горкина`, `не готов ездить в офис`),

  createData('Краснова Наталья', `Java разработчик`, `Москва`, ``, `v9218743998@yandex.ru`, ``, ``, ),

  createData('Орехов Игнат', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, ``, ``, ),
];

export default function AllCandidates() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ mt: 8.6, minWidth: 700 }} aria-label="customized table">
        <TableHead position="fixed">
          <TableRow>
            <StyledTableCell>Имя кандидата</StyledTableCell>
            <StyledTableCell align="left">Должность</StyledTableCell>
            <StyledTableCell align="left">Город</StyledTableCell>
            <StyledTableCell align="left">Телефон</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Статус</StyledTableCell>
            <StyledTableCell align="left">Комментарий</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.position}</StyledTableCell>
              <StyledTableCell align="left">{row.city}</StyledTableCell>
              <StyledTableCell align="left">{row.phone}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="left">{row.comments}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}