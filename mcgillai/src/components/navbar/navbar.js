import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from '@emotion/styled';

const Container=styled('div')`

`;

const NavbarContent = styled('div')`
`;

const BlogLink = styled('a')`
  display: inline-block;
  margin-top: 4.75px;
  margin-left: 0.5px;
`;

class Navigation extends React.Component {

	render () {
		return (
      <Container>
        <NavbarContent>
        <Navbar inverse collapseOnSelect expand="md" bg="dark" className = 'navbarcustom navbar-toggleable-lg navbar-fixed-top'>
          
          <Navbar.Brand>
            <Link to='/'>
              <img
              src="/logo.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="McGillAI logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='navtext'/>
          <Navbar.Collapse className = "navbar-collapse" id="basic-navbar">
            <Nav className = "mr-auto">
              <Nav.Link><Link to='/ourteam'><Navbar.Text className='navtext'>Our Team</Navbar.Text></Link></Nav.Link>
              <Nav.Link><Link to='/mais202'><Navbar.Text className='navtext'>MAIS202</Navbar.Text></Link></Nav.Link>
              <Nav.Link><Link to='/faq'><Navbar.Text className='navtext'>FAQ</Navbar.Text></Link></Nav.Link>
              <BlogLink target="_blank" href= "https://medium.com/mcgill-artificial-intelligence-review" rel="noopener"><Navbar.Text className='navtext'>Blog</Navbar.Text></BlogLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </NavbarContent>
      </Container>
			
		);
	}
}

export default Navigation;