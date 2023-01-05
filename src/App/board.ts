import { GameConfig } from "../utils/interfaces/gameConfig";
import { getSetOfPseudoHash, getRandom } from "../utils/utils";

class GameBoard {
	public gameboard: HTMLDivElement;

	constructor(gameboard: HTMLDivElement) {
		this.gameboard = gameboard;
	}

	public draw = (opt: GameConfig): void => {
		const { columns, rows, width, height, colors } = opt;

		this.gameboard.innerHTML = "";
		this.gameboard.style.gridTemplateColumns = `repeat(${columns}, ${width}px)`;
		this.gameboard.style.gridTemplateRows = `repeat(${rows}, ${height}px)`;

		let elements = this.createElements(columns, rows, colors);

		for (let el of elements) {
			this.gameboard.append(el);
		}
	};

	public clear = (): string => (this.gameboard.innerHTML = "");

	private createElements = (
		columns: number,
		rows: number,
		colors: string[]
	): HTMLDivElement[] => {
		const divElements = new Array<HTMLDivElement>();
		let qty = columns * rows;

		let IDs = getSetOfPseudoHash(10, qty).values();

		for (let i = 0; i < qty; i++) {
			let div = document.createElement("div");
			let color = getRandom(colors);

			div.id = IDs.next().value;
			div.style.backgroundColor = `#${color}`;
			div.draggable = true;
			div.style.cursor = "pointer";

			divElements.push(div);
		}

		return divElements;
	};
}

export default GameBoard;
