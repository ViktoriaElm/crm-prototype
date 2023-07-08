import Link from "next/link";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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
    // vertical padding + font size from searchIcon
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

const drawerWidth = 110;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            IT-recruitment
          </Typography>
          <Box sx={{ display: 'flex', ml: 10 }}>
            <Button sx={{ color: 'silver', border: 1 }} variant="outlined">Добавить кандидата</Button>
            <Button sx={{ color: 'silver', border: 1, ml: 3, mr: 2 }} variant="outlined">Добавить вакансию</Button>
            <Search sx={{ color: 'silver', display: 'block', border: 1 }}>
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
        <Box sx={{ overflow: 'auto' }}>

          <ListItem sx={{ my: 2, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'grey' }} href="/">
              <ListItemButton>
                <Typography variant="body2" textAlign="center"><b>База</b></Typography>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem sx={{ my: 2, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'grey' }} href="/Vacancies">
              <ListItemButton>
                <Typography variant="body2" textAlign="center"><b>Вакансии</b></Typography>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem sx={{ my: 2, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'grey' }} href="/Reports">
              <ListItemButton>
                <Typography variant="body2" textAlign="center"><b>Отчеты</b></Typography>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem sx={{ my: 2, color: 'white', display: 'block' }} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'grey' }} href="/Templates">
              <ListItemButton>
                <Typography variant="body2" textAlign="center"><b>Шаблоны</b></Typography>
              </ListItemButton>
            </Link>
          </ListItem>

          <Divider />
          <List>
            <ListItem sx={{ my: 2, color: 'white', display: 'block' }} disablePadding>
              <Link style={{ textDecoration: 'none', color: 'lightgrey' }} href="/Admin">
                <ListItemButton>
                  <Typography variant="body2" textAlign="center">Админ</Typography>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem sx={{ my: 2, color: 'white', display: 'block' }} disablePadding>
              <Link style={{ textDecoration: 'none', color: 'lightgrey' }} href="/SignOut">
                <ListItemButton>
                  <Typography variant="body2" textAlign="center">Выход</Typography>
                </ListItemButton>
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