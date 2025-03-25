function isPalindrome(s: string): boolean {
  const filtered = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  const reversed = [...filtered].reverse();
  return filtered.every((char, i) => char === reversed[i]);
}