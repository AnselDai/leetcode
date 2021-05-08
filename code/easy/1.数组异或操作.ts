export const solution = (n: number, start: number) => {
  return new Array(n).fill(start).map((item: number, index: number) => {
    return item + index * 2;
  }).reduce((pre: number, cur: number) => pre ^ cur);
}
