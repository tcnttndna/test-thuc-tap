function tinhgiatri(){
    for (var i = 0; i < company.length; i++) {
        company[i].price = getRndfloat(0.01,99.99);
        company[i].pricechange = getRndsothuc(-0.05,0.05);
        company[i].khoiluongchange = Math.floor(Math.random() * 21 ) + 10;
        company[i].giatri = company[i].price * (1 + company[i].pricechange) * (company[i].khoiLuong + company[i].khoiluongchange);        
    }
}

function sort(){
    company.sort(function(a, b){return a.giatri - b.giatri}); 
}
function reverse(){
    company.sort(function(a, b){return b.giatri - a.giatri});    
}
tinhgiatri();
reverse();

