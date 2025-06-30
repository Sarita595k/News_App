import { Link } from "react-router-dom"
import styled from "styled-components"

const TopStoriesDiv = styled.div`
display:flex;
flex-direction:row;
margin:1.2rem;
text-align:left;
border-bottom:1px solid black;
`
const TopStoriesImg = styled.img`
width:20%;
heigth:5%;
padding:0 1rem;
`
const TopStoriesTitle = styled.p`
font-size:.9rem;
color:black;
font-weight:bold;
text-transform:capitialize;
`
export const TopStories = (props) => {
    return (
        <TopStoriesDiv>
            <TopStoriesImg src={props.article.urlToImage ? props.article.urlToImage : "https://tse1.mm.bing.net/th?id=OIP.G18_CzK0wvLvX151D7AiPQHaEe&pid=Api&P=0&h=180"} />
            <div>
                <TopStoriesTitle>{props.article?.title.slice(0, 70)}...</TopStoriesTitle>
                <p>{props.article.description?.slice(0, 80)}...</p>
                <Link to={props.article.url}>Read more</Link>
            </div>
        </TopStoriesDiv>
    )
}