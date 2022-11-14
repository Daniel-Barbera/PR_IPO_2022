'use client'; 
import styled from 'styled-components';
import Link from 'next/link';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0.5rem;
  text-align: center;
`;

const LinkToGame = styled(Link)`
  color: #0070f3;
  text-decoration: none;
`;


export default function Games() {
  return (
    <Page>
      <h1>Games</h1>
      <p>
        <LinkToGame href="/games/simon">
          Simon
        </LinkToGame>
      </p>
    </Page>
  );
}