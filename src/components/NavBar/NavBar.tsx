
import { Button, Container,Nav, Navbar  as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import CarT from "../../assets/Cart.svg?react"
import UseShopingCart from "../../context/ShoppingCartContext"

const NavBar = () => {
    const {toggeld,cartQuantity}=UseShopingCart()
    return (
      
        <NavbarBs  className=" bg-white  shadow-lg mb-3 " sticky-top="true">
            <Container>

                <Nav>
            <Nav.Link to={"/"} as={NavLink} >Home</Nav.Link>
            <Nav.Link to={"about"} as={NavLink} >About </Nav.Link>
            <Nav.Link to={"shope"} as={NavLink} >shope </Nav.Link>
                </Nav>
                <Button   onClick={()=>toggeld()} style={{
                    width: '3rem', height: '3rem',  
                    position: 'relative',
            
                }} variant="outline-primary" className="rounded-circle" >
                    <CarT />
                    <div className=" rounded-circle  bg-danger d-flex justify-content-center align-items-center     "
                    style={{color:'white', left:'0' ,top:'0' ,position:'absolute', transform: "translate(-25%,-25%)" ,width:'1.5rem' ,height:'1.5rem'}}
                    >
                        {cartQuantity}
                    </div>
                </Button>
            </Container>

        </NavbarBs >
  )
}

export default NavBar