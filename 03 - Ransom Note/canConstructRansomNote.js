/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length === 0 && magazine.length >= 0) {
    return true;
  }
  let ransomNoteMap = {},
    magazineMap = {},
    bool = false,
    count = 0;
  [...ransomNote].forEach((ransom) => {
    if (Object.keys(ransomNoteMap).includes(ransom)) {
      ransomNoteMap[ransom] += 1;
    } else {
      ransomNoteMap[ransom] = 1;
    }
  });

  [...magazine].forEach((mag) => {
    if (Object.keys(magazineMap).includes(mag)) {
      magazineMap[mag] += 1;
    } else {
      magazineMap[mag] = 1;
    }
  });

  [...ransomNote].forEach((ransom) => {
    if (
      magazine.includes(ransom) &&
      magazineMap[ransom] >= ransomNoteMap[ransom]
    ) {
      count++;
    }
  });
  console.log(count);
  if (count === ransomNote.length) {
    bool = true;
  }
  console.log(bool);
  return bool;
};
