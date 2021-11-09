async function fetchTimeApi() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    let response = await fetch(url);
    return response.json();
}


fetchTimeApi().then(jsonProcessing)

function jsonProcessing(json) {         
        let timeJsonObject = json.time.updated;

        let jsonData = {
            updated: json.time.time,
            disclaimer: json.disclaimer,
            bpi: json.bpi,
            gbp: json.bpi.USD,
            eur: json.bpi.EUR,
        }
        console.log(jsonData);  
         
        // EUR SECTION:

        

        let copyright = document.getElementById("copyright");
        copyright.innerHTML = "" + jsonData.disclaimer;

        let general = document.getElementById("euro1");
        general.innerHTML =  json.bpi.EUR.rate + " Eur Rate";

        let rateFloat = document.getElementById("euro2");
        rateFloat.innerHTML =  json.bpi.EUR.rate_float + " Eur Rate_float";

        let symbol = document.getElementById("euro3");
        symbol.innerHTML = "" + json.bpi.EUR.symbol;

        // EUR SECTION


        // USD SECTION:

        let usdRate = document.getElementById("USD1");
        usdRate.innerHTML =  json.bpi.USD.rate + " USD Rate";

        let usdRateFloat = document.getElementById("USD2");
        usdRateFloat.innerHTML =  json.bpi.USD.rate_float  + " USD Rate_float";

        let usdSymbol = document.getElementById("USD3");
        usdSymbol.innerHTML = "" + json.bpi.USD.symbol;

        // USD SECTION

        // gbp SECTION:
        let gbpRate = document.getElementById("gbp1");
        gbpRate.innerHTML = json.bpi.GBP.rate +"GBP Rate ";

        let gbpRateFloat = document.getElementById("gbp2");
        gbpRateFloat.innerHTML =  json.bpi.GBP.rate_float +"GBP Rate_float " ;

        let gbpSymbol = document.getElementById("gbp3");
        gbpSymbol.innerHTML = "" + json.bpi.GBP.symbol;
        // gbp SECTION
}


   








