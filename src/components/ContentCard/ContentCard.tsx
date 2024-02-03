import SvgComment from '../../assets/SvgComment';
import SvgLike from '../../assets/SvgLike';
import SvgShare from '../../assets/SvgShare';
import { ResultsEntity } from '../../pages/Home/data.types';
import { formatNumber } from '../../utils/helper';
import CreatorAvatar from '../CreatorAvatar/CreatorAvatar';
import Platform from '../Platform/Platform';
import styles from './contentCard.module.css';

type PropType = {
  cardData: ResultsEntity;
  setSelectedData: React.Dispatch<React.SetStateAction<ResultsEntity | null>>;
};
const ContentCard = ({ cardData, setSelectedData }: PropType) => {
  const authorData = Array.isArray(cardData?.author?.data)
    ? cardData?.author?.data?.[0]
    : cardData.author?.data;
  const stats = cardData?.data?.stats?.digg_counts;

  return (
    <div className={styles.container}>
      <div className={styles.thumbNailContainer}>
        <button
          className={styles.cardImage}
          onClick={() => setSelectedData(cardData)}
        >
          <img
            src={cardData.data?.media.urls?.[0] ?? ''}
            className={styles.thumbnail}
          />
        </button>
        <div className={styles.creatorContainer}>
          {authorData?.avatar?.urls?.[0] && (
            <CreatorAvatar src={authorData?.avatar?.urls?.[0]} />
          )}
          <span className={styles['line-clamp']}>
            {authorData?.info?.name ?? ''}
          </span>
          <Platform platform={authorData?.info?.platform} />
        </div>
      </div>
      <div className={styles.engagementContainer}>
        <span className={styles.engagement}>
          <SvgLike />
          {formatNumber(stats?.likes?.count ?? 0)}
        </span>
        <span className={styles.engagement}>
          <SvgComment />
          {formatNumber(stats?.comments?.count ?? 0)}
        </span>
        <span className={styles.engagement}>
          <SvgShare />
          {/* {formatNumber(cardData.content.shares)} */}
          N/A
        </span>
      </div>
    </div>
  );
};

export default ContentCard;
