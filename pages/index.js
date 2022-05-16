import Head from 'next/head'
import TriangleButton from '../components/TriangleButton/TriangleButton';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.header}>Follow along</h1>
        <h3 className={styles.subHeader}>
          for the udemy course <br />
          ”Creative Advanced CSS Animations <br />
          - Create 100 Projects!”
        </h3>

        <div className={styles.buttonsContainer}>
          <TriangleButton 
            title={'SRC'}
          />
          <TriangleButton 
            title={'Gallery'}
            rotation={180}
          />
        </div>

        <h4 className={styles.author}>By Jake</h4>
      </main>
    </div>
  );
}
