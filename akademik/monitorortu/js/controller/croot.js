import { setInner, addInner} from "https://jscroot.github.io/element/croot.js";
import {get} from "https://jscroot.github.io/api/croot.js"
import { rowtabel } from "../template/tabel.js";
import { URLPresensi } from "../config/url.js";
setInner("dafdir","Daftar Kehadiran");
get(URLPresensi, tabelContent);

function tabelContent (result){
    dafdirTable(result);   
}

function dafdirTable(jsonParse){
    jsonParse.forEach((element, index) => {
    let row = rowtabel.replace("#datetime#", element.datetime).replace("#keterangan#", element.keterangan).replace("#kehadiran#", element.kehadiran);
    console.log(element._id);
    addInner("demo",row);
    });
}