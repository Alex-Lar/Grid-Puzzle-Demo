import { chars, numbers } from "./config";

export const getRandom = (array: string[] | number[]) => {
	let randInt = Math.floor(Math.random() * array.length);
	return array[randInt];
};

export const getSetOfPseudoHash = (
	length: number,
	qty: number
): Set<string> => {
	let set = new Set<string>();
	let hash: string[] = [];

	for (let i = 0; i < qty; i++) {
		for (let j = 0; j < length; j++) {
			let randInt = Math.floor(Math.random() * 2) + 1;

			if (randInt % 2 === 0) {
				hash.push(`${getRandom(chars)}`);
			} else {
				hash.push(`${getRandom(numbers)}`);
			}
		}

		set.add(hash.join(""));
		hash = [];
	}

	if (set.size < qty) return getSetOfPseudoHash(length, qty);

	return set;
};
