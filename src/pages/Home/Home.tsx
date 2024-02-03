import { useEffect, useState } from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import Table from './Table';
import styles from './home.module.css';
import { useData } from './useGetData';
import { ResultsEntity } from './data.types';
import { useDialog } from '../../hooks/useDialog';
import ModalCard from '../../components/ModalCard/ModalCard';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const {
    data: { results: data = [], count: total_contents },
    isLoading,
    error,
  } = useData();

  const { setDialogRef, openDialog, hideDialog } = useDialog();

  const [selectedData, setSelectedData] = useState<ResultsEntity | null>(null);

  useEffect(() => {
    if (selectedData) {
      openDialog();
    }
  }, [selectedData, openDialog]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <Table data={data ?? []} setSelectedData={setSelectedData} />
      </div>

      <div className={styles.allPostsContainer}>
        <span className={styles.allPostsText}>All Posts</span>
        <span className={styles.total}>{` (${total_contents ?? 0})`}</span>
        <Button className={styles.viewAll} variant='ghost'>
          VIEW ALL
        </Button>
      </div>
      <div className={styles.cardsContainer}>
        {data?.map((cardData) => (
          <ContentCard
            cardData={cardData}
            key={cardData.id}
            setSelectedData={setSelectedData}
          />
        ))}
      </div>
      <dialog ref={setDialogRef}>
        {selectedData && (
          <ModalCard cardData={selectedData} onClose={hideDialog} />
        )}
      </dialog>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
