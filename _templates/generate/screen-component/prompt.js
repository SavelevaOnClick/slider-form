module.exports = [
  {
    type: "input",
    name: "name",
    message: "Enter component name..."
  },
  {
    type: "select",
    name: "folder",
    message: "Select screen folder...",
    choices: [
      //ADD MORE SCREENS
      "Onboarding",
      "SignIn",
      "Home"
    ]
  }
];
