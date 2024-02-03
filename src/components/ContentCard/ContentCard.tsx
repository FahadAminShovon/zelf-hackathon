import { DataEntity } from '../../pages/Home/data.types';
import { formatNumber } from '../../utils/helper';
import styles from './contentCard.module.css';

type PropType = {
  cardData: DataEntity;
};
const ContentCard = ({ cardData }: PropType) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbNailContainer}>
        <a href='' className={styles.cardImage}>
          <img
            src={cardData.content.thumbnail_url}
            className={styles.thumbnail}
          />
        </a>
        <div className={styles.creatorContainer}>
          {cardData.creator.profile_picture_url && (
            <img
              src={cardData.creator.profile_picture_url}
              className={styles.creatorThumbNail}
            />
          )}
          <span className={styles['line-clamp']}>{cardData.creator.name}</span>
        </div>
      </div>
      <div className={styles.engagementContainer}>
        <span>{formatNumber(cardData.content.likes)}</span>
        <span>{formatNumber(cardData.content.comments)}</span>
        <span>{formatNumber(cardData.content.shares)}</span>
      </div>
    </div>
  );
};

export default ContentCard;
