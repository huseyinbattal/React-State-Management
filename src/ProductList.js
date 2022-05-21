import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>Product List</h3>
        <h4>{this.props.currentCategory}</h4>
        <Table striped>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Product Name
              </th>
              <th>
              unitPrice
              </th>
              <th>
              unitsInStock
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map((item) => (
                <tr key={item.id}>
                  <th scope="row">
                    {item.id}
                  </th>
                  <td>
                    {item.productName}
                  </td>
                  <td>
                    {item.unitPrice}
                  </td>
                  <td>
                    {item.unitsInStock}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
