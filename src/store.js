import {createStore} from 'redux';

import reducer from './reducers';

let store = createStore(reducer);//创建仓库

export default store;
