import Axios from "axios-jsonp-pro";

export type WeatherApiData = { dayPictureUrl: string; weather: string };
type BaiduApiResponse = {
  results: {
    weather_data: { weather: string; dayPictureUrl: string }[];
  }[];
};

export const getBaiduWeatherApiData = async (
  city: string
): Promise<WeatherApiData> => {
  const url =
    "http://api.map.baidu.com/telematics/v3/weather?location=" +
    encodeURIComponent(city) +
    "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2";
  try {
    const res: BaiduApiResponse = await Axios.jsonp(url);
    console.log(res);
    return {
      weather: res.results[0].weather_data[0].weather,
      dayPictureUrl: res.results[0].weather_data[0].dayPictureUrl,
    };
  } catch (err) {
    throw err;
  }
};
