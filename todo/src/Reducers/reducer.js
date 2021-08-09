/* eslint-disable no-duplicate-case */
/* eslint-disable no-unreachable */
/* eslint-disable default-case */
const initialData = {
  list: [],
};

export const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {

        
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              name: data,
            },
          ],
        }
      
 

    case "DELETE_TODO":
           const newValue=  state.list.filter((elem) => elem.id !== action.id)
          return {
            ...state,
            list: newValue
          };
          break;

        case "EDIT_TODO":
            const updatedValue = state.list.map((elem) => {
                if(elem.id === action.payload.id){
                    return { ...elem, name: action.payload.data};
                }else{

                    console.log("elem", elem)
                    return elem;
                }
            });

            return {
                ...state,
                list: updatedValue
              };
        break;

        case "REMOVE_TODO": return {
            ...state,
            list: []
            };
        default: return state;
        }
 
  }

