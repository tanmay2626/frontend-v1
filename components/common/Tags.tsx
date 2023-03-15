import styles from "@/styles/Blogs.module.scss";

type tagProps = {
  name: string;
};

const Tags = (props: tagProps) => {
  return <div className={styles["tags-block"]}>{props.name}</div>;
};

export default Tags;
