import { useEffect, useState } from "react";
import { dataFetch } from "../types/tarefas-types";
import { getAllTarefas } from "../api";
import { getTarefasByMonth } from "../utils/get-tarefas-by-month";



export default function useTarefas(){
  const [data, setData] = useState<dataFetch[]>([]);
  const [loadingDate, setLoadingSate] = useState(false);
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        setLoadingSate(true)
        let res = await getAllTarefas();
        setData(getTarefasByMonth(res))
        setTimeout(()=>{
          setLoadingSate(false)
        },2000)
        console.log(res.data)
      } catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, [])
  
  return {
    data, loadingDate
  }
}