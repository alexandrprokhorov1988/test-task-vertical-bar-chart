const getRandomArray = (min, max, count)=> {
  return new Array(count).fill(0).map(() => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  })
};

const data = getRandomArray(0, 350, 20);
const dataBig = getRandomArray(0, 200, 100);

export {
  data,
  dataBig
}
