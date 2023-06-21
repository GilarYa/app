import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { getRandomColorName } from "./randomcol.js";
import {rowtabel, svg ,jbt} from "../template/table.js";
import { URLPenggajian } from "../config/url.js";
get(URLPenggajian, tabelContent);
 

function tabelContent(result){
    userTable(result);
}

function userTable(jsonParse){
    let row = '';
    jsonParse.forEach((element) => {
    let svgicon = svg.replace("#WARNA#", getRandomColorName());
    let jabat = jbt.replace("#col#", getRandomColorName());
    console.log(jabat);
    row = rowtabel.replace("#_id#", element._id).
        replace("#username#", element.Username).
        replace("#jbt#", jabat).
        replace("#email#", element.Email).
        replace("#location#", element.Location).
        replace("#orders#", element.Orders).
        replace("#lastorders#", element.Lastorders).
        replace("#totalspent#", element.Totalspent).
        replace("#sks#", element.Sks).
        replace("#SVG#", svgicon);
        addInner("demo",row);
    });
}
     