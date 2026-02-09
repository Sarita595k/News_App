export const Footer = () => {
    const dateIs = new Date().getFullYear()
    return (
        <div>
            <div>
                <h5>{dateIs} &copy; All rights resreved!</h5>
                <h5>Powered by Avsar</h5>
            </div>
        </div>
    )
}