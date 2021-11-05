import { createGlobalStyle } from'styled-components'

export default createGlobalStyle `
*{
    border-sizing: border-box;
    margin:0;
    padding:0;
}

h3{
    text-align:center;
}

html, body, #root{
    height: 100%;
}

body{
    background-color: #F6F6F6;
}

*, button, input {
    border:0;
    font-family: 'Roboto', sans-serif;
    outline: 0;
}

.app_header{
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.app_status{
    display: flex;
    justify-content: space-between;
}

.card{
    margin-top:10px;
    text-align: center;
    width:200px;
}

.infoBox_title, .infoBox_total{
    text-align: center;
}

.app_left{
    flex: 0.9;
}

.app{
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
}

@media (max-width: 990px) {
    .app{
        flex-direction: column;
    }
}

@media (max-width: 750px) {
    .app_status{
        flex-wrap: wrap;
    }
}

.table{
    color: #66666;
    height: 500px;
    margin-top:20px;
    overflow-x: hidden;
    overflow-y: scroll;
}

.table tr{
    display: flex;
    justify-content: space-between;
}

.table td{
    padding: 0.5rem;
}

.table tr:nth-of-type(odd){
    background-color: #B9E200;
}

.mapbox .map-container{
    height: 400px;
}

.mapbox{
    background-color: white;
    border-radius: 14px;
    box-shadow: 0 0 9px -4px rgba(0,0,0,0.5);
    margin-top: 10px;
    padding: 15px;
}

.footer{
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #666666;
    height: 50px;
}
`;
