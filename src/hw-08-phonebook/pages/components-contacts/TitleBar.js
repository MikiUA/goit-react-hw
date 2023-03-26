import { AddCircle, Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, Box, IconButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { addContact } from 'hw-08-phonebook/redux/currentlyEditedItem';
import { userSelector } from 'hw-08-phonebook/redux/userApi';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function TitleBar() {

    const user=useSelector(userSelector);
    console.log(user);
    const dispatch=useDispatch();
    const [anchorElMenu,setAnchorElMenu]=useState(null);

    function handleOpenLoginMenu(event){
        setAnchorElMenu(event.currentTarget);
    }
    function handleCloseLoginMenu(){
        setAnchorElMenu(null);
    }

    function handleOpenAddContact(){
      dispatch(addContact());
    }
    

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenLoginMenu}
          >
            <MenuIcon  />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElMenu)}
            onClose={handleCloseLoginMenu}
          >
              <ListItemText primary={'username'} secondary={'mail'}/>
              <MenuItem onClick={handleCloseLoginMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
          </Menu>
        {/* </Box> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Contacts
        </Typography>
        <IconButton color="inherit" onClick={handleOpenAddContact}>
          <AddCircle/>
        </IconButton>
      </Toolbar>
      </AppBar>
    </Box>
  )
}
