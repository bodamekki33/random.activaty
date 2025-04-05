let activity = [
  "Go for a run",
  "Read a book",
  "Watch a documentary",
  "Cook a new recipe",
  "Try a new hobby",
  "Visit a museum",
  "Learn a new skill",
];
function addActivity() {
  const addButton = document.getElementById("RandomActivity").value.trim();
  if (addButton != "") activity.push(addButton);
  document.getElementById("RandomActivity").value = "";
}
function selectActivity() {
  const RandomActivity = Math.floor(Math.random() * activity.length);
  const selectActivity = activity[RandomActivity];
  document.getElementById("result").innerHTML = selectActivity;
}
