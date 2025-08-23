export class Helpers {
  static firstLetterUpperCase(str: string): string {
    const valueString = str.toUpperCase();

    return valueString
      .split(" ")
      .map(
        (value: string) =>
          `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
      )
      .join(" ");
  }

  static ToLowerCase(str: string): string {
    return str.toLowerCase();
  }

  static generateRandomInteger(integerLength: number): number {
    const characters: string = "0123456789";

    let result: string = " ";
    const charactersLength: number = characters.length;

    for (let i: number = 0; i < integerLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return parseInt(result, 10);
  }
}
