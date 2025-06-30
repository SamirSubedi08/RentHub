import ContentCards from '../ContentCards/ContentCards';
import styles from '../RoomsCard/RoomCard.module.css'
import Small_Rounded_Box from '../Small_Rounded_Box/Small_Rounded_Box';

function RoomCard() {
  return (
    <>
    <ContentCards>
                   <div className={styles.content} >
                <div className={styles.profile_box}></div>
                <div className={styles.grid_box}>
                <div className={styles.image_container}></div>
                <div className={styles.info_box}>
                  <div className={styles.rent_btn}>
                    <h2>Rent</h2>
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
    </ContentCards>
    </>
  )
}

export default RoomCard