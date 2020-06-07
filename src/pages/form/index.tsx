import { NextPage } from "next";
import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
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
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { TextField } from "formik-material-ui";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const FormIndexPage: NextPage = () => {
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

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    const { setSubmitting } = formikHelpers;
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().max(20, "タイトルは20文字以内で入力してください").required("苗字は必須項目です"),
    lastName: Yup.string().max(20, "本文は20文字以内で入力してください").required("名前は必須項目です"),
    email: Yup.string().email("正しいメールアドレスではありません").required("メールアドレスは必須です"),
    password: Yup.string().min(4, "パスワードは最低4文字です。").required("passwordは必須です。"),
  });

  const classes = useStyles();

  return (
    <Formik initialValues={defaultValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="苗字"
                  autoFocus
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="名前"
                  name="lastName"
                  autoComplete="lname"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  name="email"
                  autoComplete="email"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="利用規約に同意する"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Sign inはこちら
                </Link>
              </Grid>
            </Grid>
          </Form>
        </div>
      </Container>
    </Formik>
  );
};

export default FormIndexPage;
