import styles from '../styles.module.css';

const Form = () => {
  return (
    <div className={styles.todoForm}>
      <form>
        <input className={styles.todoInput} placeholder="Todo item" />
        <button className={styles.todoButton}>Add</button>
      </form>
    </div>
  );
};

export default Form;
