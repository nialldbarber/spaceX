import styled from 'styled-components'
// Utils
import { containerMixin } from 'styles/utils/mixins'

export const Container = styled.div`
  display: block;
  ${containerMixin};

  .launches {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
`
