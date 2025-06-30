import styled from "styled-components"
const HeaderDiv = styled.div`
height:50%;
width:100%;
text-align:center;
`
const HeaderDivImg = styled.img`
width:100%;
height:100%;
`

const HeaderDivHeading = styled.div`
font-size:2rem;
font-weight:bold;
margin:2% 10%;
`
export const Header = (props) => {
    console.log(props.article)
    return (
        <div>
            <HeaderDiv>
                <HeaderDivHeading>{props.article?.title}</HeaderDivHeading>
                <HeaderDivImg src={props.article?.urlToImage} alt={props.article?.title} />

            </HeaderDiv>
        </div>
    )
}