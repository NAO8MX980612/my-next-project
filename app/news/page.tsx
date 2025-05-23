import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

export default async function Page() {
    const { contents: news } = await getNewsList();

    // return <div>{JSON.stringify(news)}</div>
    return <NewsList news={news} />
}