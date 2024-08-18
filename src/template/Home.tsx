import { Container } from '@mantine/core'
import React from 'react'
import { Header } from '../components/Header/Header'

function Home({children}: { children: React.ReactNode }): React.ReactElement {
  return (
    <>
    <Header/>
    <Container px={"2rem"}>
        {children}
    </Container>
    </>
  )
}

export default Home