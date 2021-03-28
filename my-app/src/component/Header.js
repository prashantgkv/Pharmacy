import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name,title})
{
    return(
        <div style={{background: "yellow"}}>
            <Card bg= "warning">
                <CardBody>
                  
            <h1>{name}</h1>

                </CardBody>
            </Card>
            
            
        </div>
    )
}
export default Header;
