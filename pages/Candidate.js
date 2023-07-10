import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CVCandidates from '../components/CVCandidates'

const drawerWidth = 220;

export default function Candidate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        anchor='right'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Крушинин Алексей', 'Сазонов Иван Витальевич', 'Петров Григорий', 'Иванов Иван', 'Жуков Артем', 'Киселева Надежда', 'Пушкарев Андрей', 'Булыгин Васлий Викторович'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <Typography variant="body2" textAlign="left"><ListItemText />{text}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ maxWidth: 750, flexGrow: 1, }}>
        <Toolbar />
        <CVCandidates />
      </Box>
    </Box>
  );
}