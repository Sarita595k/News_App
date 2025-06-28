import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const NavbarContainer = styled.div`
margin-top:-3rem;
background-image: linear-gradient(to right,rgb(129, 183, 223) 0%,rgb(35, 132, 211) 100%);
box-sizing:boder-box;
padding-bottom:2rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
box-shadow:0rem .2rem 1.2rem -.5rem gray;
`

const LogoImage = styled.img`
height:15rem;
`

const StyledNavLink = styled(NavLink)`
    padding: 0 1.2rem;
    text-decoration: none;
    color: black;
    font-size:1.2rem;

    &.active {
    font-weight: bold;
    padding: 0 1.2rem;
    text-decoration: none;
    color: blue;
}
    &:hover{
    border:1px solid darkBlue;
    border-radius:2rem;

    padding:.7rem 1.2rem;
    color:white;
    font-weigth:bold;
    transition:all 1.2s ease-in-out;
    }
`
const NavDiv = styled.div`
margin-top:-2rem;
`

export const Navbar = () => {
    return (
        <NavbarContainer>
            <NavLink to="/"><LogoImage src=".\assets\logo.png" alt="logo Image" /></NavLink>
            <NavDiv>
                <StyledNavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</StyledNavLink>
                <StyledNavLink className={({ isActive }) => isActive ? "active" : ""} to="/business">Business</StyledNavLink>
                <StyledNavLink className={({ isActive }) => isActive ? "active" : ""} to="/health">Health</StyledNavLink>
                <StyledNavLink className={({ isActive }) => isActive ? "active" : ""} to="/sports">Sports</StyledNavLink>
                <StyledNavLink className={({ isActive }) => isActive ? "active" : ""} to="/science">Science</StyledNavLink>
                <StyledNavLink className={({ isActive }) => isActive ? "active" : ""} to="/technology">Technology</StyledNavLink>
                <StyledNavLink className={({ isActive }) => isActive ? "active" : ""} to="/entertainment">Entertainment</StyledNavLink>
            </NavDiv>
        </NavbarContainer>
    )
}