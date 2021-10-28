import React,{ useState, useEffect }from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import Mapa from './Mapa';
import Infobox from './infoBox';
import Table from './Table';
import { sortData } from './utils';

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(['Wordwide'])
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])

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
        value: country.countryInfo.iso2
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
  : `https://disease.sh/v3/covid-19/countries/${getCountry}`
  
  await fetch(url)
  .then(response => response.json())
  .then(data =>  {
    setCountry(getCountry)
    setCountryInfo(data)
  
})
}
console.log("sss",countryInfo)
const a = countryInfo.deaths

  return (
    <div className="app">
      <div className="app_left">
      <div className="app_header">
        <h1>Central da Covid-19</h1>
      <FormControl className="form-control">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value={country}>WordWide</MenuItem>
         {countries.map((country) =>(
          <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div className="app_status">
        <Infobox title="Casos de Covis-19" cases={countryInfo.cases} total />
        <Infobox title="Recuperados" cases={countryInfo.recovered} total />
        <Infobox title="Óbitos" cases={a} total />
        <Infobox title="testado" cases={countryInfo.tests} total />
      </div>
      <Mapa />
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
}

export default App;
