const api = "https://api.spacexdata.com/v4";

export const getCompanyInfoData = async () => {
  const res = await fetch(`${api}/company`);
  const data = await res.json();
  return await data;
};
