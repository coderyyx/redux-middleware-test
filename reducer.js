export const clickData = (state = {}, action = {}) => {
    switch(action.type){
        case 'CLICK_SUCCESS':
            return Object.assign({},state,action);
        case 'CLICK_START':
            return Object.assign({},state,{path:'loading'});   
        case '@@redux/INIT':
            return {INIT:'@@redux/INIT'};         
        default:
            return state;
    }
}