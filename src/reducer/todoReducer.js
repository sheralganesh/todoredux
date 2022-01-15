const  initialData={
    list:[]
}
// const [list, setlist] = useState(initialState)

const todoReducer=(state=initialData,action )=>{
switch(action.type){
    case"ADDTODO":

  const {id,data}=action.payload;

  return{
      ...state,
      list:[
         ...state.list,
         {
             id:id,
             data:data
         }
      ]
  }
  case"DELETE_TODO":
    
  const newList= state.list.filter((elem)=>elem.id!=action.id)

  return{
      ...state,
      list:newList
  }
  default:return state;
}
}

export default todoReducer;