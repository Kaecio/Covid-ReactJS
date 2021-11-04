import { createGlobalStyle } from'styled-components'

export default createGlobalStyle `
*{
    margin:0;
    padding:0;
    border-sizing: border-box;
}

html, body, #root{
    height: 100%;
}

body{
    background-color: #F6F6F6;
}

*, button, input {
    border:0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
}

.app_header{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
}

.app_status{
    display: flex;
    justify-content: space-between;
}

.card{
    width:200px;
    text-align: center;
}

.infoBox_title, .infoBox_total{
    text-align: center;
}

.infoBox_total{

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
    margin-top:20px;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 400px;
    color: #66666;
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

.mapbox{
    margin-top:20px;
    display:flex;
    align-items: center;
    justify-content: center;

}

.map-container{
    height:400px;
}
`;
