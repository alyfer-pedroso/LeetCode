function reverseBits(n: number): number {
  const mask1 = 0x55555555;
  const mask2 = 0x33333333;
  const mask3 = 0x0f0f0f0f;
  const mask4 = 0x00ff00ff;
  const mask5 = 0x0000ffff;

  n = ((n >>> 1) & mask1) | ((n & mask1) << 1);
  n = ((n >>> 2) & mask2) | ((n & mask2) << 2);
  n = ((n >>> 4) & mask3) | ((n & mask3) << 4);
  n = ((n >>> 8) & mask4) | ((n & mask4) << 8);
  n = ((n >>> 16)& mask5) | ((n & mask5) << 16);

  return n >>> 0;
};
