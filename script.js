const data = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 41583,
    market_cap: 815945840953,
    market_cap_rank: 1,
    fully_diluted_valuation: 873781077611,
    total_volume: 24765633106,
    high_24h: 42195,
    low_24h: 40085,
    price_change_24h: 1460.6,
    price_change_percentage_24h: 3.64035,
    market_cap_change_24h: 29369091779,
    market_cap_change_percentage_24h: 3.73379,
    circulating_supply: 19610018.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 69045,
    ath_change_percentage: -39.80191,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 61195.15986,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2024-01-27T08:33:16.428Z",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    current_price: 2254.75,
    market_cap: 271136697481,
    market_cap_rank: 2,
    fully_diluted_valuation: 271135922141,
    total_volume: 9831313245,
    high_24h: 2280.63,
    low_24h: 2206.34,
    price_change_24h: 43.69,
    price_change_percentage_24h: 1.97602,
    market_cap_change_24h: 5493945803,
    market_cap_change_percentage_24h: 2.06817,
    circulating_supply: 120180302.955156,
    total_supply: 120179959.288654,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -53.79479,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 0.432979,
    atl_change_percentage: 520482.14634,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 71.4791748777783,
      currency: "btc",
      percentage: 7147.917487777831,
    },
    last_updated: "2024-01-27T08:33:29.701Z",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    current_price: 0.999854,
    market_cap: 96022727718,
    market_cap_rank: 3,
    fully_diluted_valuation: 96022727718,
    total_volume: 32423090735,
    high_24h: 1.002,
    low_24h: 0.997415,
    price_change_24h: 0.00015496,
    price_change_percentage_24h: 0.0155,
    market_cap_change_24h: 512623639,
    market_cap_change_percentage_24h: 0.53672,
    circulating_supply: 96036749591.5366,
    total_supply: 96036749591.5366,
    max_supply: null,
    ath: 1.32,
    ath_change_percentage: -24.46244,
    ath_date: "2018-07-24T00:00:00.000Z",
    atl: 0.572521,
    atl_change_percentage: 74.56719,
    atl_date: "2015-03-02T00:00:00.000Z",
    roi: null,
    last_updated: "2024-01-27T08:30:12.810Z",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 302.88,
    market_cap: 46622004966,
    market_cap_rank: 4,
    fully_diluted_valuation: 46622004966,
    total_volume: 867027274,
    high_24h: 307.06,
    low_24h: 294.96,
    price_change_24h: 7.84,
    price_change_percentage_24h: 2.65791,
    market_cap_change_24h: 1239905247,
    market_cap_change_percentage_24h: 2.73215,
    circulating_supply: 153856150.0,
    total_supply: 153856150.0,
    max_supply: 200000000.0,
    ath: 686.31,
    ath_change_percentage: -55.87651,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 0.0398177,
    atl_change_percentage: 760422.16541,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2024-01-27T08:33:20.820Z",
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    current_price: 91.09,
    market_cap: 39472189450,
    market_cap_rank: 5,
    fully_diluted_valuation: 51752747828,
    total_volume: 2168960981,
    high_24h: 93.47,
    low_24h: 87.43,
    price_change_24h: 3.41,
    price_change_percentage_24h: 3.89432,
    market_cap_change_24h: 1475493812,
    market_cap_change_percentage_24h: 3.88322,
    circulating_supply: 433260303.254178,
    total_supply: 568055928.259408,
    max_supply: null,
    ath: 259.96,
    ath_change_percentage: -65.04792,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 0.500801,
    atl_change_percentage: 18043.15912,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2024-01-27T08:33:27.731Z",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 0.528422,
    market_cap: 28740508045,
    market_cap_rank: 6,
    fully_diluted_valuation: 52850214908,
    total_volume: 871479426,
    high_24h: 0.535152,
    low_24h: 0.511335,
    price_change_24h: 0.0169932,
    price_change_percentage_24h: 3.32269,
    market_cap_change_24h: 913430987,
    market_cap_change_percentage_24h: 3.28253,
    circulating_supply: 54374512255.0,
    total_supply: 99987956150.0,
    max_supply: 100000000000.0,
    ath: 3.4,
    ath_change_percentage: -84.4581,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 19562.81462,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: "2024-01-27T08:33:24.898Z",
  },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USDC",
    image:
      "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    current_price: 0.999962,
    market_cap: 26102969228,
    market_cap_rank: 7,
    fully_diluted_valuation: 25477266413,
    total_volume: 5221067175,
    high_24h: 1.003,
    low_24h: 0.997126,
    price_change_24h: -0.000163541822803759,
    price_change_percentage_24h: -0.01635,
    market_cap_change_24h: 84111491,
    market_cap_change_percentage_24h: 0.32327,
    circulating_supply: 26096329644.0264,
    total_supply: 25470785983.8999,
    max_supply: null,
    ath: 1.17,
    ath_change_percentage: -14.7569,
    ath_date: "2019-05-08T00:40:28.300Z",
    atl: 0.877647,
    atl_change_percentage: 13.90131,
    atl_date: "2023-03-11T08:02:13.981Z",
    roi: null,
    last_updated: "2024-01-27T08:33:32.586Z",
  },
  {
    id: "staked-ether",
    symbol: "steth",
    name: "Lido Staked Ether",
    image:
      "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    current_price: 2254.94,
    market_cap: 21132367727,
    market_cap_rank: 8,
    fully_diluted_valuation: 21132367727,
    total_volume: 15402363,
    high_24h: 2279.09,
    low_24h: 2205.8,
    price_change_24h: 45.31,
    price_change_percentage_24h: 2.05044,
    market_cap_change_24h: 418883041,
    market_cap_change_percentage_24h: 2.02227,
    circulating_supply: 9371588.82499379,
    total_supply: 9371588.82499379,
    max_supply: 9371588.82499379,
    ath: 4829.57,
    ath_change_percentage: -53.33523,
    ath_date: "2021-11-10T14:40:47.256Z",
    atl: 482.9,
    atl_change_percentage: 366.7065,
    atl_date: "2020-12-22T04:08:21.854Z",
    roi: null,
    last_updated: "2024-01-27T08:33:29.421Z",
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    current_price: 0.477766,
    market_cap: 16777667567,
    market_cap_rank: 9,
    fully_diluted_valuation: 21515390172,
    total_volume: 363982662,
    high_24h: 0.489724,
    low_24h: 0.469663,
    price_change_24h: 0.00797523,
    price_change_percentage_24h: 1.69761,
    market_cap_change_24h: 295917788,
    market_cap_change_percentage_24h: 1.79543,
    circulating_supply: 35090929536.8906,
    total_supply: 45000000000.0,
    max_supply: 45000000000.0,
    ath: 3.09,
    ath_change_percentage: -84.5233,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 0.01925275,
    atl_change_percentage: 2381.47499,
    atl_date: "2020-03-13T02:22:55.044Z",
    roi: null,
    last_updated: "2024-01-27T08:33:30.234Z",
  },
  {
    id: "avalanche-2",
    symbol: "avax",
    name: "Avalanche",
    image:
      "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    current_price: 32.04,
    market_cap: 11760919202,
    market_cap_rank: 10,
    fully_diluted_valuation: 13940889293,
    total_volume: 552843384,
    high_24h: 32.98,
    low_24h: 30.82,
    price_change_24h: 1.14,
    price_change_percentage_24h: 3.69345,
    market_cap_change_24h: 408582072,
    market_cap_change_percentage_24h: 3.5991,
    circulating_supply: 367036942.921509,
    total_supply: 435069852.921509,
    max_supply: 720000000.0,
    ath: 144.96,
    ath_change_percentage: -77.9389,
    ath_date: "2021-11-21T14:18:56.538Z",
    atl: 2.8,
    atl_change_percentage: 1041.71024,
    atl_date: "2020-12-31T13:15:21.540Z",
    roi: null,
    last_updated: "2024-01-27T08:33:22.822Z",
  },
];
// async function getData(){
//         const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
//         const data = await response.json();
//         console.log(data);

