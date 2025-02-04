async function start_chests() {
  let response = await fetch(
    "https://raw.githubusercontent.com/SheriffCarry-backup/KirkaScripts/main/ConsoleScripts/Open%20All%20Chests.js"
  );
  let text = await response.text();
  eval(text);
}
start_chests()
