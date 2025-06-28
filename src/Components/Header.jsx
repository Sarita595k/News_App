import styled from "styled-components"
const HeaderDiv = styled.div`
height:70vh;`
export const Header = (props) => {
    console.log(props.article)
    return (
        <div>
            <HeaderDiv>
                <img src={props.article.urlToImage} alt="" />
            </HeaderDiv>
        </div>
    )
}