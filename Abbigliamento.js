var vestiti = /** @class */ (function () {
    function vestiti(_id, _codProd, _collezione, _capo, _modello, _quantita, _colore, _prezzoIvaEsclusa, _prezzoIvaInclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codProd = _codProd;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
        this.prezzoIvaInclusa = _prezzoIvaInclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    vestiti.prototype.getSaldoCapo = function () {
        return this.prezzoIvaEsclusa * this.saldo / 100;
    };
    vestiti.prototype.getAcquistoCapo = function () {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    };
    return vestiti;
}());
var a = new vestiti(1, 2121, 'primavera', 'cardigan', 1231, 5, 'nero', 18.50, 22.57, 'negozio', 45);
var b = new vestiti(2, 4111, 'estte', 't-shirt', 1251, 6, 'rosso', 5.50, 6.71, 'magazzino', 30);
var c = new vestiti(3, 1181, 'inverno', 'felpa', 1229, 8, 'belge', 17.50, 21.35, 'negozio', 50);
var d = new vestiti(4, 1111, 'estate', 'maglione', 1221, 4, 'verde', 20, 24.40, 'negozio', 50);
var e = new vestiti(5, 6111, 'primavera', 'maglia', 1021, 5, 'blu', 11, 13.42, 'magazzino', 60);
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(a.getAcquistoCapo()));
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(b.getAcquistoCapo()));
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(c.getAcquistoCapo()));
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(d.getAcquistoCapo()));
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(e.getAcquistoCapo()));
var array = [];
function prendiAbb() {
    fetch('http//localhost:3000/capo').then(function (response) {
        return response.json();
    }).then(function (data) {
        array = data;
        console.log(array);
        data.map(function (element) {
            var capo = new vestiti(element.id, element.codProd, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoIvaEsclusa, element.prezzoIvaInclusa, element.disponobile, element.saldo);
            console.log(capo);
            console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(capo.getAcquistoCapo()));
        });
    });
}
prendiAbb();
