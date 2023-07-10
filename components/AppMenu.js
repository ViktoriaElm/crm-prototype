import Link from "next/link";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const drawerWidth = 120;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ ml: -0.5 }}>
          <Typography variant="h6" noWrap component="div">
            IT-recruitment
          </Typography>
          <Box sx={{ display: 'flex', ml: 10 }}>
            <Button sx={{ color: 'white', border: 1 }} variant="outlined">Добавить кандидата</Button>
            <Button sx={{ color: 'white', border: 1, ml: 3, mr: 2 }} variant="outlined">Добавить вакансию</Button>
            <Search sx={{ color: 'white', display: 'block', border: 1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Поиск…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

        </Toolbar>
      </AppBar>
      <Drawer

        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ p: 0.5, overflow: 'auto' }}>

          <ListItem sx={{ mt: 1, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'gray' }} href="/">
              <Button sx={{ width: 110, color: 'white', border: 1, borderColor: 'grey.400', pt: 2, pb: 2 }} variant="contained">База</Button>
            </Link>
          </ListItem>

          <ListItem sx={{ mt: 1, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'gray' }} href="/Vacancies">
              <Button sx={{ width: 110, color: 'white', border: 1, borderColor: 'grey.400', pt: 2, pb: 2 }} variant="contained">Вакансии</Button>
            </Link>
          </ListItem>

          <ListItem sx={{ mt: 1, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'gray' }} href="/Reports">
              <Button sx={{ width: 110, color: 'white', border: 1, borderColor: 'grey.400', pt: 2, pb: 2 }} variant="contained">Отчеты</Button>
            </Link>
          </ListItem>

          <ListItem sx={{ mt: 1, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'gray' }} href="/Templates">
              <Button sx={{ width: 110, color: 'white', border: 1, borderColor: 'grey.400', pt: 2, pb: 2 }} variant="contained">Шаблоны</Button>
            </Link>
          </ListItem>

          <List>
            <ListItem sx={{ mt: 2, color: 'white', display: 'block' }} disablePadding>
              <Link style={{ textDecoration: 'none', color: 'silver' }} href="/Admin">
                <Button sx={{ width: 110, color: 'lightgray', border: 0 }} variant="outlined">Админ</Button>
              </Link>
            </ListItem>

            <ListItem sx={{ color: 'white', display: 'block' }} disablePadding>
              <Link style={{ textDecoration: 'none', color: 'silver' }} href="/SignOut">
                <Button sx={{ mt: 1, width: 110, color: 'lightgray', border: 0 }} variant="outlined">Выход</Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, }}>
        <Toolbar />
        {/* блок */}
      </Box>
    </Box>
  );
}