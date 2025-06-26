import { useEffect, useState } from "react"
import { NewsCard } from "./NewsCard"

export const FetchIndiaNews = (props) => {
    const [news, setnews] = useState([])
    const fetchNews = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.name}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
            const data = await response.json()
            setnews(data.articles)
            console.log(data)
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchNews()
    }, [])
    return (
        <div>
            {news.slice(0, 17).map((article, index) =>
                <NewsCard key={index} article={article} />
            )}
        </div>
    )
}   