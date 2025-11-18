document.addEventListener('DOMContentLoaded', () =>{
    cars = [
        { id: 432, image: "toyota-corolla-2018.jpg", brand: "Toyota", model: "Corolla", year: 2018, fuelType: "Gasoline", price: 15000 },
        { id: 123, image: "honda-civic-2020.jpg", brand: "Honda", model: "Civic", year: 2020, fuelType: "Gasoline", price: 18000 },
        { id: 874, image: "tesla-model-3-2022.jpg", brand: "Tesla", model: "Model 3", year: 2022, fuelType: "Electric", price: 40000 },
        { id: 982, image: "ford-focus-2017.jpg", brand: "Ford", model: "Focus", year: 2017, fuelType: "Diesel", price: 12000 },
        { id: 569, image: "bmw-3-series-2019.jpg", brand: "BMW", model: "3 Series", year: 2019, fuelType: "Gasoline", price: 25000 },
        { id: 215, image: "audi-a4-2016.jpg", brand: "Audi", model: "A4", year: 2016, fuelType: "Gasoline", price: 22000 },
        { id: 745, image: "hyundai-elantra-2021.jpg", brand: "Hyundai", model: "Elantra", year: 2021, fuelType: "Gasoline", price: 16000 },
        { id: 387, image: "toyota-camry-2015.jpg", brand: "Toyota", model: "Camry", year: 2015, fuelType: "Gasoline", price: 14000 },
        { id: 498, image: "honda-accord-2019.jpg", brand: "Honda", model: "Accord", year: 2019, fuelType: "Hybrid", price: 21000 },
        { id: 234, image: "chevrolet-malibu-2018.jpg", brand: "Chevrolet", model: "Malibu", year: 2018, fuelType: "Gasoline", price: 17000 },
        { id: 893, image: "tesla-model-s-2021.jpg", brand: "Tesla", model: "Model S", year: 2021, fuelType: "Electric", price: 80000 },
        { id: 341, image: "ford-mustang-2015.jpg", brand: "Ford", model: "Mustang", year: 2015, fuelType: "Gasoline", price: 30000 },
        { id: 777, image: "volkswagen-golf-2020.jpg", brand: "Volkswagen", model: "Golf", year: 2020, fuelType: "Diesel", price: 19000 },
        { id: 115, image: "nissan-altima-2021.jpg", brand: "Nissan", model: "Altima", year: 2021, fuelType: "Gasoline", price: 20000 },
        { id: 601, image: "kia-optima-2019.jpg", brand: "Kia", model: "Optima", year: 2019, fuelType: "Gasoline", price: 18000 },
        { id: 492, image: "hyundai-sonata-2018.jpg", brand: "Hyundai", model: "Sonata", year: 2018, fuelType: "Hybrid", price: 19500 },
        { id: 356, image: "chevrolet-impala-2017.jpg", brand: "Chevrolet", model: "Impala", year: 2017, fuelType: "Gasoline", price: 22000 },
        { id: 664, image: "bmw-x5-2020.jpg", brand: "BMW", model: "X5", year: 2020, fuelType: "Diesel", price: 50000 },
        { id: 842, image: "mercedes-c-class-2019.jpg", brand: "Mercedes", model: "C-Class", year: 2019, fuelType: "Gasoline", price: 35000 },
        { id: 923, image: "audi-q5-2022.jpg", brand: "Audi", model: "Q5", year: 2022, fuelType: "Hybrid", price: 45000 },
    ];
    
    let divContainer = document.querySelector(".card-container");
    let body = document.querySelector("body");
    
    
    console.log(divContainer);
    console.log(body);
    
    
    function borrarTajeta (cars, id) {
        let cardInd = cars.findIndex((car)=> car.id == id);
        cars.splice(cardInd, 1);
        vaciarContainer()
        

    }
    function editarTajeta (cars, id) {
        let cardInd = cars.findIndex((car)=> car.id == id);
        return cardInd

    }
    function vaciarContainer () {
        divContainer.textContent = "";

    }
    function creacionTarjetas (cars) {
        for(let i = 0; i < cars.length; i++ ) {
            let card = document.createElement("div");
            card.classList.add("card");
            // los p
            let pId = document.createElement("p");
            let img = document.createElement("img");
            let pBrand = document.createElement("p");
            let pModel = document.createElement("p");
            let pYear = document.createElement("p");
            let pFuel = document.createElement("p");
            let pPrice = document.createElement("p");
            // los strong
            let sBrand = document.createElement("strong");
            let sModel = document.createElement("strong");
            let sYear = document.createElement("strong");
            let sFuel = document.createElement("strong");
            let sPrice = document.createElement("strong");
            // texto strong
            sBrand.textContent = "Brand:";
            sModel.textContent = "Model:";
            sYear.textContent = "Year:";
            sFuel.textContent = "Fuel Type:";
            sPrice.textContent = "Price:";
            // texto p
            pId.textContent = cars[i].id;
            pId.style.display = "none";
            img.src = "./img/" + cars[i].image;
            pBrand.textContent = sBrand.textContent + " " + cars[i].brand;
            pModel.textContent = sModel.textContent + " " + cars[i].model;
            pYear.textContent = sYear.textContent + " " + cars[i].year;
            pFuel.textContent = sFuel.textContent + " " + cars[i].fuelType;
            pPrice.textContent = sPrice.textContent + " " + cars[i].price;
            // botones
            let botonB = document.createElement("button");
            let botonE = document.createElement("button");
            
            botonB.textContent = "Borrar";
            botonE.textContent = "Editar";

            //añadir al card
            card.appendChild(pId);
            card.appendChild(img);
            card.appendChild(pBrand);
            card.appendChild(pModel);
            card.appendChild(pYear);
            card.appendChild(pFuel);
            card.appendChild(pPrice);
            card.appendChild(botonB);
            card.appendChild(botonE);
            divContainer.appendChild(card);
            //elementos formulario
            let inputId = document.querySelector("input[name=id]");
            let inputBrand = document.querySelector("select[name=brandedit]");
            let inputModel = document.querySelector("input[name=modeledit]");
            let inputYear = document.querySelector("input[name=yearedit]");
            let inputFuel = document.querySelector("select[name=fueledit]");
            let inputPrice = document.querySelector("input[name=priceedit]")
                
            botonB.onclick = () =>{
                borrarTajeta(cars, pId);
                creacionTarjetas(cars);
            }
            botonE.onclick = () => {
                inputId.value = cars[i].id;
                inputBrand.value = cars[i].brand;
                inputModel.value = cars[i].model;
                inputYear.value = cars[i].year;
                inputPrice.value = cars[i].price;
                inputFuel.value = cars[i].fuelType;
                
                let save = document.querySelector("input[name=saveedit]");
                save.onclick = (e) => {
                    e.preventDefault();
                    let edicar = cars.find((car) => car.id == pId.textContent);
                    
                    edicar.id =  inputId.value,
                    edicar.brand = inputBrand.value,
                    edicar.model = inputModel.value,
                    edicar.year = inputYear.value,
                    edicar.price =  inputPrice.value,
                    edicar.fuelType = inputFuel.value,
                    document.querySelector("form[name=edit]").reset()
                    
                    /* cars.push(
                        {
                            id: inputId,
                            brand: inputBrand,
                            model: inputModel,
                            year: inputYear,
                            fueltype : inputFuel,
                            price: inputPrice
                        }
                    ); */
                    vaciarContainer();
                    creacionTarjetas(cars);
                }
                
            }
            



            
            
        }
    } 
    
    creacionTarjetas(cars)
    
})