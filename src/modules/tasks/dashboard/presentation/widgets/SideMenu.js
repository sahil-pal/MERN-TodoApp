import { API_CLIENT } from "../../../../../shared/services/apiclient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

    const createURL = (url) => {
        // Query String params
        if(url === "/add"){
            url += "?type=a";
        }
        // Path Paras
        else if(url === "/view"){
            url += "/C";
        }
        return url;
    }

    const createMenuItem = (name,url,index) =>{
        return (
            <li key={index} className="nav-item text-center bg-warning mt-3 mb-2">
                {/* Normal Way */
                /* <a className="nav-link" aria-current="page" href={url}>
                <span data-feather="home"></span>
                {name}
                </a> */}
   
                {/* Version5 Routing */
                    <Link className="nav-link" to={createURL(url)}>{name}</Link>
                }
            </li>
        );
    }

    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item text-center bg-warning mt-3 mb-2">
                    <Link to={"/"} className="nav-link nav-link-active">Dashboard</Link>
                </li>
            {
                menuItems.filter((menu)=>menu.active === 'y').map((menu,index)=>createMenuItem(menu.name,menu.url,index))
            }
            </ul>
        </div>
        </nav>
    );
}