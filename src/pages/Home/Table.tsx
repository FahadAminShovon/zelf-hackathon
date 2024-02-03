import { ResultsEntity } from './data.types';
import {
  calculateEngagementRate,
  formatDate,
  formatNumber,
  truncateSentence,
} from '../../utils/helper';
import styles from './table.module.css';
import CreatorAvatar from '../../components/CreatorAvatar/CreatorAvatar';
import Platform from '../../components/Platform/Platform';

type PropType = {
  data: ResultsEntity[];
  setSelectedData: React.Dispatch<React.SetStateAction<ResultsEntity | null>>;
};
const Table = ({ data, setSelectedData }: PropType) => {
  if (data.length === 0) return <>No Data Found</>;

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Video/Image</th>
          <th>Creator</th>
          <th>Platform</th>
          {/* took shortcut on sorting, need server side sorting as all content are not visible */}
          <th>Total Views</th>
          <th>Total Engagement</th>
          <th>Engagement Rate</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((tData) => {
          // const { content, creator } = tData;
          const authorData = Array.isArray(tData?.author?.data)
            ? tData?.author?.data?.[0]
            : tData.author?.data;
          const stats = tData?.data?.stats?.digg_counts;

          const totalEngagement =
            (stats?.comments?.count ?? 0) + (stats?.likes?.count ?? 0);
          const engatementRate = calculateEngagementRate({
            totalEngagement,
            totalFollowers:
              authorData?.stats?.digg_count?.followers?.count ?? 0,
          });

          return (
            <tr key={tData.id}>
              <td className={styles.timeStamp}>
                {formatDate(tData.data?.creation_info?.created_at ?? '')}
              </td>
              {/* took shortcut here, need to render svg depending on content form */}
              <td>
                {/* can be handled with css , taking shortcut for now */}
                <span className={styles.contentTitle}>
                  {truncateSentence(tData?.data?.context.main_text ?? '')}
                </span>
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <CreatorAvatar
                          src={authorData?.avatar.urls?.[0] ?? ''}
                        />
                      </td>
                      <td>{`@${authorData?.username}`}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <Platform platform={authorData?.info?.platform} />
              </td>

              <td>{formatNumber(stats?.views?.count ?? '')}</td>
              <td>{formatNumber(totalEngagement)}</td>
              <td>{engatementRate}</td>

              <td
                onClick={() => {
                  setSelectedData(tData);
                }}
                className={styles['viewAction']}
              >
                View task
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
