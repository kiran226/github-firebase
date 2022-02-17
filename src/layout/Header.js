import React,{useState,useContext} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserContext'

const Header=()=>{

    const context = useContext(UserContext);
    const[isOpen,setIsopen] =useState(false);

    const toggle=()=>setIsopen(!isOpen);

    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">LCO gitfire app</Link>
            </NavbarBrand>
            <NavbarText className="text-white">
             { context.user?.email ? context.user.email :"" }
            </NavbarText>
             <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                {context.user ? (
                    <NavItem>
                        <NavLink tag={Link} to="/" className="text-white">
                            Logout
                        </NavLink>
                    </NavItem>

                    ) :(
                        <React.Fragment>
                        <NavItem>
                        <NavLink tag={Link} to="/" className="text-white">
                            Signup
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} to="/" className="text-white">
                            Signin
                        </NavLink>
                    </NavItem>
                        </React.Fragment>
                    ) }
                    

                    

                </Nav>
            </Collapse>

        </Navbar>
    )
}
export default Header;