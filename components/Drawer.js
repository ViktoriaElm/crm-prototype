import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Link from "next/link";

const drawerWidth = 230;

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ pl: 0 }}>
        <Typography variant="body2" gutterBottom>
          {['Java_МИБ_Горкина', 'Angular_МИБ_Горкина', 'Diasoft_МИБ_Горкина', 'Java_МИБ_Горкина'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}</Typography>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { mt: 7, boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'lightgrey' }} href="/">
            <Typography variant="inherit" textAlign="center">{drawer}</Typography>
          </Link>



        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { sm: 'block' },
            '& .MuiDrawer-paper': { mt: 8.6, boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Typography variant="body2" gutterBottom>
            {drawer}
          </Typography>
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};