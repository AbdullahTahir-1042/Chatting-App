import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from '../components/Input';
import { signin, signup } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #f7f8fa, #e3e6ec)',
        position: 'relative',
        overflow: 'hidden',
    },
    paper: {
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        backgroundColor: '#ffffff',
        width: '100%',
        maxWidth: 420,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: '#4a6ee0',
        marginBottom: theme.spacing(2),
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        fontWeight: 600,
        marginBottom: theme.spacing(1),
        color: '#2d2f33',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: theme.spacing(1.2),
        backgroundColor: '#4a6ee0',
        color: '#fff',
        fontWeight: 600,
        fontSize: '1rem',
        borderRadius: theme.spacing(1),
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#3f5bcc',
        },
    },
    switchText: {
        color: '#4a6ee0',
        cursor: 'pointer',
        fontWeight: 500,
        textAlign: 'center',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    footer: {
        position: 'absolute',
        bottom: theme.spacing(1),
        fontSize: '0.85rem',
        color: '#777',
        textAlign: 'center',
    },
}));

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const switchMode = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="h5" className={classes.title}>
                        {isSignUp ? 'Create an Account' : 'Sign In'}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} />
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input
                                name="password"
                                label="Password"
                                handleChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                handleShowPassword={handleShowPassword}
                            />
                            {isSignUp && (
                                <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />
                            )}
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <Typography
                            variant="body2"
                            className={classes.switchText}
                            onClick={switchMode}
                        >
                            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Typography>
                    </form>
                </Paper>
            </Container>

            <footer className={classes.footer}>
                &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </footer>
        </div>
    );
};

export default Auth;
