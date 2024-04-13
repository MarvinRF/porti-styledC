import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Titulo>Projeto</Titulo>
    <Paragrafo tipo="secundario">Lorem ipsum dolor</Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
