// XOR encrypted with "notrust" or "830020"
const encryptedBlacklist = [
  { id: "0c1a131216", reason: "4f5d57445e" }, // Example: "Jones, Alicen" — "Fraud"
  { id: "06171e1b15", reason: "4a585a4441" }  // Example: "Smith, John" — "Theft"
  { id: "7950594a5756187a5d4a565954", reason: "5f50574b4c4b14185c514b5948485d594a4b141854574c4b18575e18484a5755514b5d14185657185c5d54514e5d4a4116187b595656574c184c4a4d4b4c18574a185c5d485d565c16" },
  { id: "031c4e1a0b1d1a", reason: "02070b0a" },
];

// Decoding function
function xorDecode(hex, key) {
  const keyCharCode = key.charCodeAt(0);
  let result = "";
  for (let i = 0; i < hex.length; i += 2) {
    const byte = parseInt(hex.substr(i, 2), 16);
    result += String.fromCharCode(byte ^ keyCharCode);
  }
  return result;
}

// Display function
function displayBlacklist(key) {
  const output = document.getElementById("terminalOutput");
  output.innerHTML = "";

  encryptedBlacklist.forEach(entry => {
    const name = xorDecode(entry.id, key);
    const reason = xorDecode(entry.reason, key);

    if (name && reason) {
      output.innerHTML += `<div><strong>${name}</strong> — ${reason}</div>`;
    }
  });
}

// Trigger on button click
function submitKey() {
  const key = document.getElementById("keyInput").value;
  displayBlacklist(key);
}
