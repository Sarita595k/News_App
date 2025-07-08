import styled from 'styled-components'
import { Link } from "react-router-dom"

const NewsCardContainer = styled.div`
color:black;
height:80vh;
width:28%;
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

const ArticleDetails = styled.div`
margin:0;
padding:0
display:flex;
flex-direction:column;
flex-wrap:wrap;
text-decoration:none;
text-transform:captialize;
`

const ButtonReadMore = styled.button`
border-radius:25px;
padding:.4rem 1rem;
`
const LinkBtn = styled(Link)`
text-decoration:none;
text-transform:capitalize;
`
export const NewsCard = (props) => {
    return (
        <NewsCardContainer>

            <CardImg src={props.article.urlToImage ? props.article.urlToImage : "https://tse1.mm.bing.net/th?id=OIP.G18_CzK0wvLvX151D7AiPQHaEe&pid=Api&P=0&h=180"} />

            <ArticleDetails>
                <p style={{ marginTop: "1rem", padding: 0 }}>Source: {props.article.source.name ? props.article.source.name : annonymous}</p>
                <p style={{ margin: 0, padding: 0 }}>By: {props.article.author ? props.article.author : "annonymous"}</p>
                <p style={{ margin: 0, padding: 0 }}>On: {props.article.publishedAt ? props.article.publishedAt : "Not specified"}</p>
            </ArticleDetails>

            <NewsHeading>{props.article.title?.slice(0, 50)}...</NewsHeading>
            <p style={{ color: "#78adfe" }}>{props.article.description?.slice(0, 150)}...</p>
            <ButtonReadMore><LinkBtn to={props.article.url} target='_blank'>Read more</LinkBtn></ButtonReadMore>
            <ButtonReadMore><LinkBtn to={props.article.url} target='_blank'>More details</LinkBtn></ButtonReadMore>
        </NewsCardContainer >
    )
}