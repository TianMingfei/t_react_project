//增加和减少
export const add=(num)=>{
    return {type:"ADD", data:num}
}

export const minus=(num)=>{
    return {type:"MINUS", data:num}
}