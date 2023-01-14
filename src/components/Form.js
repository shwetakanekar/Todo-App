import shortid from 'shortid';
import styles from '../styles.module.css';

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    setTodo('');
  };

  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.todoInput}
          value={todo}
          placeholder="Todo item"
          onChange={handleInputChange}
          required
        />
        <button type="submit" className={styles.todoButton}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
