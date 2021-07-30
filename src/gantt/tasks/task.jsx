import './task.scss';
import Predecessor from "./predecessor";
import Fstart from "./fstart";
import Lenght from "./lenght";
import Name from "./name";
import Order from "./order";
import Owner from "./owner";
import Graph from './graph';

const Task = () => {

    return(
        <div className="task">
            <Order /> <Name /> <Fstart /> <Lenght /> <Owner /> <Predecessor /> <Graph />
        </div>        
    )

}

export default Task;