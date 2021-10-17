import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onSaveButtonClick, onInputChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            type="textarea"
            name="cardDescription"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="atrr1"
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="atrr2"
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="atrr3"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="image"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
            id="rare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id="trunfo"
          />
          Super Trybe Trunfo
        </label>
        <label htmlFor="save">
          <button
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            onInputChange={ onInputChange }
            data-testid="save-button"
            type="submit"
            name="isSaveButtonDisabled"
            id="save"
          >
            {' '}
            Salvar
          </button>
        </label>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
export default Form;
