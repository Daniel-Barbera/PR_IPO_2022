'use client'; 
import styled from 'styled-components';

// Box of text with a title and a body. The text in the body will be justified and the text in the title will be centered.
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin-bottom: 2rem;
`

// The title of the box. It will be centered.
const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

// The body of the box. It will be justified.
const Body = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  margin: auto;
  margin-bottom: 1rem;
  white-space: pre-line;
`
const Email = styled.a`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  margin: auto;
  margin-bottom: 1rem;
  color: #343434;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
  white-space: pre-line;
`


export default function Contact () {
  return (
    <Box>
      <Title>Contacta con nosotros</Title>
      <Body>
        Si tienes alguna duda o quieres contactar con nosotros, puedes hacerlo a través de nuestro correo electrónico:
      </Body>
      <Email href="mailto:pripo2022@gmail.com">
        pripo2022@gmail.com 
      </Email>
      <Body>
        También puedes levantar una incidencia en nuestro repositorio de GitHub:
      </Body>
      <Email href="https://github.com/Daniel-Barbera/PR_IPO_2022">
        https://github.com/Daniel-Barbera/PR_IPO_2022
        </Email>
      <Body>
        ¡Gracias por tu interés!
      </Body>
    </Box>
  )
}
