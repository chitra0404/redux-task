import { INCREASE_QUANTITY,DECREASE_QUANTITY,UPDATE_AMOUNT,ADD_TO_CART,REMOVE_CART } from "./action";

const initialState=
{products:[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/5/1.jpg",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    }]};

function rootReducer(state=initialState,action){
  switch(action.type){
    case ADD_TO_CART:
        return{...state,products:state.products.map(product=>product.id===action.payload?{...product,quantity:product.quantity+1,amount:(product.quantity+1)*product.price}:product)};
 
 case REMOVE_CART:
     return{...state,products:state.products.map(product=>product.id===action.payload?{...product,quantity:Math.max(1,product.quantity-1),amount:Math.max(1,product.quantity-1)*product.price}:product)};
// case UPDATE_AMOUNT:
    
//     return{...state,products:state.products.map(product=>product.id===action.payload?{...product,amount:product.quantity*product.price}:product)};

    default:
        return state;
  }
    // if(action.type===ADD_TO_CART){
    //     const producttoAdd=state.products.find((product)=>product.id==action.id)
    //     const existed_item=state.cart.some((product)=>action.id==product.id)   
    //      if(existed_item)
    //     {
    
    //          return{
    //          ...state,cart:existed_item.cart.map((product)=>product.id==action.id?{...product,quanity:product.quantity+1}:product)
    //         }
    //     } 
    // else{
    //     return{...state,cart:[...state.cart,{...producttoAdd,quantity:1}]}
    //  }
    //  }

    //  if(action.type===REMOVE_CART){
    //      return{...state,cart:existed_item.cart.map((product)=>product.id=action.id?{...product,quantity:Math.max(1,product.quantity-1)}:product)}

    //  }
    //  if(action.type===UPDATE_AMOUNT){
    //    return{
    //    ...state,cart:existed_item.cart.map((product)=>product.id==action.payload?{...product,amount:product.price*product.quantity}:product)
    //     }
    //  }
}

export default rootReducer;