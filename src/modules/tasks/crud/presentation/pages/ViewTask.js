import { taskContext } from "../../provider/TaskContext";

export const ViewTask = (props) =>{

    const createTableRow = (taskObj,index) =>{
        return(
            <tr key={index}>
               <td>{taskObj.id}</td>
               <td>{taskObj.name}</td>
               <td>{taskObj.importance}</td>
               <td>{taskObj.date}</td>
               <td className="p-2">{taskObj.color}</td>
            </tr>
        );
    }

    return (
        <div class="col p-2 m-2">
            <h1 className="h2 border-bottom">View Task {props.match.params.status === 'C' ? "- Completed" : "Pending"}</h1>
            <br/>
            <table className="table table-striped table-hover">
                <thead>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>IMPORTANCE</td>
                    <td>DATE</td>
                    <td>COLOR</td>
                </thead>
                <tbody>
                    <taskContext.Consumer>
                        {
                            (data)=>{
                                return data.tasks.map((task,index)=>{
                                    return createTableRow(task,index);
                                })
                            }
                        } 
                    </taskContext.Consumer>
                </tbody>
            </table>
        </div>
    );
}