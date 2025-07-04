import { useEffect, useState } from "react"

export const fetchCricketMatch = () => {
    const [match, setMatch] = useState([])

    const fetchMatchUrl = () => {

    }
    useEffect(() => {
        fetchMatchUrl()
    })
    return (
        <h1>Cricket Match</h1>
    )
}