import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Box, Tabs, Toolbar, Typography, Tab } from "@mui/material"
// import {useSelector} from 'react-redux'
import { authActions} from '../Store/index'
// import { useDispatch } from 'react-redux';
import axios from "axios"
import { useContext } from 'react';
import { Logcontext } from '../Context/LogContext';

axios.defaults.withCredentials = true;

const Navigation = () => {

    const {isLoggedIn, logout} = useContext(Logcontext)

    // const dispatch = useDispatch()

    // const isLoggedIn = useSelector((state) => state.isLoggedIn);
    // console.log(isLoggedIn)

    const [value, setValue] = useState();

    const onRequestSender = async () => {
        const response = await axios.post("http://localhost:5000/logout", null, {
            withCredentials: true,
        })
        if(response.status == 200) {
            return response
        }
        return new Error("Something went wrong")
    }

    const logoutHandler = () => {
        onRequestSender().then(() => logout())
        // onRequestSender().then(() => dispatch(authActions.logout()))
    }

  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h4'>JWT</Typography>
                <Box sx={{ marginLeft: "auto"}}>
                    <Tabs 
                    textColor='inherit'
                    onChange={(e, val) => setValue(val)}
                    value={value}>
                        {!isLoggedIn && (
                            <>
                                <Tab label="Login" LinkComponent={Link} to="/login"/>
                                <Tab label="Signup" LinkComponent={Link} to="/signup"/>
                            </>
                        )}
                        { isLoggedIn && <Tab label="Logout" onClick={logoutHandler} LinkComponent={Link} to="/"/>}
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
        <Outlet/>
    </div>
  )
}

export default Navigation