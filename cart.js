// from cart t0  redirect to home page
function redirectToHomePage() {
    // Replace 'home.html' with the actual URL of your homepage
    window.location.href = 'home.html';
}

let productData = [
    {
      "productName": "Boosted Rev Brake-Lever",
      "price": "19.00",
      "id": 1,
      "image": "https://boostedusa.com/cdn/shop/products/BPN-103790_2000x.jpg?v=1610483730"
    },
    {
      "productName": "Boosted Helmet - Triple 8 Mips",
      "price": "69.00",
      "id": 2,
      "image": "https://boostedusa.com/cdn/shop/products/boosted-triple-8-mips-helmet-side_2000x.jpg?v=1610485289"
    },
    {
      "productName": "Super73 Z Adventure Blackout SE",
      "price": "3095.00",
      "id": 3,
      "image": "https://boostedusa.com/cdn/shop/products/23YM_Z-Blackout_Right_1600x.jpg?v=1697495956"
    },
    {
      "productName": "Boosted Rev Stomp Brake Fender",
      "price": "Sold Out",
      "id": 4,
      "image": "https://boostedusa.com/cdn/shop/products/03_2000x.jpg?v=1610478682"
    },
    {
      "productName": "Boosted Daypack Waterproof Backpack",
      "price": "59.00",
      "id": 5,
      "image": "https://boostedusa.com/cdn/shop/products/Daypack-Hero_2x__1_2000x.jpg?v=1586300122"
    },
 ]


  function createProductCard(product){
    let productCard = document.createElement("div");
    productCard.className = "productCard";
    
    let image = document.createElement("img");
    image.id = "image";
    image.src = product.image;
    
    

   
    let h3 = document.createElement("h3");
    h3.textContent = product.productName;

    let p = document.createElement("p");
    p.textContent = product.price;
    let Addbutton = document.createElement("button");
    Addbutton.id = "Addbutton";
    Addbutton.textContent = "Add To Cart";

    
   
    productCard.append(image,h3,p,Addbutton);
    


    return productCard;
   

  }

  let productContainer = document.getElementById("productContainer");
  productData.forEach(item=>{
      let card = createProductCard(item);
      productContainer.appendChild(card);
  });






  