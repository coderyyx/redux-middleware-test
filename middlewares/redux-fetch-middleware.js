import { isArray } from "util";
import { access } from "fs";
import { loadavg } from "os";
import 'whatwg-fetch';

const fetchMiddleware = store => next => action =>{
    let {dispatch,getState} = store;
    /**
     * 标准action进入下一个中间价
     */
    const {url,types,method,params} = action;

    if(!url || !isArray(types)){
        next(action);
    }
    /**
     * 自定义action
     */

    const [LOADING,SUCCESS,ERROR] = types;
    
    //设置loading
    next({
        type:LOADING,
        loading:true
    });
    
    //异步请求
    fetch(access.url).then(result=>{
        next({
            type:SUCCESS,
            loading:false,
            data:result
        })
    }).catch(error=>{
        next({
            type:ERROR,
            loading:false,
            reason:error
        })
    })
}