


async function findPics() {

    const searchTerm = document.getElementById("js-searchText").value;
    const apiKey = "sRwg7k2wiKb2uyQpsFfg2GmuTOIta8ES";

    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=8`;

    try{
        const response = await fetch(url);

        const data = await response.json();

       
        document.getElementById("js-picsContainer").innerHTML = "";

        for (let i = 0; i<data.data.length; i++) {

            const gifUrl = data.data[i].images.original.url;

            document.getElementById("js-picsContainer").innerHTML += `<img src="${gifUrl}" alt = "GIF">`
        }
            //console.log(gifUrl);
    }
    catch (error) {
        console.log("Error:", error);
    }
    
}

 