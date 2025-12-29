const TOKEN = "usr-Eqtt4qLE0wpQvuzFnu9H-LL7XMqDoxt1P8-62iUwomU";
const BASE = "https://trefle.io/api/v1";

export async function fetchPlants(q, page, family, edible) {
  let url = `${BASE}/plants/search?token=${TOKEN}&q=${q}&page=${page}`;
  if (family) url += `&filter[family]=${family}`;
  if (edible) url += `&filter[edible]=true`;

  const res = await fetch(url);
  const json = await res.json();
  return json.data;
}

export async function fetchPlant(id) {
  const res = await fetch(`${BASE}/plants/${id}?token=${TOKEN}`);
  const json = await res.json();
  return json.data;
}

export async function fetchFamilies() {
  const res = await fetch(`${BASE}/families?token=${TOKEN}`);
  const json = await res.json();
  return json.data;
}