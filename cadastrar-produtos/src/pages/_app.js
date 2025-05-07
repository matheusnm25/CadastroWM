import '../styles/globals.css'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([])
  return (
    <Component
      {...pageProps}
      products={products}
      setProducts={setProducts}
    />
  )
}
