export const rangeTimeline =(startTimeline: string, deadline: string)=>{
  const rangeProjectInMs= new Date(deadline).getTime() - new Date(startTimeline).getTime();
  const rangeTodayInMs= new Date().getTime() - new Date(americanFormat(startTimeline)).getTime();
  return Math.ceil((formatInDays(rangeTodayInMs)*100)/(formatInDays(rangeProjectInMs)))
}

const formatInDays =(value: number)=>{
  return Math.ceil(value / (1000 * 3600 * 24)); 
}

const americanFormat=(date: string)=>{
   const newdate= new Date(date);
    return `${newdate.getFullYear()}, ${newdate.getMonth()+1}, ${newdate.getDate()}`
}