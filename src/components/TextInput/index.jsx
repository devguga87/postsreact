import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Digite sua pesquisa"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequirede,
  handleChange: P.func.isRequired,
};
