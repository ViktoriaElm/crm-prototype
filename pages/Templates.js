import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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

function createData(nameVacancy, previewTemplate, actions) {
    return { nameVacancy, previewTemplate, actions };
}

const rows = [
    createData(`МИБ_Frontend Angular_Горкина`, `[Имя Кандидата], добрый день!

  Меня зовут Виктория, я рекрутер в WIT recruitment.
  
  Вы рассматриваете предложения о работе?
  
  Наш клиент Металлинвестбанк расширяет команду и ищет Разработчика на Angular с опытом разработки не менее 2 лет ...`),

    createData(`FinStar_JD fullstack (sr)_Горкина`, `[Имя Кандидата], добрый день!

  Меня зовут Виктория, я рекрутер в WIT recruitment.
  
  Вы рассматриваете предложения о работе?
  
  Наш клиент FinStar расширяет команду и ищет Разработчика на Kotlin с опытом разработки не менее 3 лет ...`),

    createData(`МИБ_QA_auto_Горкина`, `-`),

];

export default function Templates() {
    return (
        <TableContainer component={Paper}>

            <Table sx={{ maxWidth: 1917 }} aria-label="customized table">

                <TableHead >
                    <TableRow sx={{ ml:3 }}>

                        <StyledTableCell sx={{ width: 100, border: 1, borderColor: 'grey.300' }} align="left"><b></b></StyledTableCell>

                        <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Вакансия</b></StyledTableCell>

                        {/* <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Текст превью</b></StyledTableCell> */}

                        <StyledTableCell sx={{ border: 1, borderColor: 'grey.300' }} align="left"><b>Действия</b></StyledTableCell>


                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (

                        // строку сделать уже

                        <StyledTableRow key={row.name}>

                            <StyledTableCell sx={{ width: 100, border: 1, borderColor: 'grey.300' }} align="left"><b></b></StyledTableCell>

                            <StyledTableCell sx={{ border: 1, borderColor: 'grey.200' }} component="th" scope="row">{row.nameVacancy}</StyledTableCell>

                            {/* <StyledTableCell sx={{ maxWidth: 900, border: 1, borderColor: 'grey.200' }} align="left">{row.previewTemplate}</StyledTableCell> */}

                            <StyledTableCell sx={{ maxWidth:132,  border: 1, borderColor: 'grey.200' }} align="center">
                                {/* текст кнопки сделать меньше */}
                                <Button sx={{ width: 130, color: 'silver', border: 1, m: 1 }} variant="outlined">Изменить</Button>
                                <Button sx={{ width: 130, color: 'silver', border: 1, m: 1 }} variant="outlined">Копировать</Button>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>

            </Table>

        </TableContainer>
    );
}