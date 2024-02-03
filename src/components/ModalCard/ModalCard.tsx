import SvgClose from '../../assets/SvgClose';
import { ResultsEntity } from '../../pages/Home/data.types';
import { calculateEngagementRate, formatNumber } from '../../utils/helper';
import Stat from './Stat';
import style from './modalCard.module.css';

const ModalCard = ({
  cardData,
  onClose,
}: {
  cardData: ResultsEntity;
  onClose: () => void;
}) => {
  const authorData = Array.isArray(cardData?.author?.data)
    ? cardData?.author?.data?.[0]
    : cardData.author?.data;
  return (
    <div className={style.container}>
      {/* <button className={`${style.chevronBtn}`}>
        <SvgLeft />
      </button> */}
      <div className={style.imageContainer}>
        <img
          src={cardData.data?.media?.urls?.[0] ?? ''}
          alt='thumbnail'
          className={style.thumbnailImage}
        />
      </div>
      <div className={style.cardContent}>
        <div>
          <p className={style.creatorName}>{authorData?.info.name}</p>
          <button onClick={onClose} className={style.closeButton}>
            <SvgClose />
          </button>
          <p className={style.text}>
            {cardData?.data?.context?.main_text ?? ''}
          </p>
        </div>
        <div className={style.statsContainer}>
          <Stat
            label={'total views'}
            value={formatNumber(
              cardData?.data?.stats?.digg_counts.views.count ?? ''
            )}
          />
          <Stat
            label={'total likes'}
            value={formatNumber(
              cardData?.data?.stats?.digg_counts.likes.count ?? ''
            )}
          />
          <Stat
            label={'total comments'}
            value={formatNumber(
              cardData?.data?.stats?.digg_counts.comments.count ?? ''
            )}
          />
          <Stat
            label={'total views'}
            value={calculateEngagementRate({
              totalEngagement:
                cardData?.data?.stats?.digg_counts.views.count ??
                '0' +
                  cardData?.data?.stats.digg_counts.likes.count +
                  cardData?.data?.stats.digg_counts.comments.count,
              totalFollowers: Number.parseInt(
                authorData?.stats?.digg_count.followers.count ?? '0'
              ),
            })}
          />
        </div>
      </div>
      {/* <button className={`${style.chevronBtn}`}>
			// can be implmented finding the current content index and updating selected
        <SvgRight />
      </button> */}
    </div>
  );
};

export default ModalCard;
