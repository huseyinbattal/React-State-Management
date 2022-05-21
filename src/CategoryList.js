import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {


  state = {
    categories: []
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
    .then(data=>this.setState({categories:data}))
}

  render() {

   

    return (
      <div>
        <h4>Category List</h4>
        <h4>{this.state.counter}</h4>
        <ListGroup>
          {
            this.state.categories.map((item) => (
              <ListGroupItem active={item.categoryName===this.props.currentCategory?true:false} onClick={()=>this.props.changeCategory(item)} key={item.id}>
                {item.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
       {/* <h4>{ this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
