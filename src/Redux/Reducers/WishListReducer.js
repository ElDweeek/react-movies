
const INITIAL_VALUE = {
    wishList: "0"
}


export default function wishListReducer(state=INITIAL_VALUE, action){
    switch(action.type){
        case "ADD_WISH_LIST":
            return{
                ...state,
                wishList: action.payload
            }
        default: 
            return state
    }

}