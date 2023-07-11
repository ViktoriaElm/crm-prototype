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
  // border: 0,
  // инпут поиск
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
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

export default function AppMenu() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ ml: -0.5 }}>
          <Typography variant="h6" noWrap component="div">
            IT-recruitment
          </Typography>
          <Box sx={{ display: 'flex', ml: 10 }}>
            <Button sx={{ color: 'white', border: 0 }} variant="text">Добавить кандидата</Button>
            <Button sx={{ color: 'white', border: 0, ml: 3, mr: 3 }} variant="text">Добавить вакансию</Button>
            <Search sx={{ color: 'white', display: 'block', border: 0 }}>
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
            <Link style={{ textDecoration: 'none', color: 'dimgray' }} href="/">
              <Typography sx={{ pt: 2, pl: 3 }} variant="subtitle2" Wrap textAlign="left">База</Typography>
            </Link>
          </ListItem>

          <ListItem sx={{ mt: 1, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'dimgray' }} href="/Vacancies">
              <Typography sx={{ pt: 2, pl: 3 }} variant="subtitle2" Wrap textAlign="left">Вакансии</Typography>
            </Link>
          </ListItem>

          <ListItem sx={{ mt: 1, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'dimgray' }} href="/Reports">
              <Typography sx={{ pt: 2, pl: 3 }} variant="subtitle2" Wrap textAlign="left">Отчеты</Typography>
            </Link>
          </ListItem>

          <ListItem sx={{ mt: 1, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'dimgray' }} href="/Templates">
              <Typography sx={{ pt: 2, pl: 3 }} variant="subtitle2" Wrap textAlign="left">Шаблоны</Typography>
            </Link>
          </ListItem>

          <List>
            <ListItem sx={{ mt: 2, color: 'white', display: 'block' }} disablePadding>
              <Link style={{ textDecoration: 'none' }} href="/Admin">
                <Typography sx={{ pt: 2, pl: 3, color: 'silver' }} variant="subtitle2" Wrap textAlign="left">Админ</Typography>
              </Link>
            </ListItem>

            <ListItem sx={{ color: 'white', display: 'block' }} disablePadding>
              <Link style={{ textDecoration: 'none', color: 'silver' }} href="/SignOut">
                <Typography sx={{ pt: 2, pl: 3 }} variant="subtitle2" Wrap textAlign="left">Выход</Typography>
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