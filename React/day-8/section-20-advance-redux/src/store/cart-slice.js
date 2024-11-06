import {createSlice} from'@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const cartSlice = createSlice({
    name:'ui',
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items || [];
        },
        addItemToCart(state,action){
            state.totalQuantity++;
            const newItem = action.payload;
            const existingItem = state.items.find((item)=>item.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice : newItem.price,
                    name:newItem.title,
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem= state.items.find((item)=> item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if(existingItem.quantity === 1){
                state.items = state.items.filter((item)=>item.id!== id);
            } else{
                existingItem.quantity --;
            }
        }
    }
});

export const sendCartData = (cart) =>{
    return (dispatch)=>{
        dispatch(uiActions.showNotification({
            status : 'pending',
            title: 'sending....',
            message: 'Sending cart data!',
          }))
          const sendRequest = async()=>{
            const response =await fetch('https://dummy-backend-ccd75-default-rtdb.firebaseio.com/cart.json',{
              method:'PUT',
              body:JSON.stringify(cart),
            });
      
            if(!response.ok){
              throw new Error('Sending data failed....')
            }
      
            
      
            dispatch(uiActions.showNotification({
              status : 'success',
              title: 'Success !',
              message: 'Sending cart data successful!',
            }))
          }
      
          sendRequest().catch(
            ()=>
              dispatch(uiActions.showNotification({
              status : 'error',
              title: 'Error!',
              message: 'Sending cart data failed!',
              }))
          )
    }
}



export const fetchCartData =()=>{
    return async (dispatch)=>{
        const fetchData = async () =>{
            const response = await fetch('https://dummy-backend-ccd75-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                console.error('Fetching Data failed from server')
            }

            const data = await response.json();
            return data;
        }

        try {
            const cartData =await fetchData();
            
            dispatch(cartSlice.actions.replaceCart(cartData));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status : 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!',
            }))
            
        }

    }
}

export const cartActions = cartSlice.actions;

export default cartSlice;