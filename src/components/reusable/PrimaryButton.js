import styles from './PrimaryButton.module.css';

function PrimaryButton(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.className} ${styles.btn}`}
    >
      {props.children}
    </button>
  );
}

export default PrimaryButton;
