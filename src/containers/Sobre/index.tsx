import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <>
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae
        vitae amet ad laborum esse! Maiores perspiciatis exercitationem commodi.
        Obcaecati dolorem officia optio sit in vero vel quidem minus ab?
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=MarvinRF&show_icons=true&theme=prussian&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarvinRF&layout=compact&langs_count=7&theme=prussian" />
      </GithubSecao>
    </section>
  </>
)

export default Sobre
