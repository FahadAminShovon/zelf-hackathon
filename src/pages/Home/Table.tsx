import { DataEntity } from './data.types';
import { formatDate, formatNumber } from '../../utils/helper';
import styles from './table.module.css';
import CreatorAvatar from '../../components/CreatorAvatar/CreatorAvatar';

type PropType = {
  data: DataEntity[];
};
const Table = ({ data }: PropType) => {
  if (data.length === 0) return <>No Data Found</>;

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Video/Image</th>
          <th>Creator</th>
          <th>Platform</th>
          <th>Total Views</th>
          <th>Total Engagement</th>
          <th>Engagement Rate</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ content, creator }) => (
          <tr key={content.id}>
            <td className={styles.timeStamp}>
              {formatDate(content.timestamp)}
            </td>
            <td>{content.content_form}</td>
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
            <td>{content.content_platform}</td>
            <td>{formatNumber(content.likes)}</td>
            <td>{formatNumber(content.total_engagement)}</td>

            <td>{formatNumber(creator.follower_count)}</td>
            <td>View task</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
