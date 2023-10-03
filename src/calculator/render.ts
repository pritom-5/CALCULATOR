import calculator from "./index.ts";

type tButton = {
	type: "number" | "operator" | "clear-operator";
	value: string | number;
};
const buttons: tButton[] = [
	{ type: "number", value: 1 },
	{ type: "number", value: 2 },
	{ type: "number", value: 3 },
	{ type: "number", value: 4 },
	{ type: "number", value: 5 },
	{ type: "number", value: 6 },
	{ type: "number", value: 7 },
	{ type: "number", value: 8 },
	{ type: "number", value: 9 },
	{ type: "number", value: 0 },
	{ type: "number", value: "." },
	{ type: "operator", value: "+" },
	{ type: "operator", value: "-" },
	{ type: "operator", value: "x" },
	{ type: "operator", value: "/" },
	{ type: "operator", value: "%" },
	{ type: "operator", value: "=" },
	{ type: "clear-operator", value: "C" },
	{ type: "clear-operator", value: "CE" },
	{ type: "clear-operator", value: "Backspace" },
];

const calculator_body_selector = <HTMLDivElement>(
	document.querySelector("#calulator-body")
);

buttons.forEach(({ type, value }) => {
	const button_selector = <HTMLButtonElement>document.createElement("button");

	button_selector.addEventListener("click", () => {
		calculator.inputValue(value, type);

		document.querySelector("#previous")!.textContent =
			calculator.PREV_NUMBER;
		document.querySelector("#current")!.textContent =
			calculator.CURRENT_NUMBER;
		document.querySelector("#operator")!.textContent =
			calculator.CURRENT_OPERATOR;
	});

	button_selector.setAttribute("data-type", type);

	button_selector.textContent = String(value);

	calculator_body_selector?.appendChild(button_selector);
});
