import { Header } from "../widgets/Header";
import { SideMenu } from "../widgets/SideMenu";

export const DashBoard = () =>{
    return (
        <>
           <Header/>
           <div className="container-fluid">
                <div className="row">
                   <SideMenu/>
                   <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-1 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>
                    </main>
                </div>
            </div> 
        </>
    );
}