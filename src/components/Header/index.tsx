import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";
import { Row, Col } from "antd";
import { getChineseDateTimeFormat } from "src/utils/chineseDateFormat";
import {
  getBaiduWeatherApiData,
  WeatherApiData,
} from "src/services/baiduWeather";

export const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [weatherApiData, setWeatherApiData] = useState<
    WeatherApiData | undefined
  >(undefined);

  useEffect(() => {
    setInterval(
      () => setCurrentTime(getChineseDateTimeFormat(new Date())),
      1000
    );
    (async () => {
      try {
        const data = await getBaiduWeatherApiData("北京");
        setWeatherApiData({ ...data });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className={classes["header"]}>
      <div className={classes["top"]}>header-top</div>
      <Row className={classes["bottom"]}>
        <Col span="4" className={classes["left"]}>
          <span>label</span>
        </Col>
        <Col span="20" className={classes["right"]}>
          <span>{currentTime}</span>
          <img src={weatherApiData?.dayPictureUrl} alt="weatherUrl" />
          <span>{weatherApiData?.weather}</span>
        </Col>
      </Row>
    </div>
  );
};
