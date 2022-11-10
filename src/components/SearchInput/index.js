import styles from "./SearchInput.module.css";
import PropTypes from "prop-types";

const SearchInput = ({ onSubmit, onChange, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="List"
        onChange={onChange}
        value={value}
      />
      <button class={styles.addButton}>Add</button>
    </form>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default SearchInput;
