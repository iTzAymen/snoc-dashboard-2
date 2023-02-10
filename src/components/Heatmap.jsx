import React, { useState, useRef, useEffect } from "react";
import { data } from "../assets/wilayas.json";
import { WilayasSVG_Data } from "./WilayasSVG";

const wilayas = data.map((val) => val.name.toUpperCase());

const getWilayaId = (wilaya_name) => {
  let id = wilayas.indexOf(wilaya_name) + 1;
  if (id <= 0) {
    id = 1;
  }
  return id;
};

const getWilayaSVG = (wilaya_id) => {
  const svg_props = WilayasSVG_Data.find(
    (svg_data) => svg_data.id == wilaya_id
  );
  if (!svg_props) {
    console.log(`no svg found for ${id}`);
  }
  return svg_props;
};

const Heatmap = ({ overviewData }) => {
  if (!overviewData) {
    return <div>no data</div>;
  }
  const { city_count } = overviewData;

  let WilayasSVG_Data_copy = [...WilayasSVG_Data];

  city_count.forEach((val) => {
    const wilaya_id = getWilayaId(val._id);
    let wilaya_svg_props = getWilayaSVG(wilaya_id);

    const opacity = Math.max(val.count / 3000, 0.1) * 100;
    wilaya_svg_props.className =
      "fill-zinc-500 transition-all stroke-zinc-100 ";
    if (opacity > 90) {
      wilaya_svg_props.className += "opacity-100 hover:opacity-100";
    } else if (opacity > 80) {
      wilaya_svg_props.className += "opacity-90 hover:opacity-100";
    } else if (opacity > 70) {
      wilaya_svg_props.className += "opacity-80 hover:opacity-100";
    } else if (opacity > 60) {
      wilaya_svg_props.className += "opacity-70 hover:opacity-100";
    } else if (opacity > 50) {
      wilaya_svg_props.className += "opacity-60 hover:opacity-100";
    } else if (opacity > 40) {
      wilaya_svg_props.className += "opacity-50 hover:opacity-100";
    } else if (opacity > 30) {
      wilaya_svg_props.className += "opacity-40 hover:opacity-100";
    } else if (opacity > 20) {
      wilaya_svg_props.className += "opacity-30 hover:opacity-100";
    } else if (opacity > 10) {
      wilaya_svg_props.className += "opacity-20 hover:opacity-100";
    } else {
      wilaya_svg_props.className += "opacity-10 hover:opacity-100";
    }

    const data_index = WilayasSVG_Data_copy.findIndex(
      (item) => item.id == wilaya_id
    );
    WilayasSVG_Data_copy[data_index] = wilaya_svg_props;
  });

  const WilayasSVG = WilayasSVG_Data_copy.map((val) => {
    return (
      <path
        className={
          val.className
            ? val.className
            : "fill-zinc-500 opacity-5 transition-all stroke-zinc-100 hover:opacity-100"
        }
        style={val.style ? val.style : {}}
        key={val.id}
        id={val.id}
        d={val.d}
      ></path>
    );
  });

  return (
    <div>
      <svg
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
