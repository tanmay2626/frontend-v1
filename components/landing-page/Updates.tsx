import styles from "@/styles/updates.module.scss";
import Image from "next/image";

const Updates = () => {
  return (
    <div className={styles["updates-container"]}>
      <div>
        <Image priority src="/Updates.png" alt="updates" fill />
      </div>
      <div className={styles["updates-container__backdrop"]}></div>
      <div>
        <p>
          {" "}
          <span> ✦ </span> Upcoming update - Collaborative profile with NFC card
          coming soon : )<span> ✦ </span> Upcoming update - Collaborative
          profile with NFC card coming soon : )
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Updates;
