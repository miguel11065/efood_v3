import HeaderRestaurante from '../../components/HeaderRestaurante'
import ListaPratos from '../../components/ListaPratos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export type PratosAPI = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Pratos = () => {
  const { id } = useParams()

  const [lista, setLista] = useState<PratosAPI[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setLista(res[0]?.cardapio || []))
      .catch((error) => {
        console.error('Erro na chamada da API:', error)
      })
  }, [id])

  return (
    <>
      <HeaderRestaurante />
      <ListaPratos pratos={lista} />
    </>
  )
}

export default Pratos
