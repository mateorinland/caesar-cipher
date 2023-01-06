function rot13(str) {
  return str.replace(/[A-Z]/g, char =>
  "NOPQRSTUVWXYZABCDEFGHIJKLM"["ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(char)])
  //In order to adapt this so that it also works with lowercase,
  //simply add an i to the RegEx and the same alphabetic sequence
  //in lower case right after each one in uppercase.
}
rot13("SERR PBQR PNZC");
