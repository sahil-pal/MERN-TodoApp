import { useRoutes } from "react-router-dom"
import { AddTask } from "../../modules/tasks/crud/presentation/pages/AddTask";
import { DeleteTask } from "../../modules/tasks/crud/presentation/pages/DeleteTask";
import { SearchTask } from "../../modules/tasks/crud/presentation/pages/SearchTask";
import { Summary } from "../../modules/tasks/crud/presentation/pages/Summary";
import { ViewTask } from "../../modules/tasks/crud/presentation/pages/ViewTask";
import { Error } from "../../shared/widgets/error";

export const AppRoutes = () => {

    const allRoutes = useRoutes([
        {path:'/',element:<Summary/>},
        {path:'/add',element:<AddTask/>},
        {path:'/view/:status',element:<ViewTask/>},
        {path:'/delete',element:<DeleteTask/>},
        {path:'/search',element:<SearchTask/>},
        {paht:'*',element:<Error/>}
    ]);

    return allRoutes;
}