import React ,{useEffect,useState}from "react";
import { useParams, useRoutes } from "react-router-dom";
import { getPrograms } from "../services/program";
import List from "../components/List/List";
export default function Program(){
    const  { programId  }= useParams() 
    const [programs,setPrograms] = useState(programs);
    useEffect( async ()=>{
        const { data } = await getPrograms()
        setPrograms(data)
        console.log(data) 
    })
    return (
    <div>
        <h1 className="text-3xl to-black">Programs</h1>
        <List list={programs} />
    </div>)


}