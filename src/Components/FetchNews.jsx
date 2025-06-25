import { useEffect, useState } from "react"
import { NewsCard } from "./NewsCard"

const newsCard = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center"
}
export const FetchNews = () => {
    const [news, setNews] = useState([])

    const fetchNews = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
            const data = await response.json()
            setNews(data.articles)
            console.log(data.articles)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (<div style={{ textAlign: "center" }}>
        <h1>Top headings</h1>
        <div style={newsCard}>
            {news.slice(0, 15).map((article, index) =>
                <NewsCard key={index} article={article} />)}
        </div>
    </div>
    )
}