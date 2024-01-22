import axios from "axios";
async function getMovements(setter){
    const response = await axios.get('http://localhost:8080/api/movements/get-all-movements?offset=0&limit=10')
        response.data.movimientos.map( movement => {
             switch(movement.section) {
                case 'insurance': movement.section = 'Seguro';
                break;
                case 'capital': movement.section = 'Capital';
                break;
            }
            movement.movement_type = movement.movement_type[0].toUpperCase() + movement.movement_type.slice(1)
            movement.key = movement.id
            return movement
        })
        return setter(response.data.movimientos);
}

module.exports = {
    getMovements
}