import React, {useState, useEffect} from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import DropDownItem from "./DropDownItem";

const MenuActors = (props) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://filmotheque.e-mingo.net/api/catalog/actor');
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching genre data:', error);
          }
        };
    
        fetchData();
      }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredActors = data.filter((actor) => {
        return actor.name.toLowerCase().includes(search.toLowerCase());
    });

    return(
        <NavDropdown title="Acteurs" id="navDropdownActors">
            <form className="d-flex" role="search">
                <input
                    id="actor-search"
                    className="form-control mx-2"
                    type="search"
                    placeholder="Nom acteur"
                    aria-label="Nom acteur"
                    value={search}
                    onChange={handleSearch}
                />
            </form>
            {filteredActors.map((actor) => (
                <DropDownItem key={actor.id} id={actor.id} name={actor.name.replace(/'/g,"")} />
            ))}
        </ NavDropdown>
    )
}

export default MenuActors;