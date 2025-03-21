function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, idx) => {
    const num = idx + 1;
    if (!(num % 3) && !(num % 5)) return "FizzBuzz";
    if (!(num % 3)) return "Fizz";
    if (!(num % 5)) return "Buzz";
    return num.toString();
  });
}