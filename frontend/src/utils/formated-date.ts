export const formatedDate =(date: string)=>{
  const formatDate =new Date(date);
    const day= formatDate.getDate();
    const month = formatDate.getMonth()+1;
    const year = formatDate.getFullYear();
    return `${day}/${month}/${year}`
}

export const formatedAmericanDate =(date: string)=>{
  const formatDate =new Date(date);
    const day= formatDate.getDate();
    const month = formatDate.getMonth()+1;
    const year = formatDate.getFullYear();
    return `${year}-${month}-${day}`
}