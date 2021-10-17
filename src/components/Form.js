import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange } = this.props;
    return (
      <form>
        <input
          value={ cardName }
          onChange={ onInputChange }
          data-testid="name-input"
          type="text"
          name="name-input"
        />
        <input
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
          type="textarea"
          name="description-input"
        />
        <input
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
          type="number"
          name="attr1-input"
        />
        <input
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
          type="number"
          name="attr2-input"
        />
        <input
          value={ cardAttr3 }
          onChange={ onInputChange }
          data-testid="attr3-input"
          type="number"
          name="attr3-input"
        />
        <input
          value={ cardImage }
          onChange={ onInputChange }
          data-testid="image-input"
          type="text"
          name="image-input"
        />
        <select
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
          name="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          checkerd={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
          type="checkbox"
          name="trunfo-input"
        />
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="submit"
          name="save-button"
          value="salvar"
        >
          {' '}
          Salvar
        </button>
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
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
