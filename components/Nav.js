import { styles } from "ansi-colors";
import { useRouter } from "next/router";
// Styles
import navStyles from "../styles/Nav.module.css";
import Image from "next/image";
import Newspaper from "../components/Newspaper";

const Nav = () => {
  const router = useRouter();

  return (
    <div className={navStyles.main}>
      <div className={navStyles.icon}>
        <Newspaper />
      </div>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>
      {/* <div
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/james-morris-62a66b166/")
        }
      >
        LinkedIn
      </div> */}
    </div>
  );
};

export default Nav;
