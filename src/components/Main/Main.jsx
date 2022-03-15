import React from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import Form from './Form/Form';

import useStyles from './styles';
import List from './List/List';

const Main = () => {

    const classes=useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />

            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100</Typography>
                <Typography ariant="subtitle1" style={{lineHeight: '1.5rem',marginTop:'20px'}}>
                    {/* */}
                    Try Saying
                </Typography>
                <Divider />

                <Form />
            </CardContent>

            <CardContent className={classes.cardContent}>
            <Grid container spacing ={2}>
                  <Grid item cs={12}>
                   <List />
                  </Grid>
            </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
