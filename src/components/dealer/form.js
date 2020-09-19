import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Button, Paper, Container } from '@material-ui/core/';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: 100,
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: '100%'
	},
	form: {
		margin: theme.spacing(1),
		width: '100ch'
	}
}));

export default function SignIn() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	console.log(fixedHeightPaper);
	return (
		<Container>
			<Paper className={fixedHeightPaper}>
				<h1>Add Form</h1>
				<form autoComplete="off">
					<TextField className={classes.form} id="standard-basic" label="Username" />
					<TextField type="password" className={classes.form} id="standard-basic" label="Password" />
					<TextField className={classes.form} id="standard-basic" label="Address" />
					<TextField className={classes.form} id="standard-basic" label="Extra Info" />
					<TextField className={classes.form} id="standard-basic" label="Store Name" />
					<TextField className={classes.form} id="standard-basic" label="Dealer name " />
					<TextField className={classes.form} type="number" id="standard-basic" label="Phone" />
					<TextField className={classes.form} type="email" id="standard-basic" label="Email" />

					<br />
					<br />
					<Button type="submit" variant="contained" color="primary">
						Add Dealer
					</Button>
				</form>
			</Paper>
		</Container>
	);
}
