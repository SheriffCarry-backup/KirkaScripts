async function start_cards() {
  let response = await fetch(
    "https://raw.githubusercontent.com/SheriffCarry-backup/KirkaScripts/main/ConsoleScripts/Open%20All%20Cards.js"
  );
  let text = await response.text();
  eval(text);
}
start_cards()
