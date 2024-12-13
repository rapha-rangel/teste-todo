import { TarefasTitleType, ToDoListTypes } from "../types/tarefas-types"

export const getTarefasByMonth=(tarefas: ToDoListTypes[])=>{
  const today = new Date();
  const result = [{
    title:TarefasTitleType.PASSEDDEADLINE, array:[] as ToDoListTypes[]
  },{
    title:TarefasTitleType.THISMONTH, array:[] as ToDoListTypes[]
  },{
    title:TarefasTitleType.NEXTMONTH, array:[] as ToDoListTypes[]
  }, {
    title:TarefasTitleType.INTWOMONTH, array:[] as ToDoListTypes[]
  },{
    title:TarefasTitleType.THREEMONTHOTMORE, array:[] as ToDoListTypes[]
  }
  ];
  tarefas.forEach((tarefa)=>{
    const date =new Date(tarefa.limitDate);
    const month = date.getMonth();
    const year = date.getFullYear();

    const yearDiference =(year -today.getFullYear())* 12;
    const monthDiference= month - today.getMonth();
    const timeDiference = yearDiference + monthDiference;
    console.log(yearDiference, monthDiference, timeDiference)
    if(timeDiference <0){
      result[0].array.push(tarefa)
    } else if(timeDiference ===0){
      result[1].array.push(tarefa)
    }else if(timeDiference ===1){
      result[2].array.push(tarefa)
    }else if(timeDiference ===2){
      result[3].array.push(tarefa)
    }else if(timeDiference >=3){
      result[4].array.push(tarefa)
    }
  });
  return result.filter((tarefa)=> tarefa.array.length>0)
}
