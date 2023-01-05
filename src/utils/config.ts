import { GameConfig } from "./interfaces/gameConfig";
import { IDNames } from "./interfaces/idNames";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const chars = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

export const colorsHEX = [
	"FF595E",
	"FF924C",
	"FFCA3A",
	"C5CA30",
	"8AC926",
	"36949D",
	"1982C4",
	"4267AC",
	"565AA0",
	"6A4C93",
];

export const options = {
	columns: 5,
	rows: 5,
	width: 120,
	height: 100,
	colors: colorsHEX,
} as GameConfig;

export const ID = {
	board: "board",
	button: "start_btn",
} as IDNames;
