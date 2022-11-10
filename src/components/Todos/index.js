import PropTypes from "prop-types";
import styles from "./Todos.module.css";
import classnames from "classname";

import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

const Todos = ({ todos, onSubstraction, onAddition }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, arr) => {
        return (
          <div
            key={index}
            // className={`todo ${!(arr.length === index + 1) && "todo-divider"}`}
            className={classnames(styles.todo, {
              [styles.todoDivider]: !arr.length === index + 1,
            })}
          >
            {todo.title}
            <div className={styles.todoIconWrapper}>
              <div className={styles.todoCount}>{todo.count}</div>

              <button className={styles.todoActionButton}>
                <img
                  src={minusIcon}
                  alt="minus-icon"
                  onClick={() => onSubstraction(index)}
                />
              </button>

              <button className={styles.todoActionButton}>
                <img
                  src={plusIcon}
                  alt="plus-icon"
                  onClick={() => onAddition(index)}
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func,
};

export default Todos;
