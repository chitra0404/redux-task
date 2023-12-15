import { useState } from 'react'
import store from './store';
import Home from './Home';
import { Provider } from 'react-redux';

function App() {
 

  return (
   <Provider store={store}>
    <Home/>
    
   </Provider>
  )
}

export default App
