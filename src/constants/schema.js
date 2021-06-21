export const typeSchema = [
  { label: "First Name", type: "Input", state: "firstName" },
  { label: "Last Name", type: "Input", state: "lastName" },
  { label: "Email *", type: "Input", state: "email" },
  {
    label: "Select Gender",
    type: "SelectList",
    state: "gender",
    options: ["Male", "Female", "Others"],
  },
  { label: "Welcome Mr", type: "TextDisplay", state: "firstName" },
];
