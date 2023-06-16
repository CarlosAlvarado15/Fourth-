function Header(prop) {
    return (
        <div className="header">
            <div className="star">
                <img className="Logo" src="https://seeklogo.com/images/N/nba-logo-41668C66DB-seeklogo.com.png"alt="star" />
            </div>
            <h1>{prop.header}</h1>
        </div>
    )
}
export default Header