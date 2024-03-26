import React, {useState, useEffect} from "react";
import { NavDropdown } from "react-bootstrap";
import DropDownItem from "./DropDownItem";

const MenuGenres = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://filmotheque.e-mingo.net/api/catalog/genre');
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching genre data:', error);
          }
        };
    
        fetchData();
      }, []);
    return(
        <NavDropdown title="Genres" id="navDropdownGenres">
            {data.map((genre,index) => (
                <DropDownItem key={index} id={genre.id} name={genre.name} />
            ))}
        </ NavDropdown>
        
    )
}
export default MenuGenres;