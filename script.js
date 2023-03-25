const hariEl = document.getElementById('hari');
const jamEl = document.getElementById('jam');
const menitEl = document.getElementById('menit');
const detikEl = document.getElementById('detik');

const lebaran = "22 april 2023";

function hitungHari(){
    const hariLebaran = new Date(lebaran);
    const hariPuasa = new Date()

    const jumlahWaktu = (hariLebaran - hariPuasa)/1000;
    
    const hari = Math.floor(jumlahWaktu /3600 / 24);
    const jam = Math.floor(jumlahWaktu / 3600) % 24;
    const menit = Math.floor(jumlahWaktu/60) % 60 ;
    const detik = Math.floor(jumlahWaktu) % 60;
    
    hariEl .innerHTML = hari;
    jamEl.innerHTML = formatWaktu(jam);
    menitEl.innerHTML = formatWaktu(menit)
    detikEl.innerHTML = formatWaktu(detik);

    if(jumlahWaktu < 0 ){
        clearInterval(hitungHari);
        document.getElementById('ucapanEl').innerHTML = "Selamat Hari Raya Idul Fitri 1444H"
    }
    
}

function formatWaktu(waktu){
    return  waktu < 10 ? `0${waktu}` : waktu ;
}

hitungHari();

setInterval(hitungHari, 1000);