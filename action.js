export const click = (params) =>{
    return dispatch => {
        dispatch({
            type : 'CLICK_START',
            path : 'loading'
          });
        
        // setTimeout(()=>dispatch({
        //     type : 'CLICK_SUCCESS',
        //     path : 'loaded',
        //     data : 'receive_data'
        //   }),10000)
    }
}