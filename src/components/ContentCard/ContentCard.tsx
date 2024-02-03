import SvgComment from '../../assets/SvgComment';
import SvgLike from '../../assets/SvgLike';
import SvgShare from '../../assets/SvgShare';
import { DataEntity } from '../../pages/Home/data.types';
import { formatNumber } from '../../utils/helper';
import CreatorAvatar from '../CreatorAvatar/CreatorAvatar';
import Platform from '../Platform/Platform';
import styles from './contentCard.module.css';

type PropType = {
  cardData: DataEntity;
  setSelectedData: React.Dispatch<React.SetStateAction<DataEntity | null>>;
};
const ContentCard = ({ cardData, setSelectedData }: PropType) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbNailContainer}>
        <button
          className={styles.cardImage}
          onClick={() => setSelectedData(cardData)}
        >
          <img
            src={cardData.content.thumbnail_url}
            className={styles.thumbnail}
          />
        </button>
        <div className={styles.creatorContainer}>
          {cardData.creator.profile_picture_url && (
            <CreatorAvatar src={cardData.creator.profile_picture_url} />
          )}
          <span className={styles['line-clamp']}>{cardData.creator.name}</span>
          <Platform platform={cardData.content.content_platform} />
        </div>
      </div>
      <div className={styles.engagementContainer}>
        <span className={styles.engagement}>
          <SvgLike />
          {formatNumber(cardData.content.likes)}
        </span>
        <span className={styles.engagement}>
          <SvgComment />
          {formatNumber(cardData.content.comments)}
        </span>
        <span className={styles.engagement}>
          <SvgShare />
          {formatNumber(cardData.content.shares)}
        </span>
      </div>
    </div>
  );
};

export default ContentCard;
