  
export default{
    state:{
        itemList:[],
        userList:[]
    },
    mutations:{
        setItem(state, item){
            state.itemList.push(item);
        }
    }
}