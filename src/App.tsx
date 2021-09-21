import React from 'react';
import Button from '@material-ui/core/button'
import { AppBar, Container, Toolbar, Typography, Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { classicNameResolver } from 'typescript';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from '@material-ui/core/Avatar';

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
    width: "5vh",
    height: "40vh",
    position: "relative",
    top: "29vh",
    left: "20px",
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
    bottom: "18vh",
    right: "9vh",
    display: "flex", 
    justifyContent: "space-between"
  },
  avatar:{
    position: "relative",
    bottom: "14vh",
    right: "14vh"
  },


}))







function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color='inherit'>
        <Container fixed>
          <Toolbar>
            <Typography variant="h6" className={classes.typographyBar}>ReactKanbanApp by Harchek</Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>

      <Grid container
       xs={12} 
       spacing={4} 
       direction="row"
       justifyContent="flex-start"
       alignItems="flex-end"
       justify-content="start"
       >
        <Grid item xs={2}>
          <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>0</Avatar>
            <Typography variant="h6" className={classes.typographyTextes}>
              Backlog
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>1</Avatar>
          <Typography variant="h6" className={classes.typographyTextes}>
              To do
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>3</Avatar>
          <Typography  variant="h6" className={classes.typographyTextes}>
              In progress
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>4</Avatar>
          <Typography  variant="h6" className={classes.typographyTextes}>
            Done
          </Typography>
          </Paper>
        </Grid>
      </Grid>



      
    </>
  );
}




export default App;