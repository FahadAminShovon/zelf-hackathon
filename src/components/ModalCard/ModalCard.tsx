import SvgClose from '../../assets/SvgClose';
import { DataEntity } from '../../pages/Home/data.types';
import { calculateEngagementRate, formatNumber } from '../../utils/helper';
import Stat from './Stat';
import style from './modalCard.module.css';

const ModalCard = ({
  cardData,
  onClose,
}: {
  cardData: DataEntity;
  onClose: () => void;
}) => {
  return (
    <div className={style.container}>
      {/* <button className={`${style.chevronBtn}`}>

			// can be implmented finding the current content index and updating previous selected data
        <SvgLeft />
      </button> */}
      <div className={style.imageContainer}>
        <img
          src={cardData.content.thumbnail_url}
          alt='thumbnail'
          className={style.thumbnailImage}
        />
      </div>
      <div className={style.cardContent}>
        <div>
          <p className={style.creatorName}>{cardData.creator.name}</p>
          <button onClick={onClose} className={style.closeButton}>
            <SvgClose />
          </button>
          <p className={style.text}>{cardData.content.text}</p>
        </div>
        <div className={style.statsContainer}>
          <Stat
            label={'total views'}
            value={formatNumber(cardData.content.views)}
          />
          <Stat
            label={'total likes'}
            value={formatNumber(cardData.content.likes)}
          />
          <Stat
            label={'total comments'}
            value={formatNumber(cardData.content.comments)}
          />
          <Stat
            label={'total views'}
            value={calculateEngagementRate({
              totalEngagement: cardData.content.total_engagement,
              totalFollowers: cardData.creator.follower_count,
            })}
          />
        </div>
      </div>
      {/* <button className={`${style.chevronBtn}`}>
			// can be implmented finding the current content index and updating next selected data
        <SvgRight />
      </button> */}
    </div>
  );
};

export default ModalCard;
