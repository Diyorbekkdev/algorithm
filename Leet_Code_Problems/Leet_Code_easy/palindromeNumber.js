function isPalindrome(x) {
  if (x < 0) return false;

  let reversed = 0;
  let original = x;

  while (original > 0) {
    let digit = original % 10;
    reversed = reversed * 10 + digit;
    original = Math.floor(original / 10);
  }

  return x === reversed;
}

//Telegram: t.me/Diyorbekk_dev