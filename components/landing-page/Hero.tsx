import styles from "@/styles/hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div>
        <Image src="/Gradient.png" alt="gradient_background" fill />
      </div>
      <div className={styles["hero-overlay"]}>
        <div>
          <h1>
            The <span>Collaborative</span> platform you all Needed
          </h1>
          <p>
            Join The waitlist and be the part of great revolution in the field
            of collaboration at web3 industry. Join The waitlist and be the part
            of great revolution in the field of collaboration at web3 industry.
          </p>
          <div className={styles["hero-form"]}>
            <input type="text" placeholder="Claim your username" />
            <button>
              <Image src="/Arrow.png" alt="arrow" width={80} height={15} />
            </button>
          </div>
        </div>
        <div>
          <Image src="/Hero.png" alt="hero-thumbnail" fill />
        </div>
      </div>
    </div>
  );
};

export default Hero;
