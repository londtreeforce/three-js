import Banner from "./Components/Banner";
import About from "./Components/About";

import Project from "./Components/Project";
import styled from 'styled-components'



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  
  &::-webkit-scrollbar{
    display: none;
  }
`;


function App() {
  return (
    <Container className="background_img" >
      <Banner />
      <About />
      
      <Project />
    </Container>
  );
}

export default App;
