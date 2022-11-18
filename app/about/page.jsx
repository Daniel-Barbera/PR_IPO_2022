'use client'; 
import styled from 'styled-components';
import People from './people'

// We will make a styled component called People and use it in the JSX below.
// It will be a container for the people we want to display.

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
`

// We will make a styled component used Person and place it inside the PeopleContainer.
// It will be a container for each person we want to display.
// The data each person will have is passed in as props.
// Each person will have a name, a title, a bio and a photo.

const Person = styled.div`
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

export default function About () {
  return (
    <PeopleContainer>
      {People.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          title={person.title}
          bio={person.bio}
          image={person.image}
        />
      ))}
    </PeopleContainer>
  )
}
