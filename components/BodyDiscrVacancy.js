import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const status = [
  { label: 'в работе' },
  { label: 'в приоритете' },
  { label: 'пауза' },
  { label: 'архив' },
];

export default function BodyDiscrVacancy() {

  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <Box sx={{ ml: -10, mt: -5 }}>

      {/* о вакансии */}
      <Typography variant="body1" gutterBottom ><b>Angular разработчик</b></Typography>
      <Typography variant="body2" color="gray" gutterBottom >МИБ</Typography>
      <Typography variant="body2" color="gray" gutterBottom >120 000 руб. - 300 000 руб.</Typography>

      <Box sx={{ maxWidth: 600, mt: 3, mb: 2, display: 'flex' }}>
        <Box sx={{ mb: 1 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="body2" Wrap textAlign="left">В работе с: 17.06.2023</Typography>
          </Box>
          <Box >
            <Typography variant="body2" Wrap textAlign="left">Дата закрытия: 27.07.2023</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mb: 3, display: 'flex' }}>
        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={status}
          sx={{ mr: 1, minWidth: 260 }}
          renderInput={(params) => <TextField  {...params} label="Статус" />}
        />
        <Button sx={{ width: 260, mr: 1 }} variant="outlined">Редактировать вакансию</Button>
        <Button sx={{ width: 260 }} variant="outlined">Шаблоны писем</Button>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Typography variant="body2" color="dimgray" gutterBottom >Заявлено позиций: 3</Typography>
      </Box>

      <Box sx={{ mb: 3, display: 'flex' }}>
        <Typography variant="body2" color="dimgray" gutterBottom >Свободных позиций: 1</Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Вакансия описание */}
      <Box sx={{ mb: 9 }}>
        <Typography sx={{ mr: 1 }} variant="body2">
          <b>Frontend-разработчик (Angular)</b>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="subtitle2">
          Наш клиент, большой стабильный банк с высшим рейтингом стабильности, набирает команду для развития системы дистанционного банковского обслуживания и находится в поиске Frontend разработчика.
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="subtitle2">
          <b>Задачи, которые предстоит решать :</b>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="body2">
          Разработка  системы банковского дистанционного обслуживания <br />
          Разработка бизнес-логики.<br />
          Верстка новых разделов, кроссбраузерная, адаптивная, валидная<br />
          Помощь в оптимизации работы сайта (скорость загрузки, и работы)<br />
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Мы ожидаем следующий опыт работы:</b>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="body2">
          Не менее 2 лет опыта в создании сложных фронтовых решений.<br />
          JavaScript<br />
          Webpack<br />
          Angular 12+<br />
          Gitlab<br />
          JIRA/Confluence<br />
          Опыт работы с gulp/webpack.<br />
          Опыт работы с Figma/Zeplin.<br />
          Опыт работы с векторной графикой (svg и svg-спрайты).<br />
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Будет плюсом (но не обязательно):</b>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="body2">
          Понимание UX\UI.<br />
          Знание бэк- языков-систем (это не требование).<br />

        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Компания предлагает:</b>
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          Работа в мощной и дружной Enterprise компании<br />
          Оформление по ТК РФ<br />
          Зарплата до 300 тыс.руб Net. Сумма может быть больше, готовы обсуждать индивидуально!<br />
          Заработная плата напрямую зависит от вашего опыта и растёт вместе с вами<br />
          Полная занятость, работа в офисе или на удаленке, график работы 5/2, гибкий рабочий день<br />
          Возможность прохождения курсов повышения квалификации за счет компании<br />
          Каждому сотруднику мы предоставляем ресурсы для профессионального и личностного роста<br />

        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Готовы обсудить? Бронируйте встречу перейдя по ссылке:</b>
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          <a href='#'>https://calendly.com/v-gorkina/interview</a>
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Или напишите в телеграм:</b>
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          <a href='#'>https://t.me/Viktoria_Gorkina</a>
        </Typography>
      </Box>
    </Box>
  );
}