import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/Notification'
import {useDispatch, useSelector} from 'react-redux';
import { uiActions } from './store/ui-slice';
import { fetchCartData, sendCartData } from './store/cart-slice';

let initial = true;
function App() {
  const showCart =useSelector(state=>state.ui.cartIsVisible)
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();


  const notification = useSelector(state => state.ui.notification)


  // useEffect(()=>{
  //   dispatch(fetchCartData());
  // },[])

  useEffect(()=>{
    if(initial){
      initial=false;
      dispatch(fetchCartData());
      return ;
    }

    // dispatch(uiActions.showNotification({
    //   status : 'pending',
    //   title: 'sending....',
    //   message: 'Sending cart data!',
    // }))
    // const sendCartData = async()=>{
    //   const response =await fetch('https://dummy-backend-ccd75-default-rtdb.firebaseio.com/cart.json',{
    //     method:'PUT',
    //     body:JSON.stringify(cart),
    //   });

    //   if(!response.ok){
    //     throw new Error('Sending data failed....')
    //   }

      

    //   dispatch(uiActions.showNotification({
    //     status : 'success',
    //     title: 'Success !',
    //     message: 'Sending cart data successful!',
    //   }))
    // }

    // sendCartData().catch(
    //   ()=>
    //     dispatch(uiActions.showNotification({
    //     status : 'error',
    //     title: 'Error!',
    //     message: 'Sending cart data failed!',
    //     }))
    // )

    dispatch(sendCartData(cart));
    
  },[cart])
  return (
    <>
      {notification && <Notification {...notification}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
