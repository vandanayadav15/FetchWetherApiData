async function fetchData() {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    return data;
}

async function callFetchData() {
    const responseData = await fetchData();
    console.log(responseData);
    let tableData = "";
    responseData.map((item, index) => {
         tableData +=
                `<tr>
        <td><img src="${item.image}"/></td>
        <td>${item.name}</td>
        <td>${item.id}</td>
        <td>${item.symbol}</td>
        <td>$${item.current_price}</td>
        <td>$${item.total_volume}</td>
        <td class="${item.price_change_percentage_24h>0?"positiveValue":"nagativeValue"}">${item.price_change_percentage_24h}%</td>
        <td> Mkt Cap:$${item.market_cap}<td>
        </tr>`;
        })
            document.getElementById("table_body").innerHTML = tableData;
}
callFetchData()
//}
// fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((data) => {
//     return data.json();
//     console.log(data);
// })
//     .then((objectData) => {
//     let tableData = " ";
//         objectData.map((item) => {
//             tableData +=
//                 `<tr>
//         <th><img src="${item.image}"/></th>
//         <th>${item.name}</th>
//         <th>${item.id}</th>
//         <th>${item.symbol}</th>
//         <th>${item.current_price}</th>
//         <th>${item.total_volume}</th>
//         </tr>`;
//         })
//             document.getElementById("table_body").innerHTML = tableData;

// })
