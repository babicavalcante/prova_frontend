import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar style={{ backgroundColor: '#6a0dad' }} variant="dark">
                <Container>
                    <Navbar.Brand href="/">FashionB</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/designers">
                               Designers
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/marcas">
                               marcas
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/pecas">
                               Peças de Roupa
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/eventos">
                               Eventos de Moda
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/modelos">
                               Modelos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/clientes">
                               Clientes
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <div className="text-center p-3" style={{ backgroundColor: '#b19cd9' }}>
                <h1 style={{ color: '#ffffff' }}>{props.titulo}</h1>
            </div>

            <Container className="my-3">
                {props.children}
            </Container>
        </>
    )
}
