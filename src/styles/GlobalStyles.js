import { createGlobalStyle } from'styled-components'

export default createGlobalStyle `
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
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
    border:10px;
    font-family: 'Roboto', sans-serif;
    outline: 0;
}

.form-control-select{
    box-shadow: 0 0 9px -4px rgba(0,0,0,0.5);
}
.container{
    height: 100vh;
}
.app_header{
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.flag{
    height: 90px;
    width: 70px;
}
.app_status{
    display: flex;
    justify-content: space-between;
}

.card{
    box-shadow: 0 0 9px -4px rgba(0,0,0,0.5);
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

.app_right{
    box-shadow: 0 0 9px -4px rgba(0,0,0,0.5);
    border-radius: 14px;
    margin-top:10px;
}
.app{
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
}

@media (max-width: 768px) {
    .author{
        color: #fff;
        font-size: 14 px;
    }
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
    .app_header{
        flex-direction: column;
    }
}

@media (max-width: 450px) {
    .app_status{
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .author{
        text-align: center;
    }
    img{
        display: none;
    }
}

.table{
    color: #000;
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
    height: 20vh;
}

.author{
    align-items: center;
    color: #fff;
    display: flex;
    text-align: center;
}
`;
