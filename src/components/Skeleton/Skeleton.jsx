
import styles from './Skeleton.module.css';


const Skeleton = () => {
  return (

        <div className={styles.skeleton_card}>
      <div className={styles.skeleton_profile}>
        <div className={`${styles.skeleton_avatar} ${styles.shimmer}`}></div>
        <div className={`${styles.skeleton_username} ${styles.shimmer}`}></div>
      </div>

      <div className={`${styles.skeleton_description} ${styles.shimmer}`}></div>

      <div className={`${styles.skeleton_image} ${styles.shimmer}`}></div>

      <div className={styles.skeleton_buttons}>
        <div className={`${styles.skeleton_btn} ${styles.shimmer}`}></div>
        <div className={`${styles.skeleton_btn} ${styles.shimmer}`}></div>
        <div className={`${styles.skeleton_btn} ${styles.shimmer}`}></div>
      </div>
    </div>

  );
};

export default Skeleton;
