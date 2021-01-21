import React, {useEffect, useState} from 'react';
import nameService from '../services/nameService';
import Table from 'react-bootstrap/Table'
import {
  FormControl,
  Form,
  InputGroup
} from "react-bootstrap";
const Names = () => {

  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState('mostPopularFirst');
  const [newFilter, setNewFilter] = useState('');

  const handleSetChecked = (e) => {
    setChecked(e.target.value);
  };

  //handle user input in the search field
  const handleFilterChange = event => {
    setNewFilter(event.target.value);
    console.log(event.target.value);
  };

  // get items
  useEffect(() => {
    nameService.getNames().then(result => {
      setItems(result);
    });
  }, []);

  const allNames = items.length;


  // Sort by amount (lowest to highest) then reverse to be highest to lowest
  const rowsByAmount = items.sort(function(a, b) {
    return a.amount - b.amount;
  }) .filter(item =>
      item.name.toLowerCase().includes(newFilter.toLowerCase())
  ).reverse().map(item => {
    return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.amount}</td>
        </tr>
    );
  });


  // Sort names alphabetically
  const rowsByName = items.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  }).filter(item =>
      item.name.toLowerCase().includes(newFilter.toLowerCase())
  ).map(item => {
    return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.amount}</td>
        </tr>
    );
  });

  /*
  //const byAmountHighToLow = byAmountLowToHigh.reverse();
// Sort by amount (lowest to highest)
  const resultRows = items.map(item => {
    return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.amount}</td>
        </tr>
    );
  });
  */

  //console.log("sorted by name",rowsByName);
  //console.log("sorted by amount",byAmountLowToHigh);

  return(
      <div style={{marginTop: '80px'}}>
        <h3>Welcome to SOLITA names application</h3>
        <p>Here you can find the top-10 of both male and female names in Solita.</p>
        <p>You can list the names alphabetically or by their amount (the most popular first), also
          you can use the input field to filter for a specific name/names and get their info.</p>
        <hr/>
        <h4>Listing options</h4>

        <div className="radio" onChange={handleSetChecked}>
          <label>
            <input type="radio" name="radio" value="mostPopularFirst"
                   checked={checked=== 'mostPopularFirst'}
                   onChange={handleSetChecked}
                   />
            List by amount (most popular first)
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="radio" value="namesAlpha"
                   checked={checked === 'namesAlpha'}
                   onChange={handleSetChecked}

                   />
            List names alphabetically
          </label>
        </div>


        <p>now checked : {checked} </p>

        <hr/>
        <h4>Filter by name</h4>
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="get an amount by name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={newFilter}
                onChange={handleFilterChange}
            />
          </InputGroup>
        </Form>
        <hr/>



        <p>All names: {allNames} </p>
        <Table responsive striped hover>
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>

          {checked==='mostPopularFirst' ? rowsByAmount : rowsByName}

          </tbody>
        </Table>
      </div>

  );
};
export default Names;