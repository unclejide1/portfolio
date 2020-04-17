import React, { Component } from "react";

import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Catch of The Day",
          subTitle: "An Online Fresh SeaFood Store",
          imgSrc: require("../assets/other/catchoftheday.png"),
          link: "https://fish-store-jide.netlify.app/",
          selected: false,
        },
        {
          id: 1,
          title: "PPMT",
          subTitle: "A Project Management App",
          imgSrc: require("../assets/other/projectmanagerapp.png"),
          link: "https://projectmanagementjide.herokuapp.com/",
          selected: false,
        },
        {
          id: 2,
          title: "Landing Page",
          subTitle: "An Responsive, accessible website",
          imgSrc: require("../assets/other/landingpage.png"),
          link: "https://landingpage-withbootstrap-unclejide1.netlify.app/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [ ...this.state.items ];

    items[id].selected = items[id].selected ? false : true;

    for(let i =0; i < items.length; i++){
      
    }
    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
        <Container fluid = {true}>
            <Row className = "justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
  }
}

export default Carousel;
