import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Toast, ToastHeader } from 'reactstrap'



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
                <NavLink href="#">
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/huseyinbattal">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

            <NavbarText>
              <Toast style={{ width:"120px", marginTop: "10px",position:"fixed", top:"0",right:"0"}}>
                <ToastHeader icon="success">
                  {this.props.cart.length} Items Added.
                </ToastHeader>
              </Toast>

            </NavbarText>

          </Collapse>
        </Navbar>
      </div>
    )
  }
}
