const parseArgs = () => {
  const args = Array.from(process.argv).slice(2);
  const argsPaired = args.reduce(
    (acc, val, i, arr) => (i % 2 === 0 ? [...acc, [val, arr[i + 1]]] : acc),
    []
  );
  const result = argsPaired
    .map(([key, value]) => `${key} is ${value}`)
    .join(', ');

  console.log(result);
};

parseArgs();
