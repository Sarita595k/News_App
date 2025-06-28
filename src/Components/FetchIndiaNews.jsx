import { useEffect, useState } from "react"
import { NewsCard } from "./NewsCard"
import { Header } from "./Header"
import './Styles/commonStyle.css'
export const FetchIndiaNews = (props) => {
    const [news, setnews] = useState([])
    const fetchNews = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.name}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
            const data = await response.json()
            setnews(data.articles)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <>
            {news.slice(0, 1).map((article, index) => {
                <Header key={article.author} article={article} />
            })}

            <div className="newsCard">
                {news.slice(1, 22).map((article, index) =>
                    <NewsCard key={index} article={article} />
                )}
            </div>
        </>
    )
}   