// import preact
import { h, render, Component } from 'preact';

// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';

// import jquery for API calls
import $ from 'jquery';

// import tabs : home + courts + favourites + friends + search
import Home from '../home';
import Courts from '../courts';
import Fave from '../fave';
import Friends from '../friends';
import Search from '../search';

export default class Iphone extends Component
{

		// var Iphone = React.createClass({

		// alt button color is: #BAD4FF

		// a constructor with initial set states
		constructor( props )
		{

				super( props );

				// set states to show which tabs displayed
        this.state.displayHome = true;
        this.state.displayCourts = false;
        this.state.displayFave = false;
        this.state.displayFriends = false;
        this.state.displaySearch = false;

				// set states to check which tabs are currently active
        this.state.homeStatus = false;
        this.state.tennisStatus = true;
        this.state.faveStatus = true;
        this.state.friendStatus = true;
        this.state.searchStatus = true;

		}

		// the main render method for the iphone component
		render()
    {

				// example ternary IF statement
		    // const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

		    return (

					        <div class = { style.container } >

								            <div class = { style.navbar } >

										            <div class = { style.navcol } >
										                { this.state.homeStatus ? <button class = { style.homebutton } onClick = { this.homeState } > </button> : null }
										                { !this.state.homeStatus ? <button class = { style.homebuttonalt } > </button> : null }
										            </div>

										            <div class = { style.navcol }>
										                { this.state.tennisStatus ? <button class = { style.tennisbutton } onClick = { this.tennisState } > </button> : null }
										                { !this.state.tennisStatus ? <button class = { style.tennisbuttonalt } > </button> : null }
										            </div>

										            <div class = { style.navcol }>
										                { this.state.faveStatus ? <button class = { style.favebutton } onClick = { this.faveState } > </button> : null }
										                { !this.state.faveStatus ? <button class = { style.favebuttonalt } > </button> : null }
										            </div>

										            <div class = { style.navcol }>
										                { this.state.friendStatus ? <button class = { style.friendbutton } onClick = { this.friendState } > </button> : null }
										                { !this.state.friendStatus ? <button class = { style.friendbuttonalt } > </button> : null }
										            </div>

										            <div class = { style.navcol }>
										                { this.state.searchStatus ? <button class = { style.searchbutton } onClick = { this.searchState } > </button> : null }
										                { !this.state.searchStatus ? <button class = { style.searchbuttonalt } > </button> : null }
										            </div>

								            </div>

										        <div class={ style.tab }> { this.state.displayHome ? <Home/ > : null } </div>
										        <div class={ style.tab }> { this.state.displayCourts ? <Courts/ > : null } </div>
										        <div class={ style.tab }> { this.state.displayFave ? <Fave/ > : null } </div>
										        <div class={ style.tab }> { this.state.displayFriends ? <Friends/ > : null } </div>
										        <div class={ style.tab }> { this.state.displaySearch ? <Search/ > : null } </div>

					        </div>

		           );
		}

		/* this method displays on screen all the components related to the 'Home' tab + hides everything else */
    homeState = () =>
		{

				this.setState(
				{

						homeStatus 		 : false,
				    tennisStatus 	 : true,
				    faveStatus 		 : true,
				    friendStatus 	 : true,
				    searchStatus   : true,

				    displayHome 	 : true,
				    displayCourts  : false,
				    displayFave 	 : false,
				    displayFriends : false,
				    displaySearch  : false,

			  }

			);

	 }

	 /* this method displays on screen all the components related to the 'tennis racket' tab + hides everything else */
   tennisState = () =>
	 {

				this.setState(
				{
	      		homeStatus     : true,
			      tennisStatus   : false,
			      faveStatus     : true,
			      friendStatus 	 : true,
			      searchStatus   : true,

			      displayHome    : false,
			      displayCourts  : true,
			      displayFave    : false,
			      displayFriends : false,
			      displaySearch  : false,
				}

			);

	 }

	 /* this method displays on screen all the components related to the 'favourites' tab + hides everything else */
   faveState = () =>
	 {

				this.setState(
				{

						homeStatus     : true,
			      tennisStatus   : true,
			      faveStatus     : false,
			      friendStatus   : true,
			      searchStatus   : true,

			      displayHome    : false,
			      displayCourts  : false,
			      displayFave    : true,
			      displayFriends : false,
			      displaySearch  : false,

				}

			);

	 }

	 /* this method displays on screen all the components related to the 'friends' tab + hides everything else */
	 friendState = () =>
	 {

			 this.setState(
			 {

						homeStatus     : true,
						tennisStatus   : true,
						faveStatus     : true,
						friendStatus   : false,
						searchStatus   : true,

						displayHome    : false,
						displayCourts  : false,
						displayFave    : false,
						displayFriends : true,
						displaySearch  : false,

				}

	  	);

		}

	 /* this method displays on screen all the components related to the 'search' tab + hides everything else */
    searchState = () =>
		{

				this.setState(
				{

						homeStatus: true,
			      tennisStatus : true,
			      faveStatus : true,
			      friendStatus : true,
			      searchStatus : false,

			      displayHome : false,
			      displayCourts : false,
			      displayFave : false,
			      displayFriends : false,
			      displaySearch : true,

			  }

			);

		}

}
