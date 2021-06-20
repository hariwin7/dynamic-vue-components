export const typeSchema = [
  { label: "Dog Name", type: "Input", state: "dogName" },
  {
    label: "Select Dog Type",
    type: "SelectList",
    state: "dogType",
    options: ["cute", "aggressive", "skinny"],
  },
  { label: "This is your dog", type: "TextDisplay", state: "dogName" },
  { label: "And he is", type: "TextDisplay", state: "dogType" },
];
