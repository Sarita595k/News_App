import { FetchIndiaNews } from "../Components/FetchIndiaNews"

export const Technology = () => {
    return (
        <div>
            <h1 className="newsTagline">get update what is happening in the world of tech!</h1>
            <FetchIndiaNews name="technology" />
        </div>
    )
}