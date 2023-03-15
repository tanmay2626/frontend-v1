import styles from "@/styles/Blogs.module.scss";
import Image from "next/image";
import Tags from "./Tags";

type cardProps = {
  title: string;
  description: string;
  tags: string[];
};

const Card = (props: cardProps) => {
  return (
    <div className={styles["card-container"]}>
      <div>
        <Image
          sizes="width : 100%, height : 100%"
          src="/blog-thumbnail.png"
          alt="blog-thumbnail"
          fill
        />
      </div>
      <div>
        <div>
          {props.tags.map((item, index) => {
            return <Tags key={index} name={item} />;
          })}
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
