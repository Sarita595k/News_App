import { FetchIndiaNews } from "../Components/FetchIndiaNews"

export const Health = () => {
    return (
        <div>
            <h1 className="newsTagline">Health News</h1>
            <FetchIndiaNews name="health" />
        </div>
    )
}