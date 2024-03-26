import React from "react";
import { NavDropdown } from "react-bootstrap";

const DropDownItem = (props) => {
    return(
        <NavDropdown.Item key={props.id}>{props.name}</NavDropdown.Item>  
    )
}

export default DropDownItem;