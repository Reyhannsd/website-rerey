function hitungAritmatika() {
    const a = parseFloat(document.getElementById('aAritmatika').value);
    const d = parseFloat(document.getElementById('dAritmatika').value);
    const n = parseInt(document.getElementById('nAritmatika').value);
    let hasil = [];

    for (let i = 0; i < n; i++) {
        hasil.push(a + i * d);
    }

    document.getElementById('hasilAritmatika').innerText = `Suku-Suku Deret Aritmatika: ${hasil.join(', ')}`;
}

function hitungGeometri() {
    const a = parseFloat(document.getElementById('aGeometri').value);
    const r = parseFloat(document.getElementById('rGeometri').value);
    const n = parseInt(document.getElementById('nGeometri').value);
    let hasil = [];

    for (let i = 0; i < n; i++) {
        hasil.push(a * Math.pow(r, i));
    }

    document.getElementById('hasilGeometri').innerText = `Suku-suku deret geometri: ${hasil.join(', ')}`;
}