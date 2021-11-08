import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { CardGroup, CardImg, CardTitle, CardBody, Card, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function People() {
  let history = useHistory();
  const [characters, setCharacters] = useState(null);
  const [filteredData, setFilteredData] = useState('');
  const url = "https://swapi.dev/api/people";

  useEffect(() => {
    async function fetchUserData() {
      const response = await axios.get(url);
      let json = JSON.parse(JSON.stringify(response.data.results));
      setCharacters(json);
    }
    fetchUserData();
  }, []);

  const textChangeHandler = (event) => {
    setFilteredData(event.target.value);
  };

  return (
    <div>
      <label className="m-3">Search : </label>
      <input type="text" name="searchText" onChange={textChangeHandler}/>

      {characters?.filter((data) => 
      {
        if(filteredData == "") {
          return data
        } else if(data.name.toLowerCase().includes(filteredData.toLowerCase())) {
          return data
        }
      })?.map((data, key) => {
        return (
          <div key={key}>
            <CardGroup>
              <Card>
                <CardImg
                  alt="Image is not available"
                  src="https://starwarsblog.starwars.com/wp-content/uploads/2019/08/rise-of-skywalker-poster-tall.jpg"
                  className="w-25 mt-3 img-thumbnail img-responsive center-block d-block mx-auto"
                />
                <CardTitle tag="h5">{data.name}</CardTitle>
                <CardBody>
                  <Button onClick={() => {
                      history.push(`/characterInfo/${key+1}`)
                  }}>Click Me</Button>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        );
      })}
      
    </div>
  );
}

export default People;