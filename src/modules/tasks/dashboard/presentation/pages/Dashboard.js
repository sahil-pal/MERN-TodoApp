import { Header } from "../widgets/Header";
import { SideMenu } from "../widgets/SideMenu";
import { AppRoutes } from "../../../../../config/routes/App_routes";

export const DashBoard = () =>{
    return (
        <>
           <Header/>
           <div className="container-fluid">
                <div className="row">
                   <SideMenu/>
                   <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-1 mb-3 ">
                            {/* <Routes>
                                Version 5 way <Route exact path="/" component={Summary}/>
                                <Route exact path="/" element={<Summary/>}/>
                                <Route  path="/add" element={<AddTask/>}/>
                                Status of View : Completed Task or Pending Tasks
                                <Route exact path="/view/:status" element={<ViewTask/>}/>
                                <Route exact path="/delete" element={<DeleteTask/>}/>
                                <Route exact path="/search" element={<SearchTask/>}/>
                                <Route path="*" element={<Error/>}/>
                            </Routes> */}

                            {/* Routing : useRoutes */}
                            <AppRoutes/>
                        </div>
                    </main>
                </div>
            </div> 
        </>
    );
}