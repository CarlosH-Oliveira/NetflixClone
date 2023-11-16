import "./header.css"

interface props{
    class:any
}

export default function Header (props:props) {
    return(
        <header className={props.class}>
            <div className="header-logo">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" className="header-logo-img" />
            </div>
            <div className="header-user">
                <img src="https://netflix-bootcamp-db.netlify.app/static/media/profileIcon1.b36331ae.jpg" className="header-user-img" />
            </div>
        </header>
    )
}