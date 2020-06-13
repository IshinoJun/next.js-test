import index from "./index.module.scss";
import { NextPage } from "next";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  CssBaseline,
  makeStyles,
  Avatar,
  Typography,
  Grid,
  Button,
  Link,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import * as Yup from "yup";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  checked: boolean;
}

const ReactHookFormIndexPage: NextPage = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().max(20, "タイトルは20文字以内で入力してください").required("苗字は必須項目です"),
    lastName: Yup.string().max(20, "本文は20文字以内で入力してください").required("名前は必須項目です"),
    email: Yup.string().email("正しいメールアドレスではありません").required("メールアドレスは必須です"),
    password: Yup.string().required("パスワードは必須です。").min(4, "パスワードは最低4文字です。"),
  });

  const { control, handleSubmit, errors, watch } = useForm<Values>({ mode: "onBlur", validationSchema });

  const watchCheckbox = watch("checked");

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const onSubmit = (values: Values) => console.log(values);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                control={control}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="苗字"
                defaultValue=""
                error={!!errors.firstName?.message}
              />
              {errors.firstName && <p className={index.error}>{errors.firstName.message}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                control={control}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="名前"
                name="lastName"
                autoComplete="lname"
                defaultValue=""
                error={!!errors.lastName?.message}
              />
              {errors.lastName && <p className={index.error}>{errors.lastName.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="メールアドレス"
                name="email"
                autoComplete="email"
                defaultValue=""
                error={!!errors.email?.message}
              />
              {errors.email && <p className={index.error}>{errors.email.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
                defaultValue=""
                error={!!errors.password?.message}
              />
              {errors.password && <p className={index.error}>{errors.password.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller as={Checkbox} name="checked" control={control} defaultValue={false} color="primary" />
                }
                label="利用規約に同意する"
              />
            </Grid>
          </Grid>
          <Button
            disabled={!watchCheckbox}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Sign inはこちら
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ReactHookFormIndexPage;
