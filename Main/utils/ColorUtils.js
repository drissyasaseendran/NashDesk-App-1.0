import BBIcon from "../imgs/chat/basketball.svg";
import BearIcon from "../imgs/chat/bear.svg";
import CabbageIcon from "../imgs/chat/cabbage.svg";
import DolphIcon from "../imgs/chat/dolphin.svg";
import DuckIcon from "../imgs/chat/duck.svg";
import FairyIcon from "../imgs/chat/fairy.svg";
import FishIcon from "../imgs/chat/fish.svg";
import FlowerIcon from "../imgs/chat/flower.svg";
import HenIcon from "../imgs/chat/hen.svg";
import KingIcon from "../imgs/chat/king.svg";
import PumpkinIcon from "../imgs/chat/pumpkin.svg";
import RabbitIcon from "../imgs/chat/rabbit.svg";
import ShipIcon from "../imgs/chat/ship.svg";
import TomatoIcon from "../imgs/chat/tomato.svg";
import TortoiseIcon from "../imgs/chat/tortoise.svg";
import TruckIcon from "../imgs/chat/truck.svg";
import md5 from "md5";

const iconMap = {
  0: BBIcon,
  1: BearIcon,
  2: CabbageIcon,
  3: DolphIcon,
  4: DuckIcon,
  5: FairyIcon,
  6: FishIcon,
  7: FlowerIcon,
  8: HenIcon,
  9: KingIcon,
  a: PumpkinIcon,
  b: RabbitIcon,
  c: ShipIcon,
  d: TomatoIcon,
  e: TortoiseIcon,
  f: TruckIcon,
};

const softColors = [
  "#F7F6CF",
  "#B6D8F2",
  "#F4CFDF",
  "#5784BA",
  "#9AC8EB",
  "#CCD4BF",
  "#E7CBA9",
  "#EEBAB2",
  "#F5F3E7",
  "#F5E2E4",
  "#F5BFD2",
  "#E5DB9C",
  "#D0BCAC",
  "#BEB4C5",
  "#E6A57E",
  "#218B82",
  "#9AD9DB",
  "#E5DBD9",
  "#98D4BB",
  "#EB96AA",
  "#C6C9D0",
  "#C54B6C",
  "#E5B3BB",
  "#C47482",
  "#D5E4C3",
  "#F27348",
  "#E7CBA9",
  "#EEBAB2",
  "#F5F3E7",
  "#F5E2E4",
  "#F5BFD2",
  "#E5DB9C",
  "#D0BCAC",
  "#BEB4C5",
  "#E6A57E",
  "#218B82",
];

const overLayFlag = [
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
];

export const colorList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  .split("")
  .map((alph, idx) => ({
    alpha: alph,
    bgcolor: softColors[idx],
    fgcolor: overLayFlag[idx],
  }));

export const colorMap = Object.assign(
  {},
  ...colorList.map((x) => ({
    [x.alpha]: {
      bgcolor: x.bgcolor,
      fgcolor: x.fgcolor === 0 ? "#424242" : "white",
    },
  }))
);

export const colorPickFromName = (name) => {
  return colorMap[name[0].toUpperCase()]
    ? colorMap[name[0].toUpperCase()]
    : colorMap["A"];
};

export const imgPickFromName = (name) => {
  const hashCode = md5(name);
  return iconMap[hashCode[0].toLowerCase()];
};

export const getColorFromPriority = (priority) => {
  switch (priority.toUpperCase()) {
    case "LOW":
      return "#99cccc";
    case "HIGH":
      return "#fd5e53";
    case "MEDIUM":
      return "#77dd77";
    default:
      return "gray";
  }
};
