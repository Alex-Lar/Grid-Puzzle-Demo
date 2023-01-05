class DragAndDrop {
	public gameboard: HTMLDivElement;

	constructor(gameboard: HTMLDivElement) {
		this.gameboard = gameboard;
	}

	private onDragStart(this: HTMLDivElement, e: DragEvent) {
		e.dataTransfer!.effectAllowed = "move";
		e.dataTransfer!.setData("dragTargetId", this.id);
	}

	private onDragOver(e: DragEvent) {
		e.dataTransfer!.dropEffect = "move";
		e.preventDefault();
	}

	private onDrop(this: HTMLDivElement, e: DragEvent) {
		e.stopPropagation();

		let dragTargetId = e.dataTransfer!.getData("dragTargetId");

		let dropTarget = document.getElementById(this.id) as HTMLDivElement;
		let dragTarget = document.getElementById(
			dragTargetId
		) as HTMLDivElement;

		if (dragTarget !== dropTarget) {
			const dropTargetSib =
				dropTarget.nextSibling === dragTarget
					? dropTarget
					: dropTarget.nextSibling;

			dragTarget.parentNode?.insertBefore(dropTarget, dragTarget);
			dropTarget.parentNode?.insertBefore(dragTarget, dropTargetSib);
		}

		e.preventDefault();
	}

	public handleEvents = () => {
		const divElements = this.gameboard.getElementsByTagName(
			"div"
		) as HTMLCollectionOf<HTMLDivElement>;
		[...divElements].forEach((item) => {
			item.addEventListener("dragstart", this.onDragStart, false);
			item.addEventListener("dragover", this.onDragOver, false);
			item.addEventListener("drop", this.onDrop, false);
		});
	};
}

export default DragAndDrop;
