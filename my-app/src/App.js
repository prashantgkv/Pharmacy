import React from 'react';
import GetPharmacy from './component/GetPharmacy';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import PostPharmacy from './component/PostPharmacy';
import { Col, Container, Row } from 'reactstrap';
import Menu from './component/Menu';
import Header from './component/Header';
import { ToastContainer, toast} from "react-toastify";
function App(){
  return (
    <div>
      <Router>
        <ToastContainer />
      <Container>
      <Header name="Welcome to Pharmacy" />
      <Row>
        <Col md={4}>
        <Menu />
        
       </Col>
       <Col md={8}>
        <Switch>
          
          <Route path="/pget" exact={true} component={GetPharmacy} />
          <Route path="/ppost" exact={true} component={PostPharmacy} />
        </Switch>
        
        </Col>
        </Row>
        
        </Container>
      </Router>
    </div>
  );
}

export default App;