import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckOfCards extends React.Component {
  creatCardUsingObj(cardObj) {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = cardObj;

    return (
      <Card
        key={ cardName }
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
      />
    );
  }

  render() {
    const { deck } = this.props;
    return (
      <section>
        <h1>Todas as cartas</h1>
        {
          deck.map((cardObj) => this.creatCardUsingObj(cardObj))
        }
      </section>
    );
  }
}

DeckOfCards.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeckOfCards;

// Consultei o repositório do Erickson Siqueira para esse requisito, link: https://github.com/tryber/sd-015-b-project-tryunfo/pull/40/commits/d9d9e3b84908f0aee5e817d171b09d6980bd92b4
