const lines = ["5", "At Hoo AT F Foo"];

function checkTitle(data) {
  const N = parseInt(lines[0]);
  const titleString = data.slice(1);
  const title = titleString[0].split(" ");
  const prepositions = ["at", "by", "for", "from", "in", "of", "on", "to"];

  console.log(title);

  // 先頭の単語の頭文字が大文字かどうかをチェック
  if (!/^[A-Z][a-z]*$/.test(title[0])) {
    return false;
  }

  // 先頭の単語が前置詞かどうかをチェック
  if (prepositions.includes(title[0].toLowerCase())) {
    if (!/^[A-Z][a-z]+$/.test(title[0])) {
      return false;
    } else {
      if (!/^[A-Z][a-z]+$/.test(title[0])) {
        return false;
      }
    }
  }

  // 2番目以降の単語をチェック
  for (let i = 1; i < title.length; i++) {
    // 前置詞が出現する場合は、頭文字以外が小文字かどうかをチェック
    if (prepositions.includes(title[i].toLowerCase())) {
      if (!/^[a-z]+$/.test(title[i])) {
        return false;
      }
    } else {
      // 前置詞以外の単語は、頭文字が大文字かどうかをチェック
      if (!/^[A-Z][a-z]*$/.test(title[i])) {
        return false;
      }
    }
  }

  return true;
}

checkTitle(lines) ? console.log("Yes") : console.log("No");

/* ***** ***** ***** ***** ***** ***** ***** ***** 

const lines = ["King" "Lear"];
const preposition = ["at", "by", "for", "from", "in", "of", "on", "to"];

lines[0]がprepositionのいずれかに一致するか判定 JavaScript

if(preposition.includes(lines[0])) {
  console.log("lines[0] は preposition のいずれかです。");
} else {
  console.log("lines[0] は preposition のいずれにも一致しませんでした。");
}

***** ***** ***** ***** ***** ***** ***** ***** */
