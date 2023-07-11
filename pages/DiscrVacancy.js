import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import BodyDiscrVacancy from '../components/BodyDiscrVacancy'

const drawerWidth = 220;

export default function DiscrVacancy() {
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
              <Typography sx={{ pt: 2, pl: 2, pb: 2 }} variant="subtitle2" Wrap textAlign="left">МИБ_Frontend Angular_Горкина</Typography>
              <Divider />
              <Typography sx={{ pt: 2, pl: 2, pb: 2 }} variant="subtitle2" Wrap textAlign="left">FinStar_JD fullstack (sr)_Горкина</Typography>
              <Divider />
              <Typography sx={{ pt: 2, pl: 2, pb: 2 }} variant="subtitle2" Wrap textAlign="left">МИБ_QA_auto_Горкина</Typography>
              <Divider />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ maxWidth: 750, flexGrow: 1, }}>
        <Toolbar />
        <BodyDiscrVacancy />
      </Box>
    </Box>
  );
}