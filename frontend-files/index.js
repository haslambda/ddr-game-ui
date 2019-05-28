fetch('/datafile').then((res) => {
  if (res.ok) {
    res.json().then((data) => {
      console.log(data);
    })
  } else {
    console.log(`error: ${res.status}`)
  }
}, (e) => {
  console.log(`fetch failed: ${e}`)
});
