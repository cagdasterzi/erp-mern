import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <h2>Firma Takip Sistemi</h2>
                <div className="dropdown">
                    <button className="material-symbols-outlined">
                        menu
                    </button>

                    <div className="dropdown-content">
                        <Link to="/">
                            <p>Ana Sayfa</p>
                        </Link>

                        <Link to="/NewClient">
                            <p>Yeni Firma Ekle</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;