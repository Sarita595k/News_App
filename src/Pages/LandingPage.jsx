import { FetchIndiaNews } from "../Components/FetchIndiaNews"
import { Header } from "../Components/Header"
// import { FetchNews } from "../Components/FetchNews"
import "../Components/Styles/commonStyle.css"

export const LandingPage = () => {

    return (
        <div>
            <h1 className="newsTagline">news which tells everything.About everyone!</h1>
            <FetchIndiaNews name="general" />
        </div>
    )
}