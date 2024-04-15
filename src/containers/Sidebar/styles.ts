import styled from 'styled-components'
import { Paragrafo } from '../../components/Paragrafo/styles'

export const Descricao = styled(Paragrafo)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-color: #9099a2;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #172f45;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
