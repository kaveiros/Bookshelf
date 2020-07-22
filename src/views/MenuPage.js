import React from 'react'
import {Navbar, Nav, Dropdown, Icon, Container, Sidebar, Sidenav,Header, Content} from 'rsuite'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  Books  from './Books';
import AddBook from './AddBook';
import BooksAddition from './BooksAddition';


const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };
  
  const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
  };
  
  const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Dropdown
              placement="topStart"
              trigger="click"
              renderTitle={children => {
                return <Icon style={iconStyles} icon="cog" />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
  
          <Nav pullRight>
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
              <Icon icon={expand ? 'angle-left' : 'angle-right'} />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  
  export default class MenuPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        expand: true
      };
      this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
      this.setState({
        expand: !this.state.expand
      });
    }
    render() {
      const { expand } = this.state;
      return (
        <div className="show-fake-browser sidebar-page">
          <Container>
            <Sidebar
              style={{ display: 'flex', flexDirection: 'column' }}
              width={expand ? 260 : 56}
              collapsible
            >
              <Sidenav.Header>
                <div style={headerStyles}>
                  <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                  <span style={{ marginLeft: 12 }}> BRAND</span>
                </div>
              </Sidenav.Header>
              <Sidenav
                expanded={expand}
                defaultOpenKeys={['3']}
                appearance="subtle"
              >
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item href="/books" eventKey="1" active icon={<Icon icon="dashboard" />}>
                      Αρχική
                    </Nav.Item>
                    <Dropdown
                      eventKey="3"
                      trigger="hover"
                      title="Ενέργειες"
                      icon={<Icon icon="magic" />}
                      placement="rightStart"
                    >
                      <Dropdown.Item href="/add-book" eventKey="3-1">Προσθήκη</Dropdown.Item>
                      <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                      <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                      <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                      <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
                    </Dropdown>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
              <NavToggle expand={expand} onChange={this.handleToggle} />
            </Sidebar>
  
            <Container>
              <Header>
                <h2>e-Βιβλιοθήκη</h2>
              </Header>
              <Content>
                <Router>
                  <Switch>
                    <Route exact path="/books" component={Books}/>
                    <Route exact path="/add-book" component={BooksAddition} />
                  </Switch>
                </Router>
              </Content>
            </Container>
          </Container>
        </div>
      );
    }
  }
  
  