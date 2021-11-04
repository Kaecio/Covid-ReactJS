import React,{ useState, useEffect }from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import Mapa from './Mapa';
import Infobox from './infoBox';
import Table from './Table';
import { sortData, formatNumber } from './utils';

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(['Países'])
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)

  useEffect(() => {
   fetch("https://disease.sh/v3/covid-19/all")
   .then(response => response.json())
    .then((data) => {
      setCountryInfo(data)
      })
  }, [])

  useEffect(() => {
  const getCountriesData = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then(response => response.json())
    .then((data) => {
      const countries = data.map((country) =>({
        name: country.country,
        value: country.countryInfo.iso2,
        lat: country.countryInfo.lat,
        long: country.countryInfo.long
      }))
      const sortedData = sortData(data)
      setTableData(sortedData)
      setCountries(countries);
    })
  }
  getCountriesData()
  }, [])

const onCountryChange = async (event) => {
  const getCountry = event.target.value;
  setCountry(getCountry)

  const url = getCountry === 'WordWide' 
  ? 'https://disease.sh/v3/covid-19/all' 
  : `https://disease.sh/v3/covid-19/countries/${getCountry}`;

  await fetch(url)
  .then(response => response.json())
  .then(data =>  {
    let teste = data
    setCountry(getCountry)
    setCountryInfo(data)
    setLatitude(teste.countryInfo.lat)
    setLongitude(teste.countryInfo.long)
  })  
}

console.log(latitude)
console.log(longitude)
  return (
    <div className="app">
      <div className="app_left">
      <div className="app_header">
        <h1>Central da Covid-19</h1>
        
      <FormControl className="form-control">
        <Select variant="outlined" onChange={onCountryChange} value={country} >
          <MenuItem value={country}>WordWide</MenuItem>
         {countries.map((country) =>(
          <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div className="app_status">
        <Infobox title="Casos de Covid-19" cases={formatNumber(countryInfo.cases)} total />
        <Infobox title="Recuperados" cases={formatNumber(countryInfo.recovered)} total />
        <Infobox title="Óbitos" cases={formatNumber(countryInfo.deaths)} total />
        <Infobox title="testados" cases={formatNumber(countryInfo.tests)} total />
      </div>
        <Mapa longitude={longitude} latitude={latitude} />
      </div>
      <Card className="app_right">
          <CardContent>
            <h3>Dados </h3>
            <Table countries={tableData} />
            <h3>Novos casos</h3>
          </CardContent>
      </Card>
      <GlobalStyles />
    </div>
  );
};

export default App;
