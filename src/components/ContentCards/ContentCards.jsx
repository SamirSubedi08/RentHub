import React from 'react';
import styles from './ContentCards.module.css';
import ProfileImg from '../../assets/img1.jpg';

const posts = [
  {
    id: 1,
    username: "samir",
    description: "Room available. Checkout my profile to see the room",
    imageUrl: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
  },
  {
    id: 2,
    username: "samir",
    description: "Room available. Checkout my profile to see the room",
    imageUrl: "https://wallpapers.com/images/featured/hd-nature-ngdfb9h966h4z3le.jpg"
  },
  {
    id: 3,
    username: "samir",
    description: "Room not available. Checkout my profile to see the room",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/7/435989702/JK/CN/UP/10308570/nature-hd-wallpaper.jpg"
  },
  {
    id: 4,
    username: "samir",
    description: "Room available. Checkout my profile to see the room",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/7/435989702/JK/CN/UP/10308570/nature-hd-wallpaper.jpg"
  },
  {
    id: 5,
    username: "rimas",
    description: "Room available. Checkout my profile to see the room",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/7/435989702/JK/CN/UP/10308570/nature-hd-wallpaper.jpg"
  }
];

function ContentCards() {
  return (
    <div className={styles.right_aside}>
      <div className={styles.cards}>
        {posts.map(post =>
        ( 
          <div className={styles.content} key={post.id}>
            <div className={styles.profile_name}>
              <div className={styles.profile1} title="profile">
                <img src={ProfileImg} alt="img" />
              </div>
              <h3 style={{ cursor: 'pointer' }} title="profile">{post.username}</h3>
            </div>
            <div className={styles.description_box}>{post.description}</div>
            <img src={post.imageUrl} alt="img" />
            <div className={styles.interaction_box}>
              <div className={styles.likeBtn}>like</div>
              <div className={styles.checkoutBtn}>checkout</div>
              <div className={styles.bookmarkBtn}>mark</div>
            </div>
          </div>
        ))}
      </div>
    
      </div>
  );
}

export default ContentCards;