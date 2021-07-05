const api = "https://api.spacexdata.com/v4";

export const getCompanyInfoData = async () => {
  const res = await fetch(`${api}/company`);
  const data = await res.json();
  return await data;
};

export const getRocketData = async () => {
  const res = await fetch(`${api}/rockets`);
  const data = await res.json();
  return await data;
};

export const getDragonsData = async () => {
  const res = await fetch(`${api}/dragons`);
  const data = await res.json();
  return await data;
};
