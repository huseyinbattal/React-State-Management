import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }

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
      url += "?categoryId=" + categoryId
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  addToCart = (product) => {
    //alert(`${product.productName}  added to cart`)
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      alert(`${product.productName}  has already been added to cart`)
      addedItem.quantity += 1;
    } else {
     
      newCart.push({ product: product, quantity: 1 });

    }
    
    this.setState({ cart: newCart })
  }

  render() {
    let categoryInfo = { title: "Product List", author: "Hüseyin BATTAL" }
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} categoryInfo={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}