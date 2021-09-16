import React from 'react';
import Button from '@material-ui/core/button'
import { AppBar, Container, Toolbar, Typography, Paper, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { classicNameResolver } from 'typescript';

const useStyles = makeStyles((theme) => ({
root: {
  flexGrow: 1
},
title: {
  flexGrow: 1
},
mainGlobalDesk: {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}
}))

function App() {
  const classes = useStyles();
  return (
<>

   <AppBar position = "fixed" color = 'inherit'>
     <Container fixed>
       <Toolbar>
         <Typography variant="h6">ReactKanbanApp by Harchek</Typography>
       </Toolbar>
     </Container>
   </AppBar>

<main>
  <Paper className={classes.mainGlobalDesk}
    style={{ backgroundImage: `(https://unsplash.com/photos/OoDqYwYM4JI)`}}>
  </Paper>
  <Container fixed>
    <Grid container>
      <Grid item md={6}></Grid>
    </Grid> 
  </Container>
</main>


</>  
  );
}

export default App;
