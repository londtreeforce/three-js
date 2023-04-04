import React from 'react'
import styled from 'styled-components'

import logo from '../img/logo.svg'
import search from '../img/search.svg'

const Section = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 90%; 
  
  border-radius: 5px;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 70px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 50px;
  cursor: pointer;
`;

const Button = styled.button`
    
`


const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
            <Logo src={logo}/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Project</ListItem>
                <ListItem>About</ListItem>
            </List>

        </Links>



        <Icons>
            <Icon src={search} />
            <Button>Search</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar