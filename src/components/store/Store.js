import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext([])

export default function Store({children}) {
  const [cart, setCart] = useState([])

  return (
    <div>
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
    </div>
  )
}
