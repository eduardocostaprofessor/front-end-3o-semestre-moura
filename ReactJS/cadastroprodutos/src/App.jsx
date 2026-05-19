import './App.css'
import CadastroProdutoPage from './pages/cadastroproduto/cadastroprodutopage'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import CadastroFrutasPage from './pages/cadastrofruta/cadastrofrutapage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/header'

export default function App(){
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<QuemSomosPage />} path='/quemsomos' />
        <Route element={<CadastroFrutasPage />} path='/frutas' />
        <Route element={<CadastroProdutoPage />} path='/produtos' />
      </Routes>
    </BrowserRouter>
  )
}