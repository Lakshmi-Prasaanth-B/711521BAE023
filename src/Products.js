import { Component } from "react";
import OIP from  '../src/Images/OIP.jpeg';

const DisplayProducts = (props)=>{
    const {products} = props;
    const rows = products.map((product,index)=>{
        return (
            <div key={index} className="product">
                <div className="imgDiv">
                    <img src={OIP} alt="Lap Image" className="img" />
                </div>
                <div className="product_details">
                    <p className="details">{product.productName}</p>
                </div>
            </div>
        )
    });
    return(
        <tbody>
            {rows}
        </tbody>
    )
}
class Products extends Component{
    render(){
        const {products} = this.props;
        return(
            <DisplayProducts products={products}/>
        )
    }
}
export default Products;
