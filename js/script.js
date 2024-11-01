const displayCharacter = document.getElementById("character-display");
document
  .getElementById("input-plaintext")
  .addEventListener("input", encryptText);
document
  .getElementById("input-ciphertext")
  .addEventListener("input", decryptText);

function encryptText() {
  const plaintext = document
    .getElementById("input-plaintext")
    .value.toLowerCase();
  const shift = parseInt(document.getElementById("input-shift").value) || 0;
  let ciphertext = "";
  let totalCharcter = 0;

  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i];
    if (char >= "a" && char <= "z") {
      let shiftedCharCode = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
      ciphertext += String.fromCharCode(shiftedCharCode);
      totalCharcter += 1;
    } else {
      ciphertext += char;
    }
  }
  displayCharacter.textContent = totalCharcter;
  document.getElementById("input-ciphertext").value = ciphertext;
}

function decryptText() {
  const ciphertext = document
    .getElementById("input-ciphertext")
    .value.toLowerCase();
  const shift = parseInt(document.getElementById("input-shift").value) || 0;
  let plaintext = "";

  for (let i = 0; i < ciphertext.length; i++) {
    let char = ciphertext[i];
    if (char >= "a" && char <= "z") {
      let shiftedCharCode = ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97;
      plaintext += String.fromCharCode(shiftedCharCode);
    } else {
      plaintext += char;
    }
  }

  document.getElementById("input-plaintext").value = plaintext;
}

// OPEN MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("btnModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
