const parseEnv = () => {
  const prefix = 'RSS_';
  const rssVars = Object.entries(process.env).filter(([key]) =>
    key.startsWith(prefix)
  );

  if (!rssVars.length) {
    console.log(`No env variables starts with ${prefix}`);
  }

  const result = rssVars.map(([key, value]) => `${key}=${value}`).join('; ');

  console.log(result);
};

parseEnv();
