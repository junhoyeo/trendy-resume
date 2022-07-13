export default function getRandomSelect<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}
