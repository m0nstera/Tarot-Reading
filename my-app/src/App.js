import './App.css'
import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import TarotCardList from './TarotCardList.jsx';
import Search from './Search.jsx';
import DisplayOne from './DisplayOne.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [],
      imageList: [],
      searchName: '',
      // searchKW: '',
      cardToDisplay: null,
    };
    this.handleSearchChangeName = this.handleSearchChangeName.bind(this);
    this.clickOne = this.clickOne.bind(this);
  }
  componentDidMount() {
    this.getAllCards();
  };

  getAllCards() {
    axios.get(`https://rws-cards-api.herokuapp.com/api/v1/cards`)
        .then((res) => {
          console.log(res.data.cards);
          this.setState({cardList: res.data.cards});
        })
        .catch((err) => console.error(err));
  }

  getAllImages() {
    axios.get(`https://tarot.howlcode.com/api/v1`)
    .then((res) => {
      console.log('HI!', res.data);
      this.setState({imageList: res.data});
    })
    .catch((err) => console.error(err));
  }

  handleSearchChangeName(e) {
    this.setState({searchName: e.target.value.toLowerCase()});
  }

  clickOne() {
    let card = this.state.cardList[Math.floor(Math.random() * this.state.cardList.length)];
    console.log('card', card);
    this.setState({
      cardToDisplay: card
    });
  }



  render() {
    const {cardList, searchName, cardToDisplay} = this.state;
    let filteredTarot;
    searchName.length >= 3
      ? filteredTarot = cardList.filter((card) =>
      card.name.toLowerCase().includes(searchName.toLowerCase()) ||
      card.meaning_rev.toLowerCase().includes(searchName.toLowerCase()) ||
      card.meaning_up.toLowerCase().includes(searchName.toLowerCase()))
      : filteredTarot = cardList;
    return (
      <div>
        <h1>gain insight into the past, present, or future</h1>
        <Container className="tarot-container">
          <Search
            searchName={searchName}
            handleSearchChangeName={this.handleSearchChangeName}
          />
          <Button
            variant="secondary"
            onClick={this.clickOne}
          >Click</Button>
          <div>
            <DisplayOne
              card={cardToDisplay}
            />
          </div>
          <TarotCardList
          cardList={filteredTarot}
          // cardToDisplay={cardToDisplay}
          clickOne={this.clickOne}
          />
        </Container>
      </div>
    );
  };
};

export default App;