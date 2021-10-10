import React from 'react';
import Button from '@material-ui/core/button'
import { Container, Toolbar, Typography, Paper, Grid, Box, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { classicNameResolver } from 'typescript';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from '@material-ui/core/Avatar';
import { AppBar } from './components/AppBar';
import { BoardColumn } from './components/BoardColumn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(18),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "#f6f8fa",
    width: "7vh",
    height: "60vh",
    position: "relative",
    top: "10vh",
    left: "30px",
    background: 'inherit',

  },
  mainGlobalDesk: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  typographyBar: {
    position: "relative",
    top: "0vh",
    right: "55vh",
  },
  typographyTextes: {
    position: "relative",
    bottom: "14vh",
    right: "9vh",
    display: "flex",
    justifyContent: "space-between"
  },
  avatar: {
    position: "relative",
    bottom: "14vh",
    right: "14vh"
  },
  card: {
    position: "fixed",
    top: "30vh",
    left: "25px",
    width: "335px",

  },
}))

enum ColumnNames {
  TO_DO = 'TO DO',
  IN_PROGRESS = 'IN PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE',
}

function App() {
  const classes = useStyles();
  return (
    <Grid container
      xs={12}
      spacing={4}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      justify-content="start"
    >
      <Grid item xs={12}>
        <AppBar />
      </Grid>
      <Grid item xs={3}>
        <BoardColumn columnName={ColumnNames.TO_DO} avatarNumber={1} />
      </Grid>
      <Grid item xs={3}>
        <BoardColumn columnName={ColumnNames.IN_PROGRESS} avatarNumber={3} />
      </Grid>
      <Grid item xs={3}>
        <BoardColumn columnName={ColumnNames.REVIEW} avatarNumber={4} />
      </Grid>
      <Grid item xs={3}>
        <BoardColumn columnName={ColumnNames.DONE} avatarNumber={5} />
      </Grid>
    </Grid>
  );
}

export default App;
