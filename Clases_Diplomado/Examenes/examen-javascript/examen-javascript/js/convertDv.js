import { ajax } from "./ajax.js";
import web_api from "./web_api.js";

export function ConversionDivisas(props){
const {cantidad,de,a,dtalleCambio,} = props

ajax({
    url:`${web_api.GET}${de.value}`,
    cbSuccess: resul =>{
        console.log(resul)   
        let Cambio;  
        let rates;
        let cant =cantidad.value?cantidad.value:cantidad.value=1;           
       if(a.value === "BOB"){      
        rates = resul.conversion_rates.BOB
         Cambio =  cant * rates
         console.log(Cambio)
        }else if(a.value === "CLP"){
            rates = resul.conversion_rates.CLP
            Cambio = cant * rates
            console.log(Cambio)
        }else if(a.value === "MXN"){
            rates = resul.conversion_rates.MXN
            Cambio = cant * rates
            console.log(Cambio)
        }else if(a.value === "ARS"){
            rates = resul.conversion_rates.ARS
            Cambio = cant * rates
            console.log(Cambio)
        }else if(a.value === "USD"){
            rates = resul.conversion_rates.USD
            Cambio = cant * rates
            console.log(Cambio)
        } 
      

        dtalleCambio.innerHTML=`1${de.value} = ${rates}`
        respuesta.value =Cambio
    } 
})

}
