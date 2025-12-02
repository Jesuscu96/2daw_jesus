
window.onload = function () {

    const laptops = [
        {
            id: 1,
            brand: "Dell",
            model: "Inspiron 15",
            RAM: 8,
            processor: "Intel i5-1155G7",
            hardDisk: "512GB SSD",
            price: 699,
        },
        {
            id: 2,
            brand: "HP",
            model: "Pavilion 14",
            RAM: 16,
            processor: "Intel i7-1165G7",
            hardDisk: "512GB SSD",
            price: 899,
        },
        {
            id: 3,
            brand: "Lenovo",
            model: "ThinkPad E15",
            RAM: 8,
            processor: "Intel i5-1155G7",
            hardDisk: "256GB SSD",
            price: 749,
        },
        {
            id: 4,
            brand: "Asus",
            model: "VivoBook 15",
            RAM: 12,
            processor: "AMD Ryzen 5 5600U",
            hardDisk: "512GB SSD",
            price: 799,
        },
        {
            id: 5,
            brand: "Acer",
            model: "Aspire 5",
            RAM: 8,
            processor: "AMD Ryzen 7 5800HS",
            hardDisk: "256GB SSD",
            price: 549,
        },
        {
            id: 6,
            brand: "Apple",
            model: "MacBook Air M1",
            RAM: 8,
            processor: "Apple M1",
            hardDisk: "256GB SSD",
            price: 999,
        },
        {
            id: 7,
            brand: "MSI",
            model: "Modern 14",
            RAM: 16,
            processor: "Intel i7-1255U",
            hardDisk: "512GB SSD",
            price: 1049,
        },
        {
            id: 8,
            brand: "Samsung",
            model: "Galaxy Book",
            RAM: 8,
            processor: "Intel i5-1155G7",
            hardDisk: "256GB SSD",
            price: 799,
        },
        {
            id: 9,
            brand: "Huawei",
            model: "MateBook D15",
            RAM: 8,
            processor: "Intel i5-1155G7",
            hardDisk: "512GB SSD",
            price: 699,
        },
        {
            id: 10,
            brand: "LG",
            model: "Gram 14",
            RAM: 16,
            processor: "Intel i7-1165G7",
            hardDisk: "512GB SSD",
            price: 1199,
        },
        {
            id: 11,
            brand: "Dell",
            model: "XPS 13",
            RAM: 16,
            processor: "Intel i7-1255U",
            hardDisk: "1TB SSD",
            price: 1499,
        },
        {
            id: 12,
            brand: "HP",
            model: "Envy x360",
            RAM: 8,
            processor: "AMD Ryzen 5 5600U",
            hardDisk: "512GB SSD",
            price: 899,
        },
        {
            id: 13,
            brand: "Lenovo",
            model: "IdeaPad 3",
            RAM: 8,
            processor: "Intel i5-1035G1",
            hardDisk: "512GB SSD",
            price: 649,
        },
        {
            id: 14,
            brand: "Asus",
            model: "ROG Zephyrus G14",
            RAM: 16,
            processor: "AMD Ryzen 7 5800HS",
            hardDisk: "1TB SSD",
            price: 1499,
        },
        {
            id: 15,
            brand: "Acer",
            model: "Nitro 5",
            RAM: 16,
            processor: "Intel i7-11800H",
            hardDisk: "1TB SSD",
            price: 1299,
        },
        
        {
            id: 16,
            brand: "Apple",
            model: "MacBook Pro M1",
            RAM: 16,
            processor: "Apple M1",
            hardDisk: "512GB SSD",
            price: 1699,
        },
        {
            id: 17,
            brand: "MSI",
            model: "GF63 Thin",
            RAM: 8,
            processor: "Intel i5-10500H",
            hardDisk: "512GB SSD",
            price: 899,
        },
        {
            id: 18,
            brand: "Samsung",
            model: "Galaxy Book Pro",
            RAM: 16,
            processor: "Intel i7-1165G7",
            hardDisk: "512GB SSD",
            price: 1199,
        },
        {
            id: 19,
            brand: "Huawei",
            model: "MateBook X Pro",
            RAM: 16,
            processor: "Intel i7-1165G7",
            hardDisk: "1TB SSD",
            price: 1499,
        },
        {
            id: 20,
            brand: "LG",
            model: "Gram 16",
            RAM: 16,
            processor: "Intel i7-11800H",
            hardDisk: "1TB SSD",
            price: 1599,
        },
        {
            id: 21,
            brand: "Lenovo",
            model: "IdeaPad 5",
            RAM: 16,
            processor: "Intel i7-1165G7",
            hardDisk: "512GB SSD",
            price: 1229,
        }
    ];


    
    let container = document.querySelector("section");
    
    
    

    // Clean container
    function cleanContainer() {
        container.innerHTML = "";
    }
    // Draw laptops card
    function drawLatops(laptops) {
        
        let card = document.createElement("article");
        card.className = "card";
        card.dataset.id = laptops.id;
        let brandStrong = document.createElement("strong");
        brandStrong.textContent = "Brand: "
        let brand = document.createElement("p");
        brand.appendChild(brandStrong);
        brand.innerHTML += laptops.brand;
        let p1 = document.createElement("p");
        p1.innerText = "Model: " + laptops.model;
        let p2 = document.createElement("p");
        p2.innerText = "RAM: " + laptops.RAM + "GB";
        let p3 = document.createElement("p");
        p3.innerText = "Processor: " + laptops.processor;
        let p4 = document.createElement("p");
        p4.innerText = "Hard Disk: " + laptops.hardDisk;
        let p5 = document.createElement("p");
        p5.className = "card-price";
        let strongPrice = document.createElement("strong");
        strongPrice.textContent = `Price: ${laptops.price}€`;
        p5.appendChild(strongPrice); 
        
        card.appendChild(brand);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);

        container.appendChild(card);
    }
    
    function drawAllLatops(laptops) {
        for ( let i = 0 ; i < laptops.length; i++) {
            drawLatops(laptops[i]);
        }
    }

    let bBrand = document.getElementById("orderBrand");
    let bRam = document.getElementById("orderRam");
    let bFilter = document.getElementById("filter-btn");
    let bRemove = document.getElementById("remove-filters-btn");
    let select = document.getElementById("processor-select");
    let bNext = document.getElementById("next");
    let bBack = document.getElementById("back");
    let pageInfo = document.querySelector(".page-info");
    
    
        
    function creationSelectOption (laptops) {
        let opDisabled = document.createElement("option");
        opDisabled.textContent = "Processors ...";
        opDisabled.value = "Processors ...";
        opDisabled.selected = true;
        opDisabled.disabled = true;
        select.appendChild(opDisabled);
        let option = laptops.map(cpu => cpu.processor);
        
        let optionSet = [...new Set(option)].sort();
        for (const cpu of optionSet ) {
            let op = document.createElement("option");
            op.textContent = cpu;
            op.value = cpu;
            select.appendChild(op);
        }
    }
    creationSelectOption(laptops)
    let orderBrand = false;
    let orderRam = false;
    let filter = false;


    // Ordenar 
    let laptopsOrder = [...laptops];

    function orderByBrand(laptopsOrder) {
        let orderDescBrand = laptopsOrder.sort((a, b) => {
            if (a.brand < b.brand) {
                return -1;
            } 
            else if (a.brand > b.brand) {
                return 1;
            }
            else {
                return 0;
            }
        })
        return orderDescBrand;
    }
    
    
    function orderByRam(laptopsOrder) {
        
        let orderDescRam = laptopsOrder.sort((a, b) => {
            if (a.RAM < b.RAM) {
                return -1;
            } 
            else if (a.RAM > b.RAM) {
                return 1;
            }
            else {
                return 0;
            }
        })
        return orderDescRam;

    }
    
    bBrand.addEventListener("click", (e) => {
        orderBrand = true;
        orderRam = false;

        cleanContainer();
        drawAllLatops(orderByBrand(laptopsOrder));
        
        
        
    });

    bRam.addEventListener("click", (e) => {
        orderRam = true;
        orderBrand = false;

        cleanContainer();
        drawAllLatops(orderByRam(laptopsOrder));
        
    });    
    
    //Filtrar 
    function applyAllFilters(laptopsOrder) {
        
        let maxPrice = document.querySelector("input[name=max-price]");
        let maxPriceValue = maxPrice.value ? Number(maxPrice.value) : 0;  
       
        laptopsOrder = laptopsOrder.filter(laptop => laptop.price < maxPriceValue);
        let option = laptopsOrder.map(cpu => cpu.processor);
        
        if (option.includes(select.value)) {
            laptopsOrder = laptopsOrder.filter(laptop => laptop.processor == select.value);
        }
        console.log(laptopsOrder);

        return laptopsOrder;
        

        
    }

    bFilter.addEventListener("click", e =>{
        filter = true;
        let laptopsOrder = [...laptops];

        if(orderBrand) {
            cleanContainer();
            drawAllLatops(applyAllFilters(orderByBrand(laptopsOrder)));  
        }
        else if(orderRam) {
            cleanContainer();
            drawAllLatops(applyAllFilters(orderByRam(laptopsOrder)));
        }
        else {
            cleanContainer();
            drawAllLatops(applyAllFilters(laptopsOrder));
        }
        pages = Math.ceil(applyAllFilters(orderByBrand(laptopsOrder)).length / 4);
        pageInfo.textContent = `${currentPage} ... ${pages}`;
    });

    //paginacion
    let perPage = 4;
    let currentPage = 1;
    let currentLaptop = 0;    
    let pages = Math.ceil(laptopsOrder.length / 4);
    const paging = (laptopsOrder, currentPage, perPage) => laptopsOrder.slice(currentPage, perPage);
    pageInfo.textContent = `${currentPage} ... ${pages}`;
    bBack.disabled = true;
    drawAllLatops(paging(laptopsOrder, currentLaptop, perPage));

    bNext.onclick = () => {
        if(currentPage < pages) {
            currentPage++;
            cleanContainer();
            if(filter) {
                drawAllLatops(paging(applyAllFilters(orderByBrand(laptopsOrder)), currentLaptop+=4, perPage+=4));
                
            }
            else {
                drawAllLatops(paging(laptopsOrder, currentLaptop+=4, perPage+=4));
            }
            
            pageInfo.textContent = `${currentPage} ... ${pages}`;
            bBack.disabled = false;
        }
    }    
    bBack.onclick = () => {
        currentPage--;
        if(currentPage <= 1) {
            bBack.disabled = true;
        }
        
        cleanContainer();
        if(filter) {
            drawAllLatops(paging(applyAllFilters(orderByBrand(laptopsOrder)), currentLaptop-=4, perPage-=4));
        }
        else {
            drawAllLatops(paging(laptopsOrder, currentLaptop-=4, perPage-=4));
        }
        
        pageInfo.textContent = `${currentPage} ... ${pages}`;
        
    }    


    //limpiar
    bRemove.onclick = () => {
        filter = false;
        orderBrand = false;
        orderRam = false;
        cleanContainer()
        select.value = "Processors ...";
        pages = Math.ceil(laptopsOrder.length / 4);
        pageInfo.textContent = `${currentPage} ... ${pages}`;
              
        let maxPrice = document.querySelector("input[name=max-price]");
        maxPrice.value = "";
        drawAllLatops(paging(laptopsOrder, currentLaptop, perPage));
    };
}