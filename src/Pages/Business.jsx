import { FetchIndiaNews } from "../Components/FetchIndiaNews"

export const Business = () => {
    return (
        <div>
            <h1 className="newsTagline">Welcome to Business corner</h1>
            <FetchIndiaNews name="business" />
        </div>
    )
}