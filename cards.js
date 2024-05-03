const productData = [
    {
        id: 1,
        name: "Buco Nero",
        image: "black_hole.jpg",
        price: 220,
        rating: 5,
    },
    {
        id: 2,
        name: "Alieno",
        image: "aliens.jpg",
        price: 169,
        rating: 5,       
    },
    {
        id: 3,
        name: "Astronauta",
        image:        "astronauts.jpg",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 
    },
    {
        id: 4,
        name: "Occhio",
        image:        "eye.jpg",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 
    },
    {
        id: 5,
        name: "Bussola",
        image:        "bussola.jpg",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 
    } ,
    {
        id: 6,
        name: "Pesci",
        image:        "pieces.jpg",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 
    } ,
    {
        id: 7,
        name: "Ancora",
        image:        "marines.jpg",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 
    } ,
    {
        id: 8,
        name: "Sole",
        image:        "sun.jpg",
        price: 170,
        rating: 4,
        timeLeft: 21,
        totalSales: 6347 
    }   
];

let cardsRow = document.getElementById('cardsRow');

let cardsCol = productData.map(card=>
    `
    <div class="col-12">
        <div class="myTatCard">
            <div>
        </div>
    </div>
    `
);

