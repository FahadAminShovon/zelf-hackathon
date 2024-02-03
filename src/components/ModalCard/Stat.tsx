import styles from './stat.module.css';

type PropType = {
  label: string;
  value: string | number;
};
const Stat = ({ label, value }: PropType) => {
  return (
    <div>
      <p className={styles.statValue}>{value}</p>
      <p>{label}</p>
    </div>
  );
};

export default Stat;
