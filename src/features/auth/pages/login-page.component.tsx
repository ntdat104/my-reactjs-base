import { Box, Button, CircularProgress, makeStyles, Paper, Typography } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import * as React from "react";
import { authActions, selectIsLogging } from "../auth-slice";

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

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color="inherit" />} &nbsp; Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default React.memo(LoginPage);
