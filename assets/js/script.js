function moveToNext(current, nextId) {
  if (current.value.length === current.maxLength) {
    const next = document.getElementById(nextId);
    if (next) {
      next.focus();
    }
  }
}
