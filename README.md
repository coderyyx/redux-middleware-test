# redux-middleware-test



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+   createStore(reducer,compose(applyMiddleware(m1,m2..)))            +
+   真正store的创建是在applyMiddleware中                                 +
+   chain中间件数组传入store返回next函数                                  +
+                                                                     +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            ||
            ||
            ||
            ||
            
++++++++++++++++++++++
+  compose(chain)    +
+                    +  ================>
+                    +             
++++++++++++++++++++++


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+   function createThunkMiddleware(extraArgument) {
+        return function (_ref) {
+            var dispatch = _ref.dispatch,
+                getState = _ref.getState;
+            return function (next) {
+               return function (action) {
+                   if (typeof action === 'function') {
+                   return action(dispatch, getState, extraArgument);
+                   }
+
+                   return next(action);
+               };
+            };
+        };
+   }
+
+   next是下一个中间件的next函数，所以调用next(action)相当于执行下一个中间件的代码
+   
+   compose(chain)(sotre.dispatch)生成的dispatch是增强后的dispatch
+
+
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++