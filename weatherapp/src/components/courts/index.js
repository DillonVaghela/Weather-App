// import preact
import { h, render, Component } from 'preact';

// import stylesheet
import style from '../iphone/style';

export default class Courts extends Component
{

    constructor( props )
    {

        super( props );

    }

    render()
    {

        return (

                   <div>

                       <h1 class = { style.h69 } > Courts Page </h1>

                       <iframe width = "350" height = "300" frameborder = "0" style = "border:0" src =
                       "https://www.google.com/maps/embed/v1/view?zoom=10&center=51.5074,-0.1278&key=AIzaSyCxFPAn4Toe1YJdjBWz_Z8SiY0L3GWTEts"
                       allowfullscreen></iframe>

                   </div>

               );
    }
}
