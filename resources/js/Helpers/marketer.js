import route from "ziggy-js/src/js";

function getMarketerDetails(marketerID){
    return axios.post(route('getMarketerDetails',[marketerID]))
}


export {
    getMarketerDetails
}
