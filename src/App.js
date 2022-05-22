import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = {
    currentCategory: "",products:[]
  }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (item) => {
    console.log(item)
    this.setState({ currentCategory: item.categoryName });
    this.getProducts(item.id);
  }
  
  getProducts = (categoryId) => {
    let url = "https://dry-peak-15401.herokuapp.com/products";
    if (categoryId) {
      url+="?categoryId="+categoryId
    }
    fetch(url)
      .then(response => response.json())
    .then(data=>this.setState({products:data}))
}

  render() {
    let categoryInfo = { title: "Product List", author: "Hüseyin BATTAL" }
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} categoryInfo={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}