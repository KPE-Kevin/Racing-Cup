import Link from "next/link";
function Header() {
    return ( 
    <header>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
    <Link className="navbar-brand" href="/">2 Reacing Cup</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
        <Link className="nav-link" href="/eventos">Eventos</Link>
        <Link className="nav-link" href="/Talleres">Talleres</Link>
        <Link className="nav-link " href="#">Registro</Link>
        <Link className="nav-link "href="#">Contactos</Link>
    </div>
    </div>
</div>
</nav>
    
    
    </header> );
    
}

export default Header;