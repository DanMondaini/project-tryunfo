import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          data-testid="name-input"
          type="text"
          name="name-input"
        />
        <input
          data-testid="description-input"
          type="textarea"
          name="description-input"
        />
        <input
          data-testid="attr1-input"
          type="number"
          name="attr1-input"
        />
        <input
          data-testid="attr2-input"
          type="number"
          name="attr2-input"
        />
        <input
          data-testid="attr3-input"
          type="number"
          name="attr3-input"
        />
        <input
          data-testid="image-input"
          type="text"
          name="image-input"
        />
        <select
          data-testid="rare-input"
          name="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="trunfo-input"
        />
        <button
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

export default Form;
