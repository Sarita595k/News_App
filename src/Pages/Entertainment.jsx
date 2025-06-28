import { FetchIndiaNews } from "../Components/FetchIndiaNews"

export const Entertainment = () => {
    return (<div >
        <h1 className="newsTagline">drama! drama! and only drama!</h1>
        <FetchIndiaNews name="entertainment" />
    </div>)
}