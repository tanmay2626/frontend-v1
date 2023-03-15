import styles from "@/styles/features.module.scss";
import Image from "next/image";

const Features = () => {
  return (
    <div className={styles["features-grid"]}>
      <div>
        <div>
          <Image fill src="/Profile-card.png" alt="profile-card" />
        </div>
        <div>
          <h1>Domain</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      <div>
        <div>
          <Image src="/Collab-Card-img.png" alt="collab-card" fill />
        </div>
        <div>
          <h1>Collaborations</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div>
        <div>
          <Image fill src="/Bounties-Card-img.png" alt="bounty-card" />
        </div>
        <div>
          <h1>Bounties</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div>
        <div>
          <div>
            <Image
              src="/Monitization-Card-img.png"
              alt="monetization-card"
              fill
            />
          </div>
        </div>
        <div>
          <h1>Monitizatization</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
