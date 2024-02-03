import styles from './creatorAvatar.module.css';

const CreatorAvatar = ({ src }: { src: string }) => {
  return <img src={src} className={styles.creatorThumbNail} alt='avatar' />;
};

export default CreatorAvatar;
