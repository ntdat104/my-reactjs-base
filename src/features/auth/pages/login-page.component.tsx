import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  makeStyles,
  Paper,
  Select,
  Typography,
  MenuItem,
} from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useState } from "react";
import { authActions, selectIsLogging } from "../auth-slice";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },

  box: {
    padding: theme.spacing(3),
  },
}));

const LoginPage: React.FC = () => {
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(selectIsLogging);

  const handleLoginClick = () => {
    // TODO: Get username + pwd from login form
    dispatch(
      authActions.login({
        username: "",
        password: "",
      })
    );
  };

  const handleChange = (e: any) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.box}>
        <Typography variant="h5" component="h1">
          {t("login.title")}
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color="inherit" />} &nbsp; Fake Login
          </Button>
        </Box>
        <Box mt={4}>
          <FormControl fullWidth variant="outlined" color="secondary">
            <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={lang}
              onChange={handleChange}
              label="Language"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="vi">Vietnamese</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>
    </div>
  );
};

export default React.memo(LoginPage);
