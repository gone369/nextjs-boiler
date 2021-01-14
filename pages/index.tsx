import Head from 'next/head';
import styles from './index.module.scss';
import { name } from '../package.json';

import Aggregator from '@/components/Aggregator';

const Home: React.FC<any> = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Aggregator />
    </div>
  );
};

export default Home;
