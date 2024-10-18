import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const INPUT = await this.userInput();
      const USER = this.userSeparator(INPUT);
      const NUMBERS = this.parseNumbers(USER);
      this.userOutput(NUMBERS);
    } catch (error) {}
  }

  async userInput() {
    const inputWords = Console.readLineAsync(
      "������ ���ڿ��� �Է��� �ּ���.\n"
    );
    return inputWords;
  }

  userSeparator(INPUT) {
    if (INPUT.startsWith("//")) {
      const indexCustom = INPUT.indexOf("\\n");
      const customDelimiter = INPUT.substring(2, indexCustom);
      INPUT = INPUT.substring(indexCustom + 2);
      console.log(INPUT);
      return INPUT.split(customDelimiter);
    } else if (INPUT.includes(",") || INPUT.includes(";")) {
      return INPUT.split(/[,;]/);
    }
    return INPUT;
  }

  parseNumbers(INPUT) {
    return INPUT.map(Number);
  }

  userOutput(NUMBERS) {
    const sum = NUMBERS.reduce((acc, curr) => acc + curr, 0);
    Console.print(`���: ${sum}`);
  }
}

export default App;
