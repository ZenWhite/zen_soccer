import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  animation: ${rotate} 12s linear infinite;
`
