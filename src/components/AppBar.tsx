import React from 'react';
import Button from '@material-ui/core/button'
import {
  AppBar as MaterialAppBar,
  Container,
  Toolbar,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { classicNameResolver } from 'typescript';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  typographyBar: {
    position: "relative",
    top: "0vh",
    right: "55vh",
  }
}))

export function AppBar(): JSX.Element {
  const classes = useStyles();
  return (
    <MaterialAppBar position="fixed" color='inherit'>
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" className={classes.typographyBar}>ReactKanbanApp by Harchek</Typography>
        </Toolbar>
      </Container>
    </MaterialAppBar>
  );
}