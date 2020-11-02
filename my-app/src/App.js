import './App.css'
import React from 'react';
import axios from 'axios';
import shuffle from 'lodash/shuffle';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import TarotCardList from './TarotCardList.jsx';
import photos from './photos.js';
import Search from './Search.jsx';
import DisplayOne from './DisplayOne.jsx';
import DisplayThree from './DisplayThree.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [],
      showDeck: false,
      search: '',
      cardToDisplay: false,
      cardListToDisplay: [],
    };
    this.getAllCards = this.getAllCards.bind(this);
    this.toggleDeckVisability = this.toggleDeckVisability.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clickOne = this.clickOne.bind(this);
    this.clickThree = this.clickThree.bind(this);
  }
  componentDidMount() {
    this.getAllCards();
  };

  getAllCards() {
    axios.get(`https://rws-cards-api.herokuapp.com/api/v1/cards`)
        .then((res) => {
          const mappedList = res.data.cards.map((card, i) => {
            card.url = photos[i];
            return card});
          this.setState({cardList: mappedList});
        })
        .catch((err) => console.error(err));
  }

  handleSearch(e) {
    this.setState({search: e.target.value.toLowerCase()});
  }

  clickOne() {
    let card = this.state.cardList[Math.floor(Math.random() * 78)];
    this.setState({
      cardToDisplay: card
    });
  }

  toggleDeckVisability(e) {
    e.preventDefault();
    this.setState({showDeck : !this.state.showDeck});
  }

  clickThree() {
    let threeCards = shuffle(this.state.cardList).slice(-3);
    this.setState({
      cardListToDisplay: threeCards
    });
  }

  render() {
    const {cardList, search, cardToDisplay, cardListToDisplay, showDeck} = this.state;
    let filteredTarot;
    search.length >= 3
      ? filteredTarot = cardList.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.meaning_rev.toLowerCase().includes(search.toLowerCase()) ||
      card.meaning_up.toLowerCase().includes(search.toLowerCase()))
      : filteredTarot = cardList;
    return (
      <div>
        <Container className="tarot-container">
          <h1>gain insight into the past, present, or future</h1>
          {/* <Col> */}
          <Image src="https://i5.walmartimages.com/asr/366e8cb3-08a9-4ba0-8f7a-d04d0a5a2398_1.fe42737149d0bdaafa44fb0ec7192d8c.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" className="crystal-ball-img" width="400" height="400" />
          {/* </Col> */}
          <Search
            search={search}
            handleSearch={this.handleSearch} />
          <Button
            variant="secondary"
            onClick={this.toggleDeckVisability}
          >Explore the deck</Button>
          <Button
            variant="secondary"
            onClick={this.clickOne}
          >Let fate choose a card for you!</Button>
          <Button
            variant="secondary"
            onClick={this.clickThree}
          >Three-card reading</Button>
          <div>
            <DisplayOne
              card={cardToDisplay}
            />
            <DisplayThree
              cardListToDisplay={cardListToDisplay}
            />
          </div>
          {this.state.showDeck ? <TarotCardList
            cardList={filteredTarot}
          /> : <div></div>}
        </Container>
      </div>
    );
  };
};

export default App;