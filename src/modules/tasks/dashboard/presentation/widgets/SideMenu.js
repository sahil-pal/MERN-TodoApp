import { API_CLIENT } from "../../../../../shared/services/apiclient";
import { useEffect, useState } from "react";

export const SideMenu = () =>{
    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(
        ()=>{
            const promise = API_CLIENT.get(process.env.REACT_APP_MENU_URL);
            promise.then((result)=>{
                setMenuItems(result.data.menus);
            }).catch(err=>console.log(`Menu Loading Error`));
        },
        []
    );

    const createMenuItem = (name,url) =>{
        return (
            <li className="nav-item">
                <a className="nav-link" href={url}>
                <span data-feather="file"></span>
                    {name}
                </a>
            </li>
        );
    }

    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                Dashboard
                </a>
            </li>
            {
                menuItems.filter((menu)=>menu.active === 'y').map(menu=>createMenuItem(menu.name,menu.url))
            }
            </ul>
        </div>
        </nav>
    );
}