import Tasklengthgraph from "./tasklengthgraph";
import Utime from "./utime"

const gtime = [];
for (let i =0; i<60; i++) {
    gtime.push(<Utime />);
}

const Graph = () => {

    return(
        <div className="task-graph">
           {gtime} <Tasklengthgraph />
        </div>    
    )
}

export default Graph;