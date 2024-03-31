import React from 'react';
import "./main.scss";
import {ReactComponent as HomeIcon} from "../assets/icon-nav-home.svg";
import {ReactComponent as MoviesIcon} from "../assets/icon-nav-movies.svg";
import {ReactComponent as TvSeriesIcon} from "../assets/icon-nav-tv-series.svg";
import {ReactComponent as BookmarkIcon} from "../assets/icon-nav-bookmark.svg";
import {Link, NavLink} from "react-router-dom";



function Sidebar(props: any) {
	return (
		<div className='sidebar'>
			<div className="content">
				<img className='logo' src={require("../assets/logo.svg").default} alt="app logo" />
				<div className="nav">
					{
						navLinks.map(link=>(
							<NavLink className='link' key={link.label} to={link.to}>
								{link.icon}
							</NavLink>
						))
					}
				</div>
				<Link 
					to="/account"
					className="profile">
					<img src={require("../assets/image-avatar.png")} alt="user profile image" />
				</Link>
			</div>
		</div>
	)
}

export default Sidebar;

const navLinks = [
	{
		icon: <HomeIcon className='navIcon'/>,
		label: "Home",
		to: "/"
	},
	{
		icon: <MoviesIcon className='navIcon'/>,
		label: "movies",
		to: "movies"
	},
	{
		icon: <TvSeriesIcon className='navIcon'/>,
		label: "tv-series",
		to: "tvseries"
	},
	{
		icon: <BookmarkIcon className='navIcon'/>,
		label: "bookmarks",
		to: "bookmarks"
	},
]