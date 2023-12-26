

export function ConvertarData(value){
    const newData=new Date(value);
    const date={
        dia:newData.getDate(),
        mes:newData.getMonth()+1,
        ano:newData.getFullYear(),
        hora:`${newData.getHours()}:${newData.getMinutes()}`
    
    }
    return date
}