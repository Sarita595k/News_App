import { FetchIndiaNews } from "../Components/FetchIndiaNews"

export const Science = () => {
    return (
        <div>
            <h1 className="newsTagline">what's going on in Science!</h1>
            <FetchIndiaNews name="science" />
        </div>
    )
}