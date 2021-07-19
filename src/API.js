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

export const getSingleRocketData = async (rocket) => {
  const res = await fetch(`${api}/rockets/${rocket}`);
  const data = await res.json();
  return await data;
};

export const getDragonsData = async () => {
  const res = await fetch(`${api}/dragons`);
  const data = await res.json();
  return await data;
};

export const getNextLaunchData = async () => {
  const res = await fetch(`${api}/launches/next`);
  const data = await res.json();
  return await data;
};

export const getLaunchpadData = async (launchpad) => {
  const res = await fetch(`${api}/launchpads/${launchpad}`);
  const data = await res.json();
  return await data;
};

export const getLatestLaunchData = async () => {
  const res = await fetch(`${api}/launches/latest`);
  const data = await res.json();
  return await data;
};

export const getRoadsterData = async () => {
  const res = await fetch(`${api}/roadster`);
  const data = await res.json();
  return await data;
};

export const getCrewData = async () => {
  const res = await fetch(`${api}/crew`);
  const data = await res.json();
  return await data;
};

export const getShipData = async (ship) => {
  const res = await fetch(`${api}/ships/${ship}`);
  const data = await res.json();
  return await data;
};
