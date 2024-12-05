import NewsList from '@/components/news-list';
import { getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

export default function FilteredNewsYear({params}) {
    const filter = params.filter;
    const selectedYear = filter?.[0];
    const selectedMonth =filter?.[1];
    let news ;
    if(selectedYear && !selectedMonth){
      news = getNewsForYear(selectedYear);
    }

    if(selectedYear &&!getAvailableNewsYears().includes(+selectedYear)){
      throw new Error('invalid year')
    }

    let newsContent =<p>No news found for the selected period.</p>

    if(news && news.length >0){
      newsContent = <NewsList news={news}/>
    }
    
    const links = getAvailableNewsYears();


    
    return (
        <>
        <header id="archive-header">
        <nav>
          <ul>
            {links.map((link)=>(
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
        </>
  )
}
