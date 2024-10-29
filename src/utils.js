import shortUUID from "short-uuid";

export function titleCase(str) {
  return str
    .trim()
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export function randomID() {
  console.log(shortUUID.generate());
  
  return shortUUID.generate();
}