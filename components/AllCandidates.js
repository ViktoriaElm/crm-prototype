import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: alpha(theme.palette.common.black, 0.7),
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.common.white,
  },
}));

function createData(name, position, city, phone, email, status, comments) {
  return { name, position, city, phone, email, status, comments };
}

const rows = [
  createData('Сазонов Иван Витальевич', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отправлено письмо_03.07.23_Горкина`, ``,),

  createData('Крушинин Алексей', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отказ_25.05.23_Иванова`, `не в поисках`),

  createData('Петров Григорий', `Java разработчик`, `Москва`, ``, `v9218743998@yandex.ru`, `добавлен_04.07.23_Горкина`, ``,),

  createData('Иванов Иван', `Java разработчик`, `Москва`, 79211234567, ``, `отказ_техинтервью_01.07.23_Круглова`, ``,),

  createData('Жуков Артем', `Java разработчик`, `Москва`, 79211234567, ``, `резерв_релокация_Круглова`, `хочет релокацию`),

  createData('Киселева Надежда', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `резерв до декабря 2023_Горкина`, ``),

  createData('Пушкарев Андрей', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отказ_12.06.23_Горкина`, `не рассматривает удаленку`,),

  createData('Иванов Иван Иванович', `Java разработчик`, `Москва`, 79211234567, ``, `лайфкоддинг_23.07.2023_Горкина`, ``),

  createData('Иванов Иван Иванович', `Java разработчик`, `Москва`, ``, `v9218743998@yandex.ru`, `принял оффер_17.06.23_Иванова`, ``),

  createData('Булыгин Васлий Викторович', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, `отказ_11.05.23_Горкина`, `не готов ездить в офис`),

  createData('Краснова Наталья', `Java разработчик`, `Москва`, ``, `v9218743998@yandex.ru`, ``, ``,),

  createData('Орехов Игнат', `Java разработчик`, `Москва`, 79211234567, `v9218743998@yandex.ru`, ``, ``,),
];

export default function AllCandidates() {
  return (
    <TableContainer component={Paper}>

      <Table sx={{ mt: 8.6, minWidth: 700, }} aria-label="customized table">

        <TableHead >
          <TableRow>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Имя кандидата</b></StyledTableCell>

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

            <StyledTableRow key={row.name}>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} component="th" scope="row">{row.name}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">{row.position}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">{row.city}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">{row.phone}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">{row.email}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">
                <Typography variant="inherit" color='darkgray'>
                  {row.status}
                </Typography>
              </StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">
                <Typography variant="inherit" color='darkgray'>
                  {row.comments}
                </Typography>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer>
  );
}