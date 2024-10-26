import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";
import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "test",
      category: {
        name: "test",
      },
      publishedAt: "2023/05/29",
      createdAt: "2023/05/29",
    },
    {
      id: "2",
      title: "test",
      category: {
        name: "test",
      },
      publishedAt: "2023/05/29",
      createdAt: "2023/05/29",
    },
    {
      id: "3",
      title: "test",
      category: {
        name: "test",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default function Home() {
  const name= "地球";
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
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
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
