import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Toast, ToastHeader, Badge } from 'reactstrap'



export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
            <img width="50px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' />
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="https://github.com/huseyinbattal">
                 <b style={{color:"lightblue"}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg> My GitHub Profile</b>
                </NavLink>
              </NavItem>
            </Nav>

            <NavbarText>
              <Toast style={{width:"180px", marginTop: "10px",position:"fixed", top:"0",right:"0"}}>
                <ToastHeader>
                  <Badge style={{width:"50px",height:"50px", textAlign:"center", fontSize:"30px"}}  color='success'>{this.props.cart.length} </Badge> <b style={{color:"green"}}>Items Added.</b>
                </ToastHeader>
              </Toast>

            </NavbarText>

          </Collapse>
        </Navbar>
      </div>
    )
  }
}
