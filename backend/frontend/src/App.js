import './App.css';
import { useState } from 'react';
import { Button, InputGroup, FormControl, Table } from 'react-bootstrap';

function App() {
  const [newItemName, setNewItemName] = useState("")
  const [inventoryItems, setInventoryItems] = useState([{ code: 1, name: "temp_item", count: 5 }, { code: 2, name: "temp_item_2", count: 10 }])

  const onInputChange = (e) => {
    console.log(e.target.value)
    setNewItemName(e.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopify Assessment</h1>

        <h3>Creation</h3>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="New Item Name"
            onChange={onInputChange}
            value={newItemName}
          />
          <Button variant="primary">Add New Item</Button>
        </InputGroup>

        <h3>Inventory</h3>

        {
          inventoryItems &&
          inventoryItems.map((item) => {
            return (
              <div key={item.code}>
                {item.name}
                {item.count}
                <Button variant="secondary">Decrement</Button>
                <Button variant="success">Increment</Button>
                <Button variant="danger">Delete</Button>
              </div>
            )
          })
          &&
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Item Count</th>
                <th>Decrement</th>
                <th>Increment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => {
              return (
                <tr key={item.code}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td><Button variant="secondary">Decrement</Button></td>
                  <td><Button variant="success">Increment</Button></td>
                  <td><Button variant="danger">Delete</Button></td>
                </tr>
              )
            })}
          </tbody>
          </Table>
        }

        <h3>Export To CSV</h3>
        <Button variant="warning">Create CSV</Button>
        <h3>Link To CSV</h3>

      </header>
    </div>
  );
}

export default App;
