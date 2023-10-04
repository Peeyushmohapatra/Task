export const reducer = (state ={items:[]},action) => {
    if(action.type === "information"){
        console.log(action.payload);
        return {
            ...state,
            items:action.payload
        }
    }
    return state
}