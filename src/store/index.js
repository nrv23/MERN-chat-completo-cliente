import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer  from '../reducer/rootReducer';

//habilitar el modo dev de redux dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;