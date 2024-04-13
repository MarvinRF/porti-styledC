import styled from 'styled-components'
import { Props } from './index'

export const Paragrafo = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#919191' : '#ffff')};
  line-height: 22px;
`
