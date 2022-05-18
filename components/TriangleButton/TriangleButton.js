import Link from "next/link";
import ButtonTriangle from "../SVG/ButtonTriangle"
import styles from './TriangleButton.module.css';

const TriangleButton = ({ title, rotation = 0, href }) => {
  return (
    <Link href={href}>
      <a
        className={styles.button}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <ButtonTriangle />
        <span className={styles.title}>{ title }</span>
      </a>
    </Link>
  );
}

export default TriangleButton;