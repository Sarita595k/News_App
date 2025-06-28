import { FetchIndiaNews } from "../Components/FetchIndiaNews"

export const Sports = () => {
    return (
        <div>
            <h1 className="newsTagline">let's catch up with the most facinating thing of life!</h1>
            <FetchIndiaNews name="sports" />
        </div>
    )
}