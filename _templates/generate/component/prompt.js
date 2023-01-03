module.exports = [
  {
    type: "input",
    name: "name",
    message: "Enter component name..."
  },
  {
    type: "select",
    name: "folder",
    message: "Select component folder...",
    choices: [
      "behavior",
      "buttons",
      "control",
      "dataview",
      "inputs",
      "layout",
      "modal",
      "navigation",
      "typography"
    ]
  }
];
