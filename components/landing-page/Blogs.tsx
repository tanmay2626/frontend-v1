import styles from "@/styles/blogs.module.scss";
import Image from "next/image";
import Card from "../common/Card"
import Tags from "../common/Tags"

const Blogs = () => {
  const tags = ["NFT", "Crypto Currency", "Web3"];
  const dummy = [
    {
      title: "Web3 Talk with NFT Boy Om Gurram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: tags,
    },
    {
      title: "Web3 Talk with NFT Boy Om Gurram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: tags,
    },
    {
      title: "Web3 Talk with NFT Boy Om Gurram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: tags,
    },
    {
      title: "Web3 Talk with NFT Boy Om Gurram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: tags,
    },
  ];
  return (
    <div className={styles["blogs-container"]}>
      <div className={styles["blogs-container__left"]}>
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
            {tags.map((item, index) => {
              return <Tags key={index} name={item} />;
            })}
            <div>
              <h1>Web3 Talk with NFT Boy Om Gurram</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button>
                Read More <span>&#129106;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {dummy.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
