import { PlatformType } from '../../pages/Home/data.types';
import instaImg from '../../assets/instagram.png';
import tiktokImg from '../../assets/tiktok.png';
import styles from './platform.module.css';

type PropType = {
  platform: PlatformType;
};
const Platform = ({ platform }: PropType) => {
  return (
    <img
      src={platform === 'instagram' ? instaImg : tiktokImg}
      className={styles.container}
    />
  );
};

export default Platform;
