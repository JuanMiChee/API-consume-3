async function fetchCryptoApi() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    let response = await fetch(url);
    return response.json();
}

function showAll(){  
    toggleLoad(); 
    fetchCryptoApi().then(jsonProcessing);  
}
fetchCryptoApi().then(jsonProcessing);

let loaderHide = document.getElementById("loader");
// loaderHide.style.display = 'block';

function toggleLoad(){
    let loader = document.getElementById("loader");
    if (loader.style.display === "none") {
      loader.style.display = "block";
    } else {
      loader.style.display = "none";     
       }
    }
    

function jsonProcessing(json) {         
    let timeJsonObject = json.time.updated;       
    showEurInformation(json);
    showUsdInformation(json);
    showGbpInformation(json); 
    toggleLoad();
    console.log(json);       
} 

function showEurInformation(json){
    // EUR SECTION:
    let copyright = document.getElementById("copyright");
    copyright.innerHTML = "" + json.disclaimer;

    let general = document.getElementById("euro1");
    general.innerHTML =  json.bpi.EUR.rate + " Eur Rate";

    let rateFloat = document.getElementById("euro2");
    rateFloat.innerHTML =  json.bpi.EUR.rate_float + " Eur Rate_float";

    let symbol = document.getElementById("euro3");
    symbol.innerHTML = "" + json.bpi.EUR.symbol;
    // EUR SECTION
}       

    function showUsdInformation(json){
    // USD SECTION:
    let usdRate = document.getElementById("USD1");
    usdRate.innerHTML =  json.bpi.USD.rate + " USD Rate";

    let usdRateFloat = document.getElementById("USD2");
    usdRateFloat.innerHTML =  json.bpi.USD.rate_float  + " USD Rate_float";

    let usdSymbol = document.getElementById("USD3");
    usdSymbol.innerHTML = "" + json.bpi.USD.symbol;
    // USD SECTION
}
   

    function showGbpInformation(json){
    // gbp SECTION:
    let gbpRate = document.getElementById("gbp1");
    gbpRate.innerHTML = json.bpi.GBP.rate +"GBP Rate ";

    let gbpRateFloat = document.getElementById("gbp2");
    gbpRateFloat.innerHTML =  json.bpi.GBP.rate_float +"GBP Rate_float " ;

    let gbpSymbol = document.getElementById("gbp3");
    gbpSymbol.innerHTML = "" + json.bpi.GBP.symbol;
    // gbp SECTION

}

function toggleMenu(){
    document.getElementById('links-container').classList.toggle('active');
    // document.getElementById('movies-container').classList.toggle('hide');
} 





   








