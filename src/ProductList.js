import React, { Component } from 'react'
import { Table ,Button} from 'reactstrap'

export default class ProductList extends Component {

  addToCart = (product) => {
    alert(product.productName)
  }

  render() {
    return (
      <div>
        <h3>Product List</h3>
        <h4>{this.props.currentCategory}</h4>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th>unitsInStock</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.productName}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.unitsInStock}</td>
                  <td><Button onClick={()=>this.props.addToCart(item)} color="info" outline>Add to cart</Button></td>

                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
