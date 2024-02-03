import ContentCard from '../../components/ContentCard/ContentCard';
import styles from './home.module.css';
import { useData } from './useGetData';

const Home = () => {
  const {
    data: { data = [] },
    isLoading,
    error,
  } = useData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {data?.map((cardData) => (
          <ContentCard cardData={cardData} key={cardData.content.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
