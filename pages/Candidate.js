import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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
              <Typography sx={{ pt: 2, pl: 2 }} variant="subtitle2" Wrap textAlign="left">Крушинин Алексей</Typography>
              <Typography sx={{ pt: 2, pl: 2 }} variant="subtitle2" Wrap textAlign="left">Сазонов Иван Витальевич</Typography>
              <Typography sx={{ pt: 2, pl: 2 }} variant="subtitle2" Wrap textAlign="left">Петров Григорий</Typography>
              <Typography sx={{ pt: 2, pl: 2 }} variant="subtitle2" Wrap textAlign="left">Иванов Иван</Typography>
              <Typography sx={{ pt: 2, pl: 2 }} variant="subtitle2" Wrap textAlign="left">Жуков Артем</Typography>
              <Typography sx={{ pt: 2, pl: 2 }} variant="subtitle2" Wrap textAlign="left">Киселева Надежда</Typography>
              <Typography sx={{ pt: 2, pl: 2 }} variant="subtitle2" Wrap textAlign="left">Пушкарев Андрей</Typography>
              <Typography sx={{ pt: 2, pl: 2 }} variant="subtitle2" Wrap textAlign="left">Булыгин Васлий Викторович</Typography>
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