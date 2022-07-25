// The below config is used to display character details in a card.
export const characterFields = [
  { key: "name", keyLabel: "Name" },
  { key: "species", keyLabel: "Species" },
  { key: "gender", keyLabel: "Gender" },
];

// The below config is used to display the chapters in which given chacter is acted through a table.
export const chapterInfoTableHeader = [
  { key: "name", label: "Chapter name" },
  { key: "episode", label: "Episode" },
];

// The below config is used to display location details in the modal card.
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
