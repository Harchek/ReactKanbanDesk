import React from 'react';
import Button from '@material-ui/core/button'
import { AppBar, Container, Toolbar, Typography, Paper, Grid, Box, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { classicNameResolver } from 'typescript';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from '@material-ui/core/Avatar';

import { column } from './components/column';

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
  avatar:{
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
function App() {
  const classes = useStyles();
  return (
    <>
      {/* <AppBar position="fixed" color='inherit'>
        <Container fixed>
          <Toolbar>
            <Typography variant="h6" className={classes.typographyBar}>ReactKanbanApp by Harchek</Typography>
          </Toolbar>
        </Container>
      </AppBar> */}
      
    {/* <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment> */}
    <column/>
<Grid container
xs={12} 
spacing={4} 
direction="row"
justifyContent="flex-start"
alignItems="flex-end"
justify-content="start">
  <Paper className={classes.paper}>
    <Grid container>
      <Grid item xs={4}>
        <Avatar className={classes.avatar}>1</Avatar>
      </Grid>
      <Grid item xs={8}>
        <header>
          To do
        </header>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardActionArea>
          <CardMedia
            component="img"
            height="189"
            image="C:\Users\Админ\Desktop\Another\Camp"
            alt="game controller"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lorem ipsum
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu purus nec libero cursus vehicula.
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Paper>
</Grid>
    </>
  );
}
export default App;