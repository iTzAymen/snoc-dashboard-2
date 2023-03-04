import React, { useState, useRef, useEffect } from "react";
import { data } from "../assets/wilayas.json";
import { WilayasSVG_Data } from "../assets/WilayasSVG";
import { CityData } from "../js/DataToChartData";

const wilayas = data.map((val) => val.name.toUpperCase());
const getWilayaName = (wilaya_id) => {
  let name = wilayas[wilaya_id - 1];
  return name;
};
const WilayasSVG_Data_firstcopy = WilayasSVG_Data.map((val) => {
  val.label = getWilayaName(val.id);
  val.count = 0;
  return val;
});

const getWilayaId = (wilaya_name) => {
  let id = wilayas.indexOf(wilaya_name) + 1;
  if (id <= 0) {
    const el = data.find(
      (one_wilaya_data) =>
        one_wilaya_data.alt && one_wilaya_data.alt.toUpperCase() == wilaya_name
    );
    if (el) {
      id = el.id;
    } else {
      return null;
    }
  }
  return id;
};

const getWilayaSVG = (wilaya_id) => {
  const svg_props = WilayasSVG_Data.find(
    (svg_data) => svg_data.id == wilaya_id
  );
  if (!svg_props) {
    // console.log(`no svg found for ${wilaya_id}`);
  }
  return svg_props;
};

const HeatmapTooltip = ({ label, value, xPos, yPos, enabled }) => {
  const className = enabled
    ? "bg-black  bg-opacity-70 rounded-md p-2 absolute pointer-events-none opacity-100 transition-all z-30"
    : "bg-black  bg-opacity-70 rounded-md p-2 absolute pointer-events-none opacity-0 transition-all z-30";
  return (
    <div className={className} style={{ top: yPos + "px", left: xPos + "px" }}>
      <h1 className="font-bold text-xs text-white">{label}</h1>
      <p className="font-thin text-xs text-white">{"Transactions: " + value}</p>
    </div>
  );
};

const Heatmap = ({ city_data, height }) => {
  const maxCityCount = city_data.reduce(
    (max, obj) => (obj.count > max ? obj.count : max),
    0
  );

  const averageCityCount =
    city_data.reduce((sum, obj) => sum + obj.count, 0) / city_data.length;
  let WilayasSVG_Data_copy = [...WilayasSVG_Data_firstcopy];

  city_data.forEach((val) => {
    const wilaya_id = getWilayaId(val._id);
    if (!wilaya_id) {
      console.log(`no id found for ${val._id}`);
      return;
    }
    let wilaya_svg_props = getWilayaSVG(wilaya_id);
    if (!wilaya_svg_props) {
      return;
    }
    const opacity = Math.max(
      val.count / ((averageCityCount + maxCityCount) / 2),
      0.05
    );
    wilaya_svg_props.opacity = opacity;
    const data_index = WilayasSVG_Data_copy.findIndex(
      (item) => item.id == wilaya_id
    );

    wilaya_svg_props.label = val._id;
    wilaya_svg_props.count = val.count;
    WilayasSVG_Data_copy[data_index] = wilaya_svg_props;
  });

  const [tooltipData, setTooltipData] = useState({
    xPos: 0,
    yPos: 0,
    label: "",
    value: "",
    enabled: false,
  });

  const onMouseEnter = (e, val, setStyle) => {
    const { layerX, layerY } = e.nativeEvent;
    setTooltipData({
      xPos: layerX,
      yPos: layerY,
      label: val.label,
      value: val.count,
      enabled: true,
    });

    setStyle({
      fillOpacity: 0.5,
      strokeOpacity: "0.1",
    });
  };

  const onMouseLeave = (e, val, setStyle) => {
    setTooltipData({
      xPos: tooltipData.xPos,
      yPos: tooltipData.yPos,
      label: tooltipData.label,
      value: tooltipData.value,
      enabled: false,
    });
    setStyle({
      fillOpacity: val.opacity ? val.opacity : 0.025,
      strokeOpacity: "0.1",
    });
  };

  const WilayasSVG = WilayasSVG_Data_copy.map((val) => {
    const [style, setStyle] = useState({
      fillOpacity: val.opacity ? val.opacity : 0.025,
      strokeOpacity: "0.1",
    });
    return (
      <path
        className="fill-dark stroke-dark dark:stroke-white hover:fill-rose-500  hover:stroke-rose-800  dark:fill-white transition-all dark:hover:fill-rose-700 dark:hover:stroke-rose-900"
        style={style}
        key={val.id}
        id={val.id}
        d={val.d}
        onMouseEnter={(e) => {
          onMouseEnter(e, val, setStyle);
        }}
        onMouseLeave={(e) => {
          onMouseLeave(e, val, setStyle);
        }}
      ></path>
    );
  });

  return (
    <div className="relative">
      <HeatmapTooltip
        label={tooltipData.label}
        value={tooltipData.value}
        xPos={tooltipData.xPos}
        yPos={tooltipData.yPos}
        enabled={tooltipData.enabled}
      />
      <svg
        className="mx-auto w-full scale-125 2xl:scale-100"
        height={height}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 800 600"
        xmlSpace="preserve"
      >
        <g id="Algeria">{[...WilayasSVG]}</g>
      </svg>
    </div>
  );
};

export default Heatmap;
