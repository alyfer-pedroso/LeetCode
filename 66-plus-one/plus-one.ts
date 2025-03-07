function plusOne(digits: number[]): number[] {
  let bigDigit = BigInt(0);
  for (let i = 0; i < digits.length; i++) {
    bigDigit = BigInt(bigDigit * BigInt(10) + BigInt(digits[i] % 10));
  }
  bigDigit++;

  let final_digits: number[] = [];
  while (bigDigit > BigInt(0)) {
    final_digits.unshift(Number(bigDigit % BigInt(10)));
    bigDigit = bigDigit / BigInt(10)
  }

  return final_digits;
}
