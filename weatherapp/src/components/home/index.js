// import preact
import { h, render, Component } from 'preact';

//import stylesheet
import style from '../iphone/style';

// import jQuery
import $ from 'jquery';


export default class Home extends Component
{

    constructor( props )
    {

        super( props );

        /* set state for country */
        this.state.COUNTRY   = "" ;

        /* set state for city */
        this.state.CITY      = "" ;

        /* set state for wind speed */
        this.state.WINDSPEED = "" ;

        /* set state for humidity */
        this.state.HUMIDITY  = "" ;

        /* set state for temperature */
        this.state.temp      = "" ;

        /* set state for URL for embeded map */
        this.state.mapurl    = "" ;

        /* show host location's weather as soon as app. has started */
        this.fetchIPInfo() ;

    }

    // a call to fetch weather data via wunderground
    fetchWeatherData = () =>
    {

        // API URL with a structure of : http://api.wunderground.com/api/key/feature/q/country-code/city.json

        /*
                        neringa's weather API key = c78f1a13d2ca6971
                        our weather API key       = c5745d0a313c195d
        */

        var COUNTRY = this.state.COUNTRY ;
        var CITY    = this.state.CITY ;

        var url = "http://api.wunderground.com/api/c5745d0a313c195d/conditions/q/" + COUNTRY + "/" + CITY + ".json";

        /* jQuery used here to use wunderground's API */
        $.ajax(
                {

                        url: url,
                        dataType: "jsonp",
                        success : this.parseWeatherResponse,
                        error : function(req, err){ console.log('API call failed ' + err); }

                }

        )

        // once the data grabbed, hide the button
        this.setState({ display: false });

    }

    /* a call to fetch IP information via ipinfo */
    fetchIPInfo = () =>
    {

        var url = "http://ipinfo.io";

        /* jQuery used here to use ipinfo's API */
        $.ajax(
                {
                      url: url,
                      dataType: "jsonp",
                      success : this.parseIPResponse,
                      error : function(req, err){ console.log('API call failed ' + err); }
              }

        )

        // once the data grabbed, hide the button
        this.setState({ display: false });

    }

  	// rendering a function when the button is clicked
  	render()
    {

         // check if temperature data is fetched, if so add the sign styling to the page
         const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
  	     return (
                <div>
                    <h1 class={ style.h69 }>{ this.state.locate }</h1>
                    <div class={ style.temperature }>{ this.state.temp }<tiny> ° &nbsp; </tiny> <degree> c </degree> </div>
                    <div class={ style.conditions }>{ this.state.cond }</div>

                    <div class= { style.winfo }>
                    <div class = { style.col1 }> <img src="../../assets/pictures/drop.png" alt="not working :(" style="width:30px;height:50px;"/><subtext><p>&nbsp; { this.state.HUMIDITY }</p></subtext></div>
                    <div class = { style.col4 }> <img src="../../assets/pictures/whiteline2.png" alt="not working :(" style="width:5px;height:60px;"/> </div>
                    <div class = { style.col2 }> <img src="../../assets/pictures/drop.png" alt="not working :(" style="width:30px;height:50px;"/><subtext><p>idk what to put</p></subtext></div>
                    <div class = { style.col5 }> <img src="../../assets/pictures/whiteline2.png" alt="not working :(" style="width:5px;height:60px;"/> </div>
                    <div class = { style.col3 }> <img src="../../assets/pictures/wind.png" alt="not working :(" style="width:50px;height:50px;"/><subtext><p>{ this.state.WINDSPEED } mph </p></subtext></div>
                    </div>
                    <div class= { style.borderline }> <img src="../../assets/pictures/whiteline.png" alt="not working :(" style="width:380px;height:5px;"/> </div> <subtext2> NEAREST COURTS </subtext2>
                    <div class= { style.mapinfo }><iframe width="380" height="170" frameborder="0" style="border:0" src={this.state.mapurl} allowfullscreen></iframe></div>
                    <div class= { style.borderline2 }> <img src="../../assets/pictures/whiteline.png" alt="not working :(" style="width:300px;height:5px;"/> </div>

                    <div class= { style.textblock }>
                        <div class= { style.leftcol }>
                            <p class= { style.ls }> 123 urnans yard</p>
                            <p class= { style.ls }>mousset road</p>
                        </div>
                        <div class= { style.rightcol }>
                            <p class= { style.setleft }> 545ft</p>
                        </div>
                    </div>

                    <div class= { style.borderline2 }> <img src="../../assets/pictures/whiteline.png" alt="not working :(" style="width:300px;height:5px;"/> </div>
                    <div class= { style.textblock }>
                        <div class= { style.leftcol }>
                            <p class= { style.ls }> 456 Deets place</p>
                            <p class= { style.ls }>Juj Street</p>
                        </div>
                        <div class= { style.rightcol }>
                            <p class= { style.setleft }> 1.1m</p>
                        </div>
                    </div>

                    <div class= { style.borderline2 }> <img src="../../assets/pictures/whiteline.png" alt="not working :(" style="width:300px;height:5px;"/> </div>
                    <div class= { style.textblock }>
                        <div class= { style.leftcol }>
                            <p class= { style.ls }> 789 pokemon avenue </p>
                            <p class= { style.ls }> KHF lane </p>
                        </div>
                        <div class= { style.rightcol }>
                            <p class= { style.setleft }> 2.0m</p>
                        </div>
                    </div>
                </div>

  		);
  	}

    parseWeatherResponse = ( parsed_json ) =>
		{

				var location   = parsed_json['current_observation']['display_location']['city'];
				var temp_c     = parsed_json['current_observation']['temp_c'];
				var conditions = parsed_json['current_observation']['weather'];
        var wind_speed = parsed_json['current_observation']['wind_mph'] ;
				var humidity   = parsed_json['current_observation']['relative_humidity'] ;

				// set states for fields so they could be rendered later on
				this.setState(

                        {
                    				locate    : location,
                    				temp      : temp_c,
                    				cond      : conditions,
                            WINDSPEED : wind_speed,
                    				HUMIDITY  : humidity
                				}

        );

		}

		parseIPResponse = ( parsed_json ) =>
		{

				// ip
				var parsedIP       = parsed_json['ip'];

				// city
				var parsedCity     = parsed_json['city'];

				// region
				var parsedRegion   = parsed_json['region'];

				// country
				var parsedCountry  = parsed_json['country'];

				// location = latitute + longlitude
				var parsedLocation = parsed_json['loc'];

				// set states for fields so they could be rendered later on
				this.setState(

                      {

                  				COUNTRY  :  parsedCountry,
                  				CITY     :  parsedCity,
                          mapurl   :  "https://www.google.com/maps/embed/v1/place?key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts&q=" + parsedLocation

              				}

        );

				// a call to fetchWeatherData()
				this.fetchWeatherData();

		}

}
