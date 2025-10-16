window.onload = function () {
  const Exercise33 = () => {
    const vinylCollection = [
      {
        id: 1,
        albumTitle: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        tracklist: ["Speak to Me", "Breathe", "Time", "The Great Gig in the Sky"]
      },
      {
        id: 2,
        albumTitle: "Abbey Road",
        artist: "The Beatles",
        tracklist: ["Come Together", "Something", "Here Comes the Sun", "Octopus's Garden"]
      },
      {
        id: 3,
        albumTitle: "Thriller",
        artist: "Michael Jackson",
        tracklist: ["Wanna Be Startin' Somethin'", "Thriller", "Beat It", "Billie Jean"]
      },
      {
        id: 4,
        albumTitle: "Back in Black",
        artist: "AC/DC",
        tracklist: ["Hells Bells", "Shoot to Thrill", "Back in Black", "You Shook Me All Night Long"]
      },
      {
        id: 5,
        albumTitle: "Rumours",
        artist: "Fleetwood Mac",
        tracklist: ["Second Hand News", "Dreams", "Don't Stop", "Go Your Own Way"]
      }
    ];

    
    
      
    const idInserted = parseInt(prompt("Enter the id:").trim());
    
    const order = vinylCollection.reduce((acc, elem) => {
      if (elem.id == idInserted) {
        acc = elem;
      }
      return acc;
    }, "");


    if (order !== ""){
      document.write(`<p><strong>Sorted by id</strong></p>`);
      for(const i in order) {
        document.write(`<p> ${i}: ${order[i]}</p>`);
      }
       document.write(`<div style="width: 100%; height: 2px; background-color: black; margin: 20px 0;"></div>`);
       document.write(`</br>`);

    }else {
      alert(`The id doesn't exist.`);
      Exercise33();
    }
      
    const orderInserted = prompt("Enter the sort criterion: id, albumTitle, or artist").trim().toLowerCase();  
    
    // to avoid mutating the original array     
    let vinylCollectionOrder = [...vinylCollection];
    
    vinylCollectionOrder.sort((a, b) => {
    const valA = a[orderInserted];
    const valB = b[orderInserted];

    if (!a.hasOwnProperty(orderInserted) || !b.hasOwnProperty(orderInserted)) {
      return 0;
    }

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    }

    return 0;
  });
  document.write(`<h3>Sorted by ${orderInserted}</h3></br>`)
  vinylCollectionOrder.forEach(elem => {
    for(const i in elem) {
      document.write(`<p> ${i}: ${elem[i]}</p>`);
    }
    document.write(`<div style="width: 100%; height: 2px; background-color: black; margin: 20px 0;"></div>`);
    document.write(`</br>`);
  });
      
      
  }
  Exercise33();
}
