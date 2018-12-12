export function tabbar(status){
	return {
		type:'CHANGE_TABBAR_STATUS',
		payload:status
	}
}
export function headTab(status){
	return {
		type:'CHANGE_HEAD_STATUS',
		payload:status
	}
}
