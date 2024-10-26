import styles from "./page.module.css";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
}

export default function Home() {
  const name= "地球";
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
        <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
      </div>
      <Image 
        className={styles.bgimg} 
        src="/img-mv.jpg" 
        alt="" 
        width={4000} 
        height={1200} 
      />
    </section>
  );
}
