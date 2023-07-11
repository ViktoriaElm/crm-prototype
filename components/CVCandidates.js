import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const recruiters = [
  { label: 'Горкина Виктория' },
  { label: 'Демина Юлия' },
  { label: 'Гребнева Анна' },
];

const vacancy = [
  { label: 'МИБ_Java_разработчик' },
  { label: 'МИБ_Angular sr' },
  { label: 'FinStar_JD_fullstack' },
];

const status = [
  { label: 'новый' },
  { label: 'отправлено письмо' },
  { label: 'повторное письмо' },
  { label: 'интерес' },
  { label: 'скрининг интервью' },
  { label: 'на рассмотрении' },
  { label: 'техническое интервью' },
  { label: 'тестовое' },
  { label: 'лайфкоддинг' },
  { label: 'проверка СБ' },
  { label: 'ждет оффер' },
  { label: 'оффер отправлен' },
  { label: 'оффер подписан' },
  { label: 'оффер не принят' },
  { label: 'оформлен' },
  { label: 'ис пройден' },
  { label: 'ис не пройден' },
  { label: 'отказ' },
  { label: 'резерв' },
];

const tags = [
  { label: 'резерв' },
  { label: 'angular' },
  { label: 'fintech' },
];

export default function CVCandidates() {

  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <Box sx={{ ml: -10, mt: -5 }}>

      <Box sx={{ maxWidth: 600, mb: 1, display: 'flex' }}>
        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={recruiters}
          sx={{ mr: 1, minWidth: 260 }}
          renderInput={(params) => <TextField  {...params} label="Рекрутер" />}
        />

        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={vacancy}
          sx={{ mr: 1, minWidth: 260 }}
          renderInput={(params) => <TextField {...params} label="Вакансия" />}
        />

        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={status}
          sx={{ mr: 1, minWidth: 260 }}
          renderInput={(params) => <TextField {...params} label="Статус" />}
        />
      </Box>

      {/* кнопка скачать резюме */}
      <Button sx={{ width: 260, mb:2, }} variant="outlined">Скачать резюме</Button>

      {/* редактировать кандидата */}
      <Button sx={{ ml: 1, mb:2, width: 260 }} variant="outlined">Редактировать кандидата</Button>

      <Box sx={{ mb: 3 }}>

        {/* дата добавления в базу */}
        <Box sx={{ display: 'flex' }}>
          <Typography variant="body2" Wrap textAlign="left">Добавлен в базу: 17.06.2023</Typography>
        </Box>

        {/* в новом статусе */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" Wrap textAlign="left">В новом статусе: 24 ч</Typography>
        </Box>

      </Box>

      <Box sx={{ display: 'flex' }}>
        <Typography variant="body2" Wrap textAlign="left">Источник:</Typography>
      </Box>

      {/* источник */}
      <Box sx={{ mb: 3, display: 'flex' }}>
        <a style={{ textDecoration: 'none', color: 'blue' }} href="https://spb.hh.ru/resume/5ad505b4ff04fba68e0039ed1f5656354f3853?customDomain=1">
          <Typography variant="body2" Wrap textAlign="left">https://spb.hh.ru/resume/5ad505b4ff04fba68e0039ed1f5656354f3853?customDomain=1</Typography>
        </a>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* о кандидате */}
      <Typography variant="body1" gutterBottom ><b>Крушинин Алексей</b></Typography>
      <Typography variant="body2" color="gray" gutterBottom >Angular разработчик</Typography>

      {/* Проживает */}
      <Box sx={{ mt: 2, mb: 0.5, display: 'flex' }}>
        <Typography sx={{ mr: 1 }} variant="body2">Проживает:</Typography>
        <Typography variant="body2" color="gray">Москва</Typography>
      </Box>

      {/* Телефон */}
      <Box sx={{ mb: 3, mb: 0.5, display: 'flex' }}>
        <Typography sx={{ mr: 1 }} variant="body2">Телефон:</Typography>
        <Typography variant="body2" color="gray">+79218743998</Typography>
      </Box>

      {/* Телеграм */}
      <Box sx={{ mb: 3, mb: 0.5, display: 'flex' }}>
        <Typography sx={{ mr: 1 }} variant="body2">Telegram:</Typography>
        <Typography variant="body2" color="gray">t.me/VikoriaGorkina</Typography>
      </Box>

      {/* WhatsApp */}
      <Box sx={{ mb: 3, mb: 0.5, display: 'flex' }}>
        <Typography sx={{ mr: 1 }} variant="body2">WhatsApp:</Typography>
        <Typography variant="body2" color="gray">+79218743998</Typography>
      </Box>

      <Box sx={{ mb: 3, mb: 0.5, display: 'flex' }}>
        <Typography sx={{ mr: 1 }} variant="body2">Email:</Typography>
        <Typography variant="body2" color="gray">v9218743998@yandex.ru</Typography>
      </Box>

      {/* Прочие ссылки */}
      <Box sx={{ display: 'flex' }}>
        <a style={{ textDecoration: 'none', color: 'blue' }} href="https://career.habr.com/viktoriia_gorkina">
          <Typography variant="body2" Wrap textAlign="left">https://career.habr.com/viktoriia_gorkina</Typography>
        </a>
      </Box>

      <Box sx={{ mb: 2, display: 'flex' }}>
        <a style={{ textDecoration: 'none', color: 'blue' }} href="https://github.com/ViktoriaElm">
          <Typography variant="body2" Wrap textAlign="left">https://github.com/ViktoriaElm</Typography>
        </a>
      </Box>

      {/* Резюме описание */}
      <Box sx={{ mb: 9 }}>
        <Typography sx={{ mr: 1 }} variant="body2">
          <b>Программмист с++/c#/python/js/angular fullstack</b>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="subtitle2">
          <b>Опыт работы 9 лет 6 месяцев</b>
        </Typography>
        <Typography sx={{ mr: 1 }} variant="subtitle2">
          Специализации: Программист, разработчик
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          Занятость: полная занятость, частичная занятость
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          График работы: полный день, сменный график, гибкий график, удаленная работа
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="subtitle2">
          <b>Опыт работы:</b>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="body2">
          <b>НПК Финист-софт</b>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="body2">
          <b>Web-программист</b>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="body2">
          <i>сентябрь 2022 - по настоящее время (10 месяцев)</i>
        </Typography>
        <Typography sx={{ mt: 1, mr: 1 }} variant="body2">
          Портировал приложение с winforms в ангуляр, а позднее в блазор (чистая архитектура, CQRS, высоконагруженная система)
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Ключевые навыки:</b>
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          C/C++, MS Visual Studio, Scrum, Git, ООП, JavaScript, STL, Паттерны проектирования, Многопоточное программирование, Межпроцессное взаимодействие, SQL, Win API (threads, сефмафоры, мьютексы....), agile, клиент-серверные приложения, gmock, Юнит-тестинг, .NET Framework, C#, Python, Django Framework, PostgreSQL, MySQL, Linux, jQuery, HTML, REST, .NET Core, TypeScript
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Обо мне:</b>
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          Вошел в сферу программирования с фриланса: начинал с простых сайтов сверстаных на html, никогда не сидел на месте и не довольствовался достигнутым, старался изучать новые технологии и осваивать новые языки программирования. Работая во фрилансе я хорошо освоил js, php, реляционные БД, такие как postgres и mysql, научился строить сложные запросы. Когда понял что достиг потолка в самостоятельном обучении и дальше двигаться можно только с чейто помощью решил поступить учиться по профильной специальности в ВУЗ, параллельно с обучением нашел работу в большой международной компании mera.ru ( поглощена orioninc.com на данный момент). Фирма занималась аутсорсом и мне посчастливилось работать на крупную международную организацию занимающуюся ip-телефонией с головным офисом в Канаде avaya.com. В данной фирме я полностью погрузился в боевые задачи, начинал с багфикса.
          Нахожусь в активном поиске новой работы, рассматриваю варианты как удаленной работы так и в офисе.
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Образование:</b>
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          Казанский национальный исследовательский технический университет им. А.Н. Туполева
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          Казань, 2020
        </Typography>
        <Typography sx={{ mb: 2, mr: 1 }} variant="body2">
          ИКТИЗИ, Программная инженерия
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          Поволжский государственный технологический университет
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2"> Йошкар-Ола, 2008
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          механико машиностроительный, машины и механизмы (ММ)
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Знание языков:</b>
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          Русский - Родной
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          Английский - B1 — Средний
        </Typography>
        <Typography sx={{ mt: 2, mr: 1 }} variant="body2">
          <b>Гражданство:</b> Россия
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          <b>Разрешение на работу:</b> Россия
        </Typography>
        <Typography sx={{ mr: 1 }} variant="body2">
          <b> Желаемое время в пути до работы:</b> Не более часа</Typography>
      </Box>

    </Box>
  );
}