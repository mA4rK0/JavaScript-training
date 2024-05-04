function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

// tambah(1, 2, 3, 4, 5); == arguments = [1,2,3,4,5];
let coba = tambah(1, 2, 3, 4, 5);
console.log(coba);
