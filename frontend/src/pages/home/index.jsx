

import Cabecalho from '../../components/cadastro/Cabecalho.jsx'
import Rodape from '../../components/rodape/Index.jsx'
import Cartao from '../../components/cartao/Index.jsx'
import fundo from '../../assets/images/aiai.png'

import './index.scss'



export default function App(){
    return(
        <div>
          <Cabecalho/>
          <main>

          <p>Seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!</p>

         <Cartao 
         imagem='https://cinemacomrapadura.com.br/imagens/2018/04/20180409-vingadores.jpg'
         titulo='Livros de super heróis'
         descricao='Em nossa livraria você vai encontrar livros de diversos heróis da atualidade! '
         
         
         
         />

         <Cartao 
         imagem='https://www.multiflon.com.br/images/Blog/Capa-livro-de-receitas.png'
         titulo='Livros de Receita'
         descricao='Se quer cozinhar algo gostoso, compre livros de receitas com tudo que precisa saber!'
         direita         
         
         />

    </main>

         <Rodape/>




        </div>
    )
}