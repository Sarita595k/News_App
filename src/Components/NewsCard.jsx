import styled from 'styled-components'
import { Link } from "react-router-dom"
const NewsCardContainer = styled.div`
color:black;
height:63vh;
width:25%;
background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
text-align:center;
margin:.3rem;
padding:.2rem;
overflow:hidden;
`

const CardImg = styled.img`
height:15rem;
width:100%;
object-fit:cover;
object-position:center;
`

const NewsHeading = styled.h1`
font-size:1.2rem;
color:white;
font-weight:bold;
`
export const NewsCard = (props) => {
    return (
        <NewsCardContainer>
            <CardImg src={props.article.urlToImage ? props.article.urlToImage : "https://tse1.mm.bing.net/th?id=OIP.G18_CzK0wvLvX151D7AiPQHaEe&pid=Api&P=0&h=180"} />
            <NewsHeading>{props.article.title?.slice(0, 50)}...</NewsHeading>
            <p style={{ color: "#78adfe" }}>{props.article.description?.slice(0, 150)}...</p>
            <button><Link to={props.article.url} target='_blank'>Read more</Link></button>
        </NewsCardContainer>
    )
}