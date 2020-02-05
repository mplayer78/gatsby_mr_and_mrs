const shuffleAndSelect = (num, list) => {
  let m = list.length,
    t,
    i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = list[m]
    list[m] = list[i]
    list[i] = t
  }
  // select the first xth no of questions to a new array & save to state
  let filteredList = list.filter((v, i) => i < num)
  // remember this doesn't fire until; the form is posted.
  return filteredList
}

export default shuffleAndSelect
