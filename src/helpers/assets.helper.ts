export const imgHelper = (filename: string) => {
  console.log(process.env.REACT_APP_ASSETS_URL + filename);
  return process.env.REACT_APP_ASSETS_URL + filename;
};
