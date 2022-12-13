
const timeNumber = (state =1,action)=>{
    switch(action.type){
        case "Multiply": return state*5;
        case "Divide" : return state/5;
        default : return  state;
    }
}
export default timeNumber;