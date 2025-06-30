
import styles from '../RoomsCard/RoomCard.module.css'
import Small_Rounded_Box from '../Small_Rounded_Box/Small_Rounded_Box';
import images from '../../assets/images.jpeg'

function RoomCard() {
  return (
    <>
    <contentCards>
                   <div className={styles.content} >
                <div className={styles.profile_box}></div>
                <div className={styles.grid_box}>
                <div className={styles.image_container}>
                  <img className={styles.image} src="https://eulivia.com/wp-content/uploads/2024/08/9950-3-scaled.jpg"alt="Room" />
                </div>
                <div className={styles.info_box}>
                  <div className={styles.rent_btn}>
                    <h2 className={styles.text}>Rent</h2>
                  </div>
                  <div className={styles.info_listbox}
                    >
                      <Small_Rounded_Box/>
                      <Small_Rounded_Box/>
                      <Small_Rounded_Box/>
                      <Small_Rounded_Box/>
                      <Small_Rounded_Box/>
                      <Small_Rounded_Box/>
                      <Small_Rounded_Box/>
                      
                    </div>
                </div>
                </div>


              </div>
    </contentCards>
    </>
  )
}

export default RoomCard