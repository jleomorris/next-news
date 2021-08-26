import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-container">
      <Image
        src="https://images.pexels.com/photos/5010877/pexels-photo-5010877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1920"
        layout="fill"
        className={homeStyles.background}
        alt="background"
      />
      <div className={homeStyles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop shop for the latest news articles</h3>
        <Link className={homeStyles.feedLink} href="/feed/1">
          <a className={homeStyles.feedLink}>Go to feed</a>
        </Link>
      </div>
    </div>
  );
}
