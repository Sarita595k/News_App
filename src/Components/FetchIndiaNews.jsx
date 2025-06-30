import { useEffect, useState } from "react"
import { NewsCard } from "./NewsCard"
import { Header } from "./Header"
import './Styles/commonStyle.css'
import styled from "styled-components"
import { TopStories } from "./TopStories"
import { SideHeader } from "./SideHeader"

const MainContainer = styled.div`
margin-top:1rem;
display:flex;
flex-direction:column;
`

const TopStoriesContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
flex:1;
`

export const FetchIndiaNews = (props) => {
    const [news, setnews] = useState([])
    const fetchNews = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.name}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
            const data = await response.json()
            setnews(data.articles)
            console.log(data.articles[0])
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <MainContainer>
            <div>
                {news.slice(0, 1).map((article, index) => {
                    return <Header key={index} article={article} />
                }
                )}
            </div>
            <div className="newsCard">
                {news.slice(1, 4).map((article, index) =>
                    <NewsCard key={index} article={article} />
                )}
            </div>


            <TopStoriesContainer>
                <div>
                    <h4 style={{ marginLeft: '2rem' }}>Top Stories</h4>
                    {news.slice(5, 8).map((article, index) =>
                        <TopStories key={index} article={article} />)}
                </div>
                <div>
                    {news.slice(8, 9).map((article, index) =>
                        <SideHeader key={index} article={article} />
                    )}
                </div>
            </TopStoriesContainer>

            <div className="newsCard">
                {news.slice(9, 14).map((article, index) =>
                    <NewsCard key={index} article={article} />
                )}
            </div>

            <TopStoriesContainer>
                <div>
                    {news.slice(15, 16).map((article, index) =>
                        <SideHeader key={index} article={article} />
                    )}
                </div>
                <div>
                    <h4 style={{ marginLeft: '2rem' }}>Top Stories</h4>
                    {news.slice(14, 17).map((article, index) =>
                        <TopStories key={index} article={article} />)}
                </div>

            </TopStoriesContainer>
        </MainContainer >
    )
}   