 function hitung() {
        const phi = 3.14
        let r = document.getElementById("jari").value
        //luas lingkaran
        let luasHasil = document.getElementById("luasHasil")
        let luas = phi * (r * r)
        luasHasil.innerText = "Luas Lingkaran : " + luas + " cm2"
        //keliling lingkaran
        let kelilingHasil = document.getElementById("kelilingHasil")
        let keliling = 2 * phi * r
        kelilingHasil.innerHTML = "Keliling Lingkaran : " + keliling + " cm"}