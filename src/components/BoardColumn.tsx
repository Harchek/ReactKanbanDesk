import React from 'react';
import {
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
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1
    // },
    // title: {
    //     flexGrow: 1
    // },
    paper: {
        height: "60vh",
        marginTop: '10vh'

    },
    // mainGlobalDesk: {
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center"
    // },
    // typographyBar: {
    //     position: "relative",
    //     top: "0vh",
    //     right: "55vh",
    // },
    // typographyTextes: {
    //     position: "relative",
    //     bottom: "14vh",
    //     right: "9vh",
    //     display: "flex",
    //     justifyContent: "space-between"
    // },
    // avatar: {
    //     position: "relative",
    //     bottom: "14vh",
    //     right: "14vh"
    // },
    // card: {
    //     position: "fixed",
    //     top: "30vh",
    //     left: "25px",
    //     width: "335px",

    // },
}))

interface BoardColumnProps {
    columnName: string;
    avatarNumber: number;
}

export function BoardColumn(props: BoardColumnProps): JSX.Element {
    const classes = useStyles();
    const { columnName, avatarNumber } = props;

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={2} container justifyContent="center">
                    <Avatar >{avatarNumber}</Avatar>
                </Grid>
                <Grid item container justifyContent="center" xs={10}>
                    <Typography variant="h6">
                        {columnName}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}