import Head from 'next/head';
import styles from './index.module.scss';
import { name } from '../package.json';

const Home: React.FC<any> = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-8 container mx-auto">aggregator</div>
    </div>
  );
};

export default Home;
