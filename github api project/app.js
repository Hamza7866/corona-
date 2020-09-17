const apiKey = "https://corona-api.com/countries";
const container = document.querySelector(".container");
async function getCoronaData() {
  try {
    const fetchData = await fetch(apiKey);
    const jsonData = await fetchData.json();
    jsonData.data.forEach((dataElement) => {
      const div = document.createElement("p");
      div.innerHTML += `
      <table class="table table-dark">
  <thead>
    <tr>
      <th class="bg-info"  scope="col">${dataElement.name}</th>
      <th scope="col">Total Population : ${dataElement.population}</th>
      <th scope="col">Update at : ${dataElement.updated_at}</th>
      
    </tr>
  </thead>
  <tbody>
  <tr>
   <th class="bg-warning"  scope="row">Total Confirmed Cases 😞  : ${dataElement.latest_data.confirmed}</th>
    <th class="bg-success" scope="row">Total Recovered: ${dataElement.latest_data.recovered}</th>
    <th class="bg-danger" scope="row">Total Deaths 	😢  :  ${dataElement.latest_data.deaths}</th>
    <th class="bg-danger" scope="row">Total  Deaths  Today	😢  :  ${dataElement.today.deaths}</th>
    <th class="bg-warning" scope="row">Total Today  Confirmed 	😞   :  ${dataElement.today.deaths}</th>
    </tr>
    </tbody>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    getCoronaData();
  }
}

getCoronaData();
