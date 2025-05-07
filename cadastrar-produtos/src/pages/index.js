import Link from 'next/link'

export default function Home({ products }) {
  return (
    <div className="container">
      <h1>Catálogo de Produtos</h1>
      <Link href="/novo-produto">
        <button className="btn">Adicionar Produto</button>
      </Link>

      <ul className="product-list">
        {products.map((p, i) => (
          <li key={i}>
            <strong>{p.name}</strong> — R$ {p.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
