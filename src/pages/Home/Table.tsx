import { DataEntity } from './data.types';
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
  data: DataEntity[];
  setSelectedData: React.Dispatch<React.SetStateAction<DataEntity | null>>;
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
          const { content, creator } = tData;
          return (
            <tr key={content.id}>
              <td className={styles.timeStamp}>
                {formatDate(content.timestamp)}
              </td>
              {/* took shortcut here, need to render svg depending on content form */}
              <td>
                {/* can be handled with css , taking shortcut for now */}
                <span className={styles.contentTitle}>
                  {truncateSentence(content.title)}
                </span>
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <CreatorAvatar src={creator.profile_picture_url} />
                      </td>
                      <td>{`@${creator.username}`}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <Platform platform={content.content_platform} />
              </td>
              <td>{formatNumber(content.likes)}</td>
              <td>{formatNumber(content.total_engagement)}</td>

              <td>
                {calculateEngagementRate({
                  totalEngagement: content.total_engagement,
                  totalFollowers: creator.follower_count,
                })}
              </td>
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
