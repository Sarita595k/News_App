import styled from "styled-components"


const SideHeaderDiv = styled.div`
width:100%;
height:80%;
`
const SideHeaderImg = styled.img`
width:100%;
height:100%;
`
export const SideHeader = (props) => {
    return (
        <SideHeaderDiv>
            <SideHeaderImg src={props.article.urlToImage ? props.article.urlToImage : "https://tse1.mm.bing.net/th?id=OIP.G18_CzK0wvLvX151D7AiPQHaEe&pid=Api&P=0&h=180"} alt={props.article.title} />
            <h4>{props.article.title}</h4>
        </SideHeaderDiv>
    )
}