import { NextPage } from "next";
import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Container,
  CssBaseline,
  makeStyles,
  Avatar,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Box,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const TestForm: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
        Sign Up
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Form>

    // <Form>
    //   <Field name="email" type="email" placeholder="Email" component={TextField} />
    //   <ErrorMessage name="email" component="div" />
    //   <Field name="password" type="password" placeholder="Password" component={TextField} />
    //   <ErrorMessage name="password" component="div" />
    //   <Field name="confirmPassword" type="password" placeholder="Confirm password" component={TextField} />
    //   <ErrorMessage name="confirmPassword" component="div" />
    //   <button type="submit">Submit</button>
    //   <button type="reset">Reset</button>
    // </Form>
  );
};

export default TestForm;
