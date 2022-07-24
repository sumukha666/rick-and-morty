export const characterFields = [
  { key: "name", keyLabel: "Name" },
  { key: "species", keyLabel: "Species" },
  { key: "gender", keyLabel: "Gender" },
];

export const chapterInfoTableHeader = [
  { key: "name", label: "Chapter name" },
  { key: "episode", label: "Episode" },
];

export const locationInfo = [
  { key: "name", keyLabel: "Name" },
  { key: "dimension", keyLabel: "Dimension" },
  { key: "type", keyLabel: "Type" },
  {
    key: "residents",
    keyLabel: "No. of Residents",
    format: (residentsList) => residentsList.length,
  },
];
