
import React from "react"
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menu = ()=>{
    return(
      <ListGroup>
          <Link className="list-group-item  list-group-item-action" tag="a" to="/" action> Home </Link> <br/>
          <Link className="list-group-item  list-group-item-action" tag="a" to="/pget" action> GetPharmacy </Link> <br />
          <Link className="list-group-item  list-group-item-action" tag="a" to="/ppost" action> PostPharmacy </Link> <br/>
          <ListGroupItem tag="a" href="#!" action> About </ListGroupItem> <br/>
          <ListGroupItem tag="a" href="#!" action> Contact </ListGroupItem> <br/>
      </ListGroup>
    );
};

export default Menu;
