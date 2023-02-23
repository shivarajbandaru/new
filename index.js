let Shiva = document.getElementById("dress");


let nath = [{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799629/01.image_j3jfuw.webp",
    b: "Men Navy Blue Solid Sweatshirt",
    c: "United Colors of Benetton",
    d: "Rs 2599"
},
{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799627/02.image_tfyysb.webp",
    b: "Men Black MAMGP T7 Sweat Sporty Jacket",
    c: "Puma",
    d: "Rs 7999"
},
{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799627/03.image_pcxsxo.webp",
    b: "Men Black Action Parkview Lifestyle Shoes",
    c: "Hush Puppies",
    d: "Rs 6999"
},
{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799629/04.image_q3qof2.webp",
    b: "Women Black Solid Lightweight Leather Jacket",
    c: "BARESKIN",
    d: "Rs 9999"
},
{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799628/05.image_cmlet5.webp",
    b: "Women Blue Solid Shirt Dress",
    c: "SASSAFRAS",
    d: "Rs 5200"
}]


function many(_raj) {
    let card01 = document.createElement("div");
    card01.classList.add("card");
    Shiva.appendChild(card01);
  

    let image01 =document.createElement("img");
    image01.classList.add("image-up");
    image01.src = _raj.a;
    card01.appendChild(image01);

   let heading02=document.createElement("h3");
   heading02.classList.add("heading02");
   heading02.textContent = _raj.b;
   card01.appendChild(heading02);

   let product=document.createElement("h4");
   product.classList.add("heading03");
   product.textContent = _raj.c;
   card01.appendChild(product);

   let price= document.createElement("h5");
   price.classList.add("heading04")
   price.textContent = _raj.d;
   card01.appendChild(price);
}

for(let raj of nath){
    many(raj)
}






let Ram = document.getElementById("technology");

let hari = [{
    A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/06.image_qdoqlo.webp",
    B: "Unisex Silver-Toned Series 3 Smart Watch",
    C: "Apple",
    D: "Rs 31999"
},
{
    A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/07.image_x5tijn.webp",
    B: "Unisex Black & Green Reflex 2.0 Smart Band",
    C: "Fastrack",
    D: "Rs 1999"
},
{
    A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/08.image_mfxnmh.webp",
    B: "Unisex Black Galaxy Fit Fitness Band",
    C: "Samsung",
    D: "Rs 9990"
},
{
    A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/09.image_jznp4h.webp",
    B: "Gear IconX Black Cord-free Fitness Earbuds",
    C: "Samsung",
    D: "Rs 13990"
},
{
    A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/10.image_tlrrpr.webp",
    B: "White 2nd Gen AirPods with Charging Case",
    C: "Apple",
    D: "Rs 14999"
}
]



function toMany(_priya) {
    let card01 = document.createElement("div");
    card01.classList.add("card");
    Ram.appendChild(card01);
 

    let image01 =document.createElement("img");
    image01.classList.add("image-up");
    image01.src = _priya.A;
    card01.appendChild(image01);

   let heading02=document.createElement("h3");
   heading02.classList.add("heading02");
   heading02.textContent = _priya.B;
   card01.appendChild(heading02);

   let product=document.createElement("h4");
   product.classList.add("heading03");
   product.textContent = _priya.D;
   card01.appendChild(product);

   let price= document.createElement("h5");
   price.classList.add("heading04")
   price.textContent = _priya.D;
   card01.appendChild(price);
}
for (let priya of hari) {
    toMany(priya)
}
