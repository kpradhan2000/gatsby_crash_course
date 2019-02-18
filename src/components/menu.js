import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MenuItems = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

const menu = () => {
	return (
		<MenuItems>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/services">Services</Link>
			</li>
			<li>
				<Link to="/blogs">Blogs</Link>
			</li>
		</MenuItems>
	);
};

export default menu;
