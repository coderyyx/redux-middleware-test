const yyx_middleware_debug_1= ({ getState }) => next => (action) => {
    // return null;
    console.log('********************');
    let preState = getState();
    console.log(preState);
    next(action);
    console.log('********************');
    let nextState = getState();
    console.log(nextState);
  }

export default yyx_middleware_debug_1;