// import Game from "./game.mjs";
import GameBoard from "./board";
import { options, ID } from "../utils/config";
import DragAndDrop from "./dragAndDrop";

const boardDiv = document.getElementById(ID.board) as HTMLDivElement;

new GameBoard(boardDiv).draw(options);
const dnd = new DragAndDrop(boardDiv);

dnd.handleEvents();
