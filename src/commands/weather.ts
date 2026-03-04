import { Command } from "commander";
import { WeatherService } from "../services/weatherService";

export default function weatherCommand(program: Command) {

  program
    .command("weather <city>")
    .description("show weather of a city")
    .action(async (city) => {

      try {

        const service = new WeatherService();
        const data = await service.getWeather(city);

        console.log("Temperature:", data.temp_C, "°C");
        console.log("Condition:", data.weatherDesc[0].value);

      } catch (error) {

        console.log("Could not fetch weather data right now.");
        console.log("Please try again later.");

      }

    });

}