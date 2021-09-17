const shopClient = ShopifyBuy.buildClient({
    apiKey: '0c623b3a99a8443f162f64ad806e816b',
    domain: 'kreeture-design.myshopify.com/',
    appId: '6'
});

shopClient.fetchAllProducts()
    .then((products) => {
        buildProducts(products)
    })
    .catch(() => {
        console.log('Request failed');
    })
let buildProducts = (products) => {
    products.forEach((product) => {
        let productContainer = $('<div/>').attr('id', `product_${product.attrs.product_id}`)
        
        let img = `<img src="${product.images[0].src}/">`
        let title = `<p id="product-title">${product.attrs.title}</p>`
        let price = `<p class="productPrice-${product.id}">${product.attrs.variants[0].formatted_price}</p>`
        let btn =  `<input type="submit" name="add" value="Purchase" class="btn btn--purchase" onclick="addItem('add-to-cart'); return false; ">`
        productContainer.append(img, title, price, btn)
        $('#products').append(productContainer)
    })
} 