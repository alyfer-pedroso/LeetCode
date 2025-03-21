function fizzBuzz(n: number): string[] {
  const arr: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (!(i % 3) && !(i % 5)) {
        arr.push("FizzBuzz");
        continue;
    }

    if (!(i % 3)) {
        arr.push("Fizz");
        continue;
    }

    if (!(i % 5)) {
        arr.push("Buzz");
        continue;
    }

    arr.push(i.toString());
  }

  return arr
}
