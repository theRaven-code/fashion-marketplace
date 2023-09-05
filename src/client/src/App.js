import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Switch,
	Menu,
	MenuItem,
	TextField,
	Badge,
	Avatar,
	Typography,
} from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Home from './pages/Home';
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkModeChange = () => {
		setDarkMode(!darkMode);
	};

	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleCartOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCartClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'cart-popover' : undefined;

	return (
		<div>
			<BrowserRouter>
				<AppBar position="static" sx={{ bgcolor: '#ff69b4' }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							Product Name
						</Typography>
						<TextField label="Search" variant="outlined" />
						<IconButton>
							<SearchIcon />
						</IconButton>
						{/* Add other components to the toolbar */}
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							SilkyDreams Lingerle
						</Typography>
						<Switch
							checked={darkMode}
							onChange={handleDarkModeChange}
						/>
						<IconButton onClick={handleCartOpen}>
							<Badge badgeContent={0} color="error">
								<ShoppingCartIcon />
							</Badge>
							<IconButton onClick={handleMenuOpen}>
								<Avatar />
								<AccountCircleIcon />
							</IconButton>
							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleMenuClose}
							>
								<MenuItem onClick={handleMenuClose}>
									Profile
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>
									My account
								</MenuItem>
								<MenuItem onClick={handleMenuClose}>
									Logout
								</MenuItem>
							</Menu>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/cart" element={<ShoppingCart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
