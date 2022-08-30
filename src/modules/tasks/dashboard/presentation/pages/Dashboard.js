import { Header } from "../widgets/Header";
import { SideMenu } from "../widgets/SideMenu";
import { Route,Switch } from "react-router";
import {AddTask} from "../../../crud/presentation/pages/AddTask";
import {UpdateTask} from "../../../crud/presentation/pages/UpdateTask";
import {DeleteTask} from "../../../crud/presentation/pages/DeleteTask";
import {ViewTask} from "../../../crud/presentation/pages/ViewTask";
import {SearchTask} from "../../../crud/presentation/pages/SearchTask";
import {Summary} from "../../../crud/presentation/pages/Summary";
import { Error } from "../../../../../shared/widgets/error";

export const DashBoard = () =>{
    return (
        <>
           <Header/>
           <div className="container-fluid">
                <div className="row">
                   <SideMenu/>
                   <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-1 mb-3 ">
                            <Switch>
                                <Route exact path="/" component={Summary}/>
                                <Route  path="/add" component={AddTask}/>
                                {/* Status of View : Completed Task or Pending Tasks */}
                                <Route exact path="/view/:status" component={ViewTask}/>
                                <Route exact path="/update" component={UpdateTask}/>
                                <Route exact path="/delete" component={DeleteTask}/>
                                <Route exact path="/search" component={SearchTask}/>
                                <Route component={Error}/>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div> 
        </>
    );
}