import { Link } from "react-router-dom";

export const Header = () =>{
    const companyName = process.env.REACT_APP_COMPANY_NAME;
    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2 shadow">
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-2" to="/"><em className="display-6">{companyName}</em></Link>       
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <button className="btn btn-md btn-danger nav-link px-3"><strong>Sign out</strong></button>
                </div>
            </div>
        </header>
    );
}