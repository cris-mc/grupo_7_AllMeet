//Requiriendo la funcionalidad fyle sinc que resuelve rutas
const fs = require('fs');

//Requiriendo la funcionalidad path que resuelve rutas
const path = require('path');

//Creando los metodos de lectura y guardado de json
let helpers = {
    readJson: function (nameJson) {
        let data = fs.readFileSync(path.resolve(__dirname, `../database/${nameJson}`));
        return JSON.parse(data);
    },
    writeJson: function (nameJson, data) {
        fs.writeFileSync(path.resolve(__dirname, '../database/' + nameJson), JSON.stringify(data, null, 4)  );
    },
    newId: function (nameJson) {
        let data = helpers.readJson(nameJson);
        let mayor = 0;
        for(i in data){
            if(data[i].id > mayor){
                mayor = data[i].id;
            }
        }
        mayor = parseInt(mayor) + 1;
        return mayor;
    }
}

//Exportando al router para que pueda ser usado por el entry point
module.exports = helpers;