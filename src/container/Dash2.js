import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '../components/table';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9)
		}
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 150
	}
}));

export default function Dashboard() {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />

			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6} lg={4}>
						<Paper className={fixedHeightPaper}>
							<Typography component="h2" variant="h6" color="primary" gutterBottom>
								Total
							</Typography>
							<Typography component="p" variant="h4">
								11
							</Typography>
							<Typography color="textSecondary" className={classes.depositContext}>
								on 15 March, 2019
							</Typography>
						</Paper>
					</Grid>
					{/* Recent Deposits */}
					<Grid item xs={12} md={4} lg={4}>
						<Paper className={fixedHeightPaper}>
							<Typography component="h2" variant="h6" color="primary" gutterBottom>
								Open
							</Typography>
							<Typography component="p" variant="h4">
								10
							</Typography>
							<Typography color="textSecondary" className={classes.depositContext}>
								on 15 March, 2019
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} md={3} lg={4}>
						<Paper className={fixedHeightPaper}>
							<Typography component="h2" variant="h6" color="primary" gutterBottom>
								Close
							</Typography>
							<Typography component="p" variant="h4">
								11
							</Typography>
							<Typography color="textSecondary" className={classes.depositContext}>
								on 15 March, 2019
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				<Box pt={4} />
				<NavLink to="/dash/edit">
					<Button variant="contained" color="primary">
						Add
					</Button>
				</NavLink>
				<br />
				<br />
				<Table />
			</Container>
		</main>
	);
}
