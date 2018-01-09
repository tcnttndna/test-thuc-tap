function getRndfloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function getRndInteger(min, max) {
    return Math.random() * (max - min) + max;
}

function getRndsothuc(min, max) {
    return (Math.random() * (max - min) - max).toFixed(2);
}

var company =[
     {
        "code":"CBA/AX",
        "company":"COMMONWEALTH BANK",
        "price": 0,
        "khoiLuong": 14000,
        "pricechange" : 0,
        "khoiluongchange" : 0,
        "giatri": 99999
    },
    {
        "code":"CBB/BA",
        "company":"CBB BANK",
        "price": 0,
        "khoiLuong": 16000,
        "pricechange" : 0,
        "khoiluongchange" : 0,
        "giatri": 9999
    },
    {
        "code":"CBK/AC",
        "company":"COMMOTH",
        "price": 0,
        "khoiLuong": 17000,
        "pricechange" : 0,
        "khoiluongchange" : 0,
        "giatri": 9999
    },
    {
        "code":"COA/KX",
        "company":"TH BANK",
        "price": 0,
        "khoiLuong": 10000,
        "pricechange" : 0,
        "khoiluongchange" : 0,
        "giatri": 9999
    },
    {
        "code":"CBN/LX",
        "company":"MONWEAL",
        "price": 0,
        "khoiLuong": 19000,
        "pricechange" : 0,
        "khoiluongchange" : 0,
        "giatri": 9999
    },
    {
        "code":"CBKM/AX",
        "company":"KJHV BANK",
        "price": 0,
        "khoiLuong": 22000,
        "pricechange" : 0,
        "khoiluongchange" : 0,
        "giatri": 9999
    },
    {
        "code":"CJC/MK",
        "company":"CJC",
        "price": 0,
        "khoiLuong": 30000,
        "pricechange" : 0,
        "khoiluongchange" : 0,
        "giatri": 9999
    },
    {
        "code":"NNN/OHK",
        "company":"NNN LIMITED",
        "price": 0,
        "khoiLuong": 10089,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBAH/AMX",
        "company":"COMBAT HIT",
        "price": 0,
        "khoiLuong": 10999,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"DOB/AN",
        "company":"DOG BANK",
        "price": 0,
        "khoiLuong": 16700,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CTB/BIA",
        "company":"CAMTAIN BIA",
        "price": 0,
        "khoiLuong": 102300,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"COO/AX",
        "company":"COCOMI",
        "price": 0,
        "khoiLuong": 10050,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CHUE/AASX",
        "company":"COALTH BANK",
        "price": 0,
        "khoiLuong": 10000,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"NC/AXL",
        "company":"OZAKAGA",
        "price": 0,
        "khoiLuong": 100089,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBADS/AXAF",
        "company":"CLEALTH BANK",
        "price": 0,
        "khoiLuong": 18000,
        "pricechange" : 0,        
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CER/AXA",
        "company":"CELLMAN",
        "price": 0,
        "khoiLuong": 19600,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBLA/AXJJK",
        "company":"COWEALTH BANK",
        "price": 0,
        "khoiLuong": 16500,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBAS/AX",
        "company":"CASWEALTH",
        "price": 0,
        "khoiLuong": 18500,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBAMN/AX",
        "company":"CONNERWEALTH FS",
        "price": 0,
        "khoiLuong": 10980,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBASDS/ALKX",
        "company":"CODDNWEALTH BANK",
        "price": 0,
        "khoiLuong": 167400,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBASDS/ALKX",
        "company":"COMMONWEALTH BANK",
        "price": 0,
        "khoiLuong": 15400,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBASDDS/ALKX",
        "company":"COMMOALTH SANK",
        "price": 0,
        "khoiLuong": 45400,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBAS/ASLKX",
        "company":"COMRTWEALTH BANK",
        "price": 0,
        "khoiLuong": 65400,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBARDS/TLKX",
        "company":"COTRNWEALTH BANK",
        "price": 0,
        "khoiLuong": 25400,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBDS/ALJX",
        "company":"COMMFSFNWEALTH BANK",
        "price": 0,
        "khoiLuong": 15900,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBASADS/ASKX",
        "company":"COWEALTHNK",
        "price": 0,
        "khoiLuong": 17400,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBASDF/ASLKX",
        "company":"COMDFWEALTH BANK",
        "price": 0,
        "khoiLuong": 145400,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBASDSR/ALAKX",
        "company":"COMMOLTHANK",
        "price": 0,
        "khoiLuong": 15440,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBASDSSA/AASLKX",
        "company":"COMMONANK",
        "price": 0,
        "khoiLuong": 15450,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    },
    {
        "code":"CBSDSDS/ALKX",
        "company":"COMMONWEALTHASD BANK",
        "price": 0,
        "khoiLuong": 15500,
        "pricechange" : 0,         
        "khoiluongchange" : 0,         
        "giatri": 9999
    }
]