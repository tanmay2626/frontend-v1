import styles from "@/styles/header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/blogs",
      name: "Blogs",
    },
  ];

  const router = useRouter();
  const path = router.asPath;

  return (
    <div className={styles["navbar"]}>
      <div>
        <Image src="/logo.png" alt="logo" width={190} height={75} />
      </div>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.link}
                className={
                  item.link == path
                    ? styles["navbar-link__active"]
                    : styles["navbar-link"]
                }
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <button>Join</button>
      </ul>
    </div>
  );
};

export default Navbar;
