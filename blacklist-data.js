// XOR encrypted with "notrust" or "830020"
const encryptedBlacklist = [
  { id: "0c1a131216", reason: "4f5d57445e" }, // Example: "Jones, Alicen" — "Fraud"
  { id: "06171e1b15", reason: "4a585a4441" }  // Example: "Smith, John" — "Theft"
  { id: "031c4e1a0b1d1a", reason: "02070b0a" },
  { id: "6c5d4b4c", reason: "5a595c18565d4f4b" },
  { id: "231c4e3a0b1d1a", reason: "22070b0a" },
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
