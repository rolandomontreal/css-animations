import ButtonTriangle from "../SVG/ButtonTriangle"
import styles from './TriangleButton.module.css';

const TriangleButton = ({ title, rotation = 0 }) => {
  return (
    <button 
      className={styles.button}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <ButtonTriangle />
      <span className={styles.title}>{ title }</span>
    </button>
  );
}

export default TriangleButton;