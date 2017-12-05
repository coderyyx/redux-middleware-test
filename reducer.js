export const clickData = (state = {}, action = {}) => {
    switch(action.type){
        case 'CLICK_SUCCESS':
            return Object.assign({},state,action);
        case 'CLICK_START':
            return state;            
        default:
            return state;
    }
}