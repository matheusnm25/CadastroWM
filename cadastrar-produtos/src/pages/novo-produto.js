import { useState } from 'react'
import { useRouter } from 'next/router'

export default function NovoProduto({ products, setProducts }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    setProducts([...products, { name, price }])
    router.push('/')
  }

  return (
    <div className="container">
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nome do produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  )
}
