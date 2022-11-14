import React from 'react'
import { PedidosProvider } from './src/context/PedidosProvider'
import { AppFood } from './AppFood';

import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthProvider';

const App = () => {

  return ( 
    <AuthProvider>
      <PedidosProvider>
        <AppFood/>
      </PedidosProvider>  
    </AuthProvider>
  )
}

export default App