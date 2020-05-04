const colorNames = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'];
const colorVarients = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

const colorBook = document.createElement('div');
colorBook.classList.add('color-book');

for (let name of colorNames) {
	const colorPalette = document.createElement('div');
	colorPalette.classList.add('color-palette');
	colorVarients.forEach((varient, i) => {
		const colorSwatch = document.createElement('div');
		colorSwatch.classList.add('color-swatch');
		colorSwatch.classList.add(`${name}-${varient}`);
		const colorName = document.createElement('span');
		colorName.classList.add('color-name');
		colorName.append(document.createTextNode(`${name}-${varient}`));
		colorSwatch.append(colorName);
		/* const colorValue = document.createElement('span');
		colorValue.classList.add('color-value');
		colorValue.append(document.createTextNode(getComputedStyle(colorSwatch).getPropertyValue("--color")));
		colorSwatch.append(colorValue); */
		colorPalette.append(colorSwatch);
	});
	colorBook.append(colorPalette);
}

document.body.append(colorBook);
