import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function page({params}) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(newsItem =>newsItem.slug === newsSlug)

    if(!newsItem){
      notFound();
    }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
      </header>
      <p>{newsItem.date}</p>
      <p>{newsItem.content}</p>
    </article>
  )
}
