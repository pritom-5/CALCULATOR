class Calculator {
	CURRENT_NUMBER: string;
	PREV_NUMBER: string;
	CURRENT_OPERATOR: string;
	OPERATORS: string[];

	constructor() {
		this.CURRENT_NUMBER = "";
		this.PREV_NUMBER = "";
		this.CURRENT_OPERATOR = "";
		this.OPERATORS = ["+", "-", "x", "/", "=", "%"];
	}

	inputValue(
		input: string | number,
		type: "number" | "operator" | "clear-operator"
	) {
		const input_str = String(input);

		if (type === "operator") {
			const is_operator_perssed_before_any_value =
				this.CURRENT_NUMBER === "" && this.PREV_NUMBER === "";
			const is_operator_pressed_before_current =
				this.CURRENT_NUMBER === "";

			if (is_operator_perssed_before_any_value) {
				return;
			}

			if (is_operator_pressed_before_current) {
				this.CURRENT_OPERATOR = input_str;
				return;
			}

			const is_asking_result_without_prev_value =
				this.PREV_NUMBER === "" && input_str !== "=";
			if (is_asking_result_without_prev_value) {
				this.PREV_NUMBER = this.CURRENT_NUMBER;
				this.CURRENT_NUMBER = "";
				this.CURRENT_OPERATOR = input_str;
			} else {
				if (input_str === "=") {
					this.chooseOperation(this.CURRENT_OPERATOR);
				} else {
					this.CURRENT_OPERATOR = input_str;
					this.chooseOperation(this.CURRENT_OPERATOR);
				}
			}
		} else if (type === "number") {
			const CURRENT_NUMBER_has_dot = this.CURRENT_NUMBER.includes(".");
			if (input === "." && CURRENT_NUMBER_has_dot) {
				return;
			}

			this.CURRENT_NUMBER += input_str;
		} else if (type === "clear-operator") {
			this.chooseOperation(input_str);
		}
	}

	chooseOperation(operator: string) {
		switch (operator) {
			case "+":
				this.plus();
				break;
			case "-":
				this.minus();
				break;
			case "x":
				this.multiply();
				break;
			case "/":
				this.divide();
				break;
			case "%":
				this.percentage();
				break;

			case "CE":
				this.clearEverything();
				break;

			case "C":
				this.clearCurrent();
				break;
			case "Backspace":
				this.clearLastDigit();
				break;
		}
	}

	percentage() {
		const result =
			(parseFloat(this.PREV_NUMBER) * parseFloat(this.CURRENT_NUMBER)) /
			100;
		this.PREV_NUMBER = String(result);
		this.CURRENT_NUMBER = "";
	}

	plus() {
		const result =
			parseFloat(this.CURRENT_NUMBER) + parseFloat(this.PREV_NUMBER);
		this.PREV_NUMBER = String(result);
		this.CURRENT_NUMBER = "";
	}

	minus() {
		const result =
			parseFloat(this.PREV_NUMBER) - parseFloat(this.CURRENT_NUMBER);
		this.PREV_NUMBER = String(result);
		this.CURRENT_NUMBER = "";
	}
	multiply() {
		const result =
			parseFloat(this.PREV_NUMBER) * parseFloat(this.CURRENT_NUMBER);
		this.PREV_NUMBER = String(result);
		this.CURRENT_NUMBER = "";
	}
	divide() {
		const result =
			parseFloat(this.PREV_NUMBER) / parseFloat(this.CURRENT_NUMBER);
		this.PREV_NUMBER = String(result);
		this.CURRENT_NUMBER = "";
	}

	clearCurrent() {
		this.CURRENT_NUMBER = "";
	}
	clearEverything() {
		this.PREV_NUMBER = "";
		this.CURRENT_NUMBER = "";
		this.CURRENT_OPERATOR = "";
	}
	clearLastDigit() {
		const updated_current_number = this.CURRENT_NUMBER.slice(
			0,
			this.CURRENT_NUMBER.length - 1
		);
		this.CURRENT_NUMBER = updated_current_number;
	}
}

const calculator = new Calculator();
export default calculator;
