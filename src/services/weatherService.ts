import axios from "axios";

export class WeatherService {

  async getWeather(city: string) {

    const url = `https://wttr.in/${city}?format=j1`;

    const res = await axios.get(url);

    return res.data.current_condition[0];

  }

}