//         return appendElements(data);

//     // appendElements(data);
// }
// getData();
appendElements(data);
function appendElements(data) {
  const body = document.getElementById("body");
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    body.innerHTML += `
        <tr>
                <td><img src="${data[i].image}" alt="."></td>
                <td>${data[i].id}</td>
                <td>${data[i].symbol}</td>
                <td>$ ${data[i].current_price}</td>
                <td> $${data[i].fully_diluted_valuation}</td>
                <td id="p"> ${data[i].price_change_percentage_24h}%</td>
                <td>Mkt Cap: $ ${data[i].market_cap}</td>
            </tr>
        `
  }
}
const tbody = document.getElementById("body")
const search = document.getElementById("search-inp");
search.addEventListener("input" , function() {
   const searchInput = search.value.toLowerCase()
   let x = searchInput
//    console.log(searchInput);
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }

    for(let i=0;i<data.length;i++){
        if(data[i].id.toLowerCase().includes(x.toLowerCase())){
        let a = data[i];
        const tr = document.createElement("tr");
        tr.innerHTML = 
        `
        <td><img src="${a.image}" alt="."></td>
                <td>${a.id}</td>
                <td>${a.symbol}</td>
                <td>$ ${a.current_price}</td>
                <td> $${a.fully_diluted_valuation}</td>
                <td id="p"> ${a.price_change_percentage_24h}%</td>
                <td>Mkt Cap: $ ${a.market_cap}</td>
        `
        tbody.appendChild(tr);
    }
}
});

const Mkpbtn = document.getElementById("mktCap");
Mkpbtn.addEventListener("click", function(){
    let arr = data.sort((a, b) => a.market_cap - b.market_cap);
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }

    for(let i=0;i<data.length;i++){
        const tr = document.createElement("tr");
        tr.innerHTML = 
        `
        <td><img src="${arr[i].image}" alt="."></td>
                <td>${arr[i].id}</td>
                <td>${arr[i].symbol}</td>
                <td>$ ${arr[i].current_price}</td>
                <td> $${arr[i].fully_diluted_valuation}</td>
                <td id="p"> ${arr[i].price_change_percentage_24h}%</td>
                <td>Mkt Cap: $ ${arr[i].market_cap}</td>
        `
        tbody.appendChild(tr);
    }
});

percentBtn = document.getElementById("percent");
percentBtn.addEventListener("click", function(){
    let arr = data.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }

    for(let i=0;i<data.length;i++){
        const tr = document.createElement("tr");
        tr.innerHTML = 
        `
        <td><img src="${arr[i].image}" alt="."></td>
                <td>${arr[i].id}</td>
                <td>${arr[i].symbol}</td>
                <td>$ ${arr[i].current_price}</td>
                <td> $${arr[i].fully_diluted_valuation}</td>
                <td id="p"> ${arr[i].price_change_percentage_24h}%</td>
                <td>Mkt Cap: $ ${arr[i].market_cap}</td>
        `
        tbody.appendChild(tr);
    }
})