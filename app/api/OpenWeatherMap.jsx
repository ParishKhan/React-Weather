import Axios from 'axios';

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f26f5a4cfd8736213eef35ad25e90293&';

export default {
    getTemp(location) {
        var encodedLocation = encodeURIComponent(location)
        var requestURL = WEATHER_API_URL + 'q=' + encodedLocation;

        return Axios.get(requestURL).then(function(res){
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp
            }
        }, function(res){
            throw new Error(res.data.message)
        })
    }
}