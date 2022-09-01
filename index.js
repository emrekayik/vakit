'use strict';
const tarih = new Date();

const vakit = {
    bugun: () => {
        switch (tarih.getDay()) {
            case 1:
                return "Pazartesi"
                break;
            case 2:
                return "Salı"
                break;
            case 3:
                return "Çarşamba"
                break;
            case 4:
                return "Perşembe"
                break;
            case 5:
                return "Cuma"
                break;
            case 6:
                return "Cumartesi"
                break;
            case 7:
                return "Pazar"
                break;
            default:
                console.log(`${Error("Böyle bir gün olamaz "+tarih.getDay())}`);
        }
    },
    bugunR: () => tarih.getDay(),
    ayinKaci: () => tarih.getDate(),
    buay: () => {
        switch (tarih.getMonth()) {
            case 1:
                return "Ocak"
                break;
            case 2:
                return "Şubat"
                break;
            case 3:
                return "Mart"
                break;
            case 4:
                return "Nisan"
                break;
            case 5:
                return "Mayıs"
                break;
            case 6:
                return "Haziran"
                break;
            case 7:
                return "Temmuz"
                break;
            case 8:
                return "Ağustos"
                break;
            case 9:
                return "Eylül"
                break;
            case 10:
                return "Ekim"
                break;
            case 11:
                return "Kasım"
                break;
            case 12:
                return "Aralık"
                break;
            default:
                console.log(`${Error("Böyle bir ay olamaz "+tarih.getMonth())}`);
        }
    },
    buyil: ()=> tarih.getFullYear()
}



//console.log(new Intl.DateTimeFormat("tr-TR").format(tarih));
console.log(vakit.bugun());
console.log(vakit.bugunR())
console.log(vakit.ayinKaci())
console.log(vakit.buay())
console.log(vakit.buyil())

module.exports = {
    vakit
};