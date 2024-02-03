import styles from './home.module.css';
import { useData } from './useGetData';

const Home = () => {
  const {
    data: { data = [] },
  } = useData();

  console.log('data', data);
  return <div className={styles.container}>Home</div>;
};

export default Home;
