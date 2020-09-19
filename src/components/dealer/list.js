import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import { Link } from 'react-router-dom';

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<Link to="/dealer/dash">
					<PeopleIcon />
				</Link>
			</ListItemIcon>
			<ListItemText primary="Products" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<Link to="/dealer/dash/setting">
					<ToggleOffIcon />
				</Link>
			</ListItemIcon>
			<ListItemText primary="Settings" />
		</ListItem>
	</div>
);
