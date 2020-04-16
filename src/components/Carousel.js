import React, { Component } from "react";

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
         items: [
             {
                 id: 0,
                 title: "Catch of The Day",
                 subTitle: "An Online Fresh SeaFood Store",
                 imgSrc: "holla",
                 link: "https://fish-store-jide.netlify.app/",
                 selected: false
             },
             {
                id: 1,
                title: "PPMT",
                subTitle: "A Project Management App",
                imgSrc: "holla",
                link: "https://projectmanagementjide.herokuapp.com/",
                selected: false
            },
            {
                id: 2,
                title: "Landing Page",
                subTitle: "An Responsive, accessible website",
                imgSrc: "holla",
                link: "https://landingpage-withbootstrap-unclejide1.netlify.app/",
                selected: false
            },
            ]
        };
    }

    render(){
        return(
            <p> Carousel Works</p>
        )
    }

}

export default Carousel;