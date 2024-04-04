import { Component } from "react";
import Products from "./Products";

let url = "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjE2MjEzLCJpYXQiOjE3MTIyMTU5MTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI1ZmQ4MDFlLTcxM2EtNGI1Zi05MTkxLTgzNTZjNTNlNTNlYyIsInN1YiI6Imxha3NobWlwcmFzYWFudGgwMDFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIyNWZkODAxZS03MTNhLTRiNWYtOTE5MS04MzU2YzUzZTUzZWMiLCJjbGllbnRTZWNyZXQiOiJDUkNSb1FZV2RudkJsRHdZIiwib3duZXJOYW1lIjoiTGFrc2htaSBQcmFzYWFudGgiLCJvd25lckVtYWlsIjoibGFrc2htaXByYXNhYW50aDAwMUBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFCQUUwMjMifQ.lfDhlZwWgdaJgYtXw8sy7WjSfglVsRFEV8Ub3diYLL8"
fetch(url,{
    method: 'GET',
    headers:{
        'Authorization':`Bearer ${token}`
    }
}).then((res)=>{
    console.log(res)
    if(!res.ok){
        throw new Error("Network Response was not OK");
    }
    return res.json();
}).then(data=>{
    console.log(data);
}).catch(error => {
    console.log(error);
})

class Body extends Component{

    products = [
        {
            "productName": "Laptop 8",
            "price": 511,
            "rating": 3.25,
            "discount": 87,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop 9",
            "price": 5164,
            "rating": 3.5,
            "discount": 97,
            "availability": "in-stock"
        }
    ]
    render(){
        return (
            <body className="body">
                <Products products={this.products}/>
            </body>
        )
    }
}
export default Body;