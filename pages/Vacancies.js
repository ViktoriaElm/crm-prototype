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

function createData(nameVacancy, quantityCandidates, newCandidates, salaryVacancy, typeOfWork, stackVacancy, commentsVacancy) {
  return { nameVacancy, quantityCandidates, newCandidates, salaryVacancy, typeOfWork, stackVacancy, commentsVacancy };
}

const rows = [
  createData(`МИБ_Frontend Angular_Горкина`, `3`, `1 / 107`, `до 300 на руки`, `удаленный, гибрид, офис`, `Angular 12+, angular material`, `поиск остановлен, смотрят назначенных`, ``,),

  createData(`FinStar_JD fullstack (sr)_Горкина`, `1`, `3 / 37`, `до $5000 на руки`, `ИС - удаленка, далее офис`, `Java и/или Kotlin, Python, SQL, JS`, `обязательная релокация во Вьетнам`),

  createData(`МИБ_QA_auto_Горкина`, `1`, `0 / 0`, `-`, `удаленный, гибрид, офис`, `Java`, `жду в работу`),

];

export default function Vacancies() {
  return (
    <TableContainer component={Paper}>

      <Table sx={{ maxWidth: 1917 }} aria-label="customized table">

        <TableHead >
          <TableRow>

            <StyledTableCell sx={{ width: 100, border: 1, borderColor: 'grey.300' }} align="left"><b></b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Вакансия</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Ш.ед.</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Кандидаты</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Зарплата</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Формат</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Стек</b></StyledTableCell>

            <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Комментарий</b></StyledTableCell>


          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (

            <StyledTableRow key={row.name}>

              <StyledTableCell sx={{ width: 100, border: 1, borderColor: 'grey.300' }} align="left"><b></b></StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} component="th" scope="row">{row.nameVacancy}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">{row.quantityCandidates}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">{row.newCandidates}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">{row.salaryVacancy}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">{row.typeOfWork}</StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">
                <Typography variant="inherit" color='darkgray'>
                  {row.stackVacancy}
                </Typography>
              </StyledTableCell>

              <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} align="left">
                <Typography variant="inherit" color='darkgray'>
                  {row.commentsVacancy}
                </Typography>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer>
  );
}