let initState={
	tabbarStatus:true,
	headStatus:true
}
let commonReducer =(state=initState,action)=>{
	switch(action.type){
		case 'CHANGE_TABBAR_STATUS':
			return {
				...state,
				tabbarStatus:action.payload
			};
		case 'CHANGE_HEAD_STATUS':
		return {
			...state,
			headStatus:action.payload
		}
		default:
		return state;
	}
}
export default commonReducer;
