import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import DeckOfCards from './components/DeckOfCards';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  isSaveButtonDisabled: true,
  cardTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };

    this.verifyIfInputsAreFiled = this.verifyIfInputsAreFiled.bind(this);
    this.verifyAttributesSum = this.verifyAttributesSum.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.verifyAttributesMaxValue = this.verifyAttributesMaxValue.bind(this);
    this.toggleSaveButton = this.toggleSaveButton.bind(this);
    this.createCardObj = this.createCardObj.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.createNewDeckArray = this.createNewDeckArray.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.toggleSaveButton() });
    });
    this.createCardObj();
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    this.setState({ deck: this.createNewDeckArray() }, () => {
      if (cardTrunfo === true) this.setState({ hasTrunfo: true });
      this.setState(initialState);
    });
  }

  createNewDeckArray() {
    const { deck } = this.state;
    const newDeck = [...deck, this.createCardObj()];

    return newDeck;
  }

  createCardObj() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    return cardObj;
  }

  toggleSaveButton() {
    const buttonShouldBeDisable = !(
      this.verifyAttributesMaxValue()
      && this.verifyAttributesSum()
      && this.verifyIfInputsAreFiled()
    );

    return buttonShouldBeDisable;
  }

  verifyAttributesMaxValue() {
    const max = 90;
    const min = 0;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const cardAttributesArr = [
      Number(cardAttr1),
      Number(cardAttr2),
      Number(cardAttr3),
    ];
    const attrAreUnderMaxValue = cardAttributesArr
      .every((attribute) => (attribute <= max && attribute >= min));

    return attrAreUnderMaxValue;
  }

  verifyAttributesSum() {
    const max = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const atributeSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    return (atributeSum <= max);
  }

  verifyIfInputsAreFiled() {
    const stateValues = Object.values(this.state);
    const stringValues = stateValues.filter((value) => typeof value === 'string');
    const inputsAreFiled = stringValues.every((value) => value);
    return inputsAreFiled;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      deck,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <DeckOfCards deck={ deck } />
      </div>
    );
  }
}
export default App;

// Consultei o repositorio do Erickson Siqueira link: https://github.com/tryber/sd-015-b-project-tryunfo/pull/40/commits/5c8de65c362a712ae81b1102eebafeb983b3ba7f
