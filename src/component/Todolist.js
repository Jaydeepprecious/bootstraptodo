import React ,{useEffect, useState}from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

function Todolist(){
    const [modal, setModal] = useState(false);
    const[taskList,setTaskList]=useState([]);
    useEffect(()=>{
        let arr=localStorage.getItem("taskList")
     
        if(arr)
        {
            let obj=JSON.parse(arr);
            setTaskList(obj);

        }
    },[])
    const toggle=()=>{
        setModal(!modal);
    }
    const saveTask=(taskobj)=>{
        let tempList=taskList;
        tempList.push(taskobj);

        localStorage.setItem("taskList",JSON.stringify(taskList));
        setTaskList(tempList);
        setModal(false);
    }
  return(
    <>
    <div className="container text-center">
    <h1>TODOLIST</h1>
    <button className="btn btn-primary" onClick={()=>setModal(true)}>Create TODOLIST</button>
    </div>
    <div className="information">
        {taskList&&taskList.map((obj,index)=><Card taskobj={obj} index={index}/>)}
        </div>

    <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    </>
  )
}
export default Todolist;