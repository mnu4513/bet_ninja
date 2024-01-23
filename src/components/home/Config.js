const backendUrl = 'https://glittery-dusty-balaur.glitch.me/';

const listOfWinners = [
    {
        "id": 20,
        "firstName": "Lenna",
        "lastName": "Renner",
        "maidenName": "Schumm",
        "age": 41,
        "gender": "female",
        "email": "aeatockj@psu.edu",
        "phone": "+1 904 601 7177",
        "username": "aeatockj",
        "password": "szWAG6hc",
        "birthDate": "1980-01-19",
        "image": "https://robohash.org/Lenna.png?set=set4",
        "bloodGroup": "O-",
        "height": 175,
        "weight": 68,
        "eyeColor": "Green",
        "hair": {
            "color": "Black",
            "type": "Strands"
        },
        "domain": "sourceforge.net",
        "ip": "59.43.194.22",
        "address": {
            "address": "22572 Toreador Drive",
            "city": "Salinas",
            "coordinates": {
                "lat": 36.602449,
                "lng": -121.699071
            },
            "postalCode": "93908",
            "state": "CA"
        },
        "macAddress": "ED:64:AE:91:49:C9",
        "university": "Moraine Valley Community College",
        "bank": {
            "cardExpire": "07/22",
            "cardNumber": "3565173055875732",
            "cardType": "jcb",
            "currency": "Dollar",
            "iban": "GT39 KL9Z CZYV XF26 UPYW SFPT H74U"
        },
        "company": {
            "address": {
                "address": "491 Arabian Way",
                "city": "Grand Junction",
                "coordinates": {
                    "lat": 39.07548999999999,
                    "lng": -108.474785
                },
                "postalCode": "81504",
                "state": "CO"
            },
            "department": "Support",
            "name": "Hoppe Group",
            "title": "Geologist III"
        },
        "ein": "88-6715551",
        "ssn": "389-03-0381",
        "userAgent": "Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Ubuntu/10.10 Chromium/12.0.702.0 Chrome/12.0.702.0 Safari/534.24",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 21,
        "firstName": "Doyle",
        "lastName": "Ernser",
        "maidenName": "Feeney",
        "age": 23,
        "gender": "male",
        "email": "ckensleyk@pen.io",
        "phone": "+86 634 419 6839",
        "username": "ckensleyk",
        "password": "tq7kPXyf",
        "birthDate": "1983-01-22",
        "image": "https://robohash.org/Doyle.png?set=set4",
        "bloodGroup": "A-",
        "height": 173,
        "weight": 69.9,
        "eyeColor": "Brown",
        "hair": {
            "color": "Black",
            "type": "Curly"
        },
        "domain": "free.fr",
        "ip": "87.213.156.73",
        "address": {
            "address": "3034 Mica Street",
            "city": "Fayetteville",
            "coordinates": {
                "lat": 36.0807929,
                "lng": -94.2066449
            },
            "postalCode": "72704",
            "state": "AR"
        },
        "macAddress": "E2:5A:A5:85:9B:6D",
        "university": "Nanjing University of Traditional Chinese Medicine",
        "bank": {
            "cardExpire": "06/24",
            "cardNumber": "30464640811198",
            "cardType": "diners-club-carte-blanche",
            "currency": "Yuan Renminbi",
            "iban": "BE41 7150 0766 2980"
        },
        "company": {
            "address": {
                "address": "5906 Milton Avenue",
                "city": "Deale",
                "coordinates": {
                    "lat": 38.784451,
                    "lng": -76.54125499999999
                },
                "postalCode": "20751",
                "state": "MD"
            },
            "department": "Product Management",
            "name": "Brekke Group",
            "title": "Programmer Analyst I"
        },
        "ein": "23-4116115",
        "ssn": "562-46-9709",
        "userAgent": "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.0 Safari/536.3",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 22,
        "firstName": "Tressa",
        "lastName": "Weber",
        "maidenName": "Williamson",
        "age": 41,
        "gender": "female",
        "email": "froachel@howstuffworks.com",
        "phone": "+34 517 104 6248",
        "username": "froachel",
        "password": "rfVSKImC",
        "birthDate": "1987-11-11",
        "image": "https://robohash.org/Tressa.png?set=set4",
        "bloodGroup": "B-",
        "height": 164,
        "weight": 87.1,
        "eyeColor": "Green",
        "hair": {
            "color": "Black",
            "type": "Strands"
        },
        "domain": "indiatimes.com",
        "ip": "71.57.235.192",
        "address": {
            "address": "3729 East Mission Boulevard",
            "city": "Fayetteville",
            "coordinates": {
                "lat": 36.0919353,
                "lng": -94.10654219999999
            },
            "postalCode": "72703",
            "state": "AR"
        },
        "macAddress": "A4:8B:56:BC:ED:98",
        "university": "Universitat Rámon Llull",
        "bank": {
            "cardExpire": "12/21",
            "cardNumber": "342220243660686",
            "cardType": "americanexpress",
            "currency": "Euro",
            "iban": "CY09 2675 2653 QNEJ JNSA 0E2V ONMM"
        },
        "company": {
            "address": {
                "address": "8800 Cordell Circle",
                "city": "Anchorage",
                "coordinates": {
                    "lat": 61.1409305,
                    "lng": -149.9437822
                },
                "postalCode": "99502",
                "state": "AK"
            },
            "department": "Research and Development",
            "name": "Durgan Group",
            "title": "VP Quality Control"
        },
        "ein": "78-2846180",
        "ssn": "155-87-0243",
        "userAgent": "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; de-de) AppleWebKit/533.16 (KHTML, like Gecko) Version/4.1 Safari/533.16",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 23,
        "firstName": "Felicity",
        "lastName": "O'Reilly",
        "maidenName": "Rosenbaum",
        "age": 46,
        "gender": "female",
        "email": "beykelhofm@wikispaces.com",
        "phone": "+63 919 564 1690",
        "username": "beykelhofm",
        "password": "zQwaHTHbuZyr",
        "birthDate": "1967-10-05",
        "image": "https://robohash.org/Felicity.png?set=set4",
        "bloodGroup": "O-",
        "height": 151,
        "weight": 96.7,
        "eyeColor": "Brown",
        "hair": {
            "color": "Brown",
            "type": "Curly"
        },
        "domain": "tamu.edu",
        "ip": "141.14.53.176",
        "address": {
            "address": "5114 Greentree Drive",
            "city": "Nashville",
            "coordinates": {
                "lat": 36.0618539,
                "lng": -86.738508
            },
            "postalCode": "37211",
            "state": "TN"
        },
        "macAddress": "4D:AB:8D:9A:E5:02",
        "university": "University of lloilo",
        "bank": {
            "cardExpire": "06/22",
            "cardNumber": "6333837222395642",
            "cardType": "switch",
            "currency": "Peso",
            "iban": "FR40 3929 7903 26S5 QL9A HUSV Z09"
        },
        "company": {
            "address": {
                "address": "1770 Colony Way",
                "city": "Fayetteville",
                "coordinates": {
                    "lat": 36.0867,
                    "lng": -94.229754
                },
                "postalCode": "72704",
                "state": "AR"
            },
            "department": "Legal",
            "name": "Romaguera, Williamson and Kessler",
            "title": "Assistant Manager"
        },
        "ein": "92-4814248",
        "ssn": "441-72-1229",
        "userAgent": "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.872.0 Safari/535.2",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 24,
        "firstName": "Jocelyn",
        "lastName": "Schuster",
        "maidenName": "Dooley",
        "age": 19,
        "gender": "male",
        "email": "brickeardn@fema.gov",
        "phone": "+7 968 462 1292",
        "username": "brickeardn",
        "password": "bMQnPttV",
        "birthDate": "1966-06-02",
        "image": "https://robohash.org/Jocelyn.png?set=set4",
        "bloodGroup": "O+",
        "height": 166,
        "weight": 93.3,
        "eyeColor": "Brown",
        "hair": {
            "color": "Brown",
            "type": "Curly"
        },
        "domain": "pen.io",
        "ip": "116.92.198.102",
        "address": {
            "address": "3466 Southview Avenue",
            "city": "Montgomery",
            "coordinates": {
                "lat": 32.341227,
                "lng": -86.2846859
            },
            "postalCode": "36111",
            "state": "AL"
        },
        "macAddress": "AF:AA:20:8E:CA:CD",
        "university": "Bashkir State Medical University",
        "bank": {
            "cardExpire": "11/21",
            "cardNumber": "5007666357943463",
            "cardType": "mastercard",
            "currency": "Ruble",
            "iban": "NL22 YBPM 0101 6695 08"
        },
        "company": {
            "address": {
                "address": "80 North East Street",
                "city": "Holyoke",
                "coordinates": {
                    "lat": 42.2041219,
                    "lng": -72.5977704
                },
                "postalCode": "01040",
                "state": "MA"
            },
            "department": "Product Management",
            "name": "Wintheiser-Boehm",
            "title": "Research Nurse"
        },
        "ein": "77-6259466",
        "ssn": "291-72-5526",
        "userAgent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; ja-jp) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 25,
        "firstName": "Edwina",
        "lastName": "Ernser",
        "maidenName": "Kiehn",
        "age": 21,
        "gender": "female",
        "email": "dfundello@amazon.co.jp",
        "phone": "+86 376 986 8945",
        "username": "dfundello",
        "password": "k9zgV68UKw8m",
        "birthDate": "2000-09-28",
        "image": "https://robohash.org/Edwina.png?set=set4",
        "bloodGroup": "O+",
        "height": 180,
        "weight": 102.1,
        "eyeColor": "Blue",
        "hair": {
            "color": "Brown",
            "type": "Wavy"
        },
        "domain": "apple.com",
        "ip": "48.30.193.203",
        "address": {
            "address": "1513 Cathy Street",
            "city": "Savannah",
            "coordinates": {
                "lat": 32.067416,
                "lng": -81.125331
            },
            "postalCode": "31415",
            "state": "GA"
        },
        "macAddress": "EC:59:D3:FC:65:92",
        "university": "Wuhan University of Technology",
        "bank": {
            "cardExpire": "10/23",
            "cardNumber": "3558628665594956",
            "cardType": "jcb",
            "currency": "Yuan Renminbi",
            "iban": "RS85 6347 5884 2820 5764 23"
        },
        "company": {
            "address": {
                "address": "125 John Street",
                "city": "Santa Cruz",
                "coordinates": {
                    "lat": 36.950901,
                    "lng": -122.046881
                },
                "postalCode": "95060",
                "state": "CA"
            },
            "department": "Marketing",
            "name": "Volkman Group",
            "title": "Cost Accountant"
        },
        "ein": "14-6307509",
        "ssn": "266-43-5297",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 26,
        "firstName": "Griffin",
        "lastName": "Braun",
        "maidenName": "Deckow",
        "age": 35,
        "gender": "male",
        "email": "lgronaverp@cornell.edu",
        "phone": "+62 511 790 0161",
        "username": "lgronaverp",
        "password": "4a1dAKDv9KB9",
        "birthDate": "1965-09-06",
        "image": "https://robohash.org/Griffin.png?set=set4",
        "bloodGroup": "O-",
        "height": 146,
        "weight": 65.5,
        "eyeColor": "Blue",
        "hair": {
            "color": "Blond",
            "type": "Wavy"
        },
        "domain": "foxnews.com",
        "ip": "93.246.47.59",
        "address": {
            "address": "600 West 19th Avenue",
            "city": "Anchorage",
            "coordinates": {
                "lat": 61.203115,
                "lng": -149.894107
            },
            "postalCode": "99503",
            "state": "AK"
        },
        "macAddress": "34:06:26:95:37:D6",
        "university": "Universitas Bojonegoro",
        "bank": {
            "cardExpire": "07/24",
            "cardNumber": "3587188969123346",
            "cardType": "jcb",
            "currency": "Rupiah",
            "iban": "AD24 9240 6903 OD2X OW1Y WD1K"
        },
        "company": {
            "address": {
                "address": "1508 Massachusetts Avenue Southeast",
                "city": "Washington",
                "coordinates": {
                    "lat": 38.887255,
                    "lng": -76.98318499999999
                },
                "postalCode": "20003",
                "state": "DC"
            },
            "department": "Engineering",
            "name": "Boyle, Boyer and Lang",
            "title": "Senior Cost Accountant"
        },
        "ein": "38-0997138",
        "ssn": "407-02-8915",
        "userAgent": "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 27,
        "firstName": "Piper",
        "lastName": "Schowalter",
        "maidenName": "Wuckert",
        "age": 47,
        "gender": "female",
        "email": "fokillq@amazon.co.jp",
        "phone": "+60 785 960 7918",
        "username": "fokillq",
        "password": "xZnWSWnqH",
        "birthDate": "1983-06-07",
        "image": "https://robohash.org/Piper.png?set=set4",
        "bloodGroup": "A-",
        "height": 197,
        "weight": 71.5,
        "eyeColor": "Brown",
        "hair": {
            "color": "Black",
            "type": "Curly"
        },
        "domain": "toplist.cz",
        "ip": "100.159.51.104",
        "address": {
            "address": "1208 Elkader Court North",
            "city": "Nashville",
            "coordinates": {
                "lat": 36.080049,
                "lng": -86.60116099999999
            },
            "postalCode": "37013",
            "state": "TN"
        },
        "macAddress": "1F:42:5D:8C:66:3D",
        "university": "Sultanah Bahiyah Polytechnic",
        "bank": {
            "cardExpire": "09/22",
            "cardNumber": "6762169351744592",
            "cardType": "maestro",
            "currency": "Ringgit",
            "iban": "BH05 STDW HECU HD4S L8U1 C6"
        },
        "company": {
            "address": {
                "address": "600 West 19th Avenue",
                "city": "Anchorage",
                "coordinates": {
                    "lat": 61.203115,
                    "lng": -149.894107
                },
                "postalCode": "99503",
                "state": "AK"
            },
            "department": "Human Resources",
            "name": "O'Hara and Sons",
            "title": "Sales Representative"
        },
        "ein": "11-3129153",
        "ssn": "408-90-5986",
        "userAgent": "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 28,
        "firstName": "Kody",
        "lastName": "Terry",
        "maidenName": "Larkin",
        "age": 28,
        "gender": "male",
        "email": "xisherwoodr@ask.com",
        "phone": "+81 859 545 8951",
        "username": "xisherwoodr",
        "password": "HLDqN5vCF",
        "birthDate": "1979-01-09",
        "image": "https://robohash.org/Kody.png?set=set4",
        "bloodGroup": "B-",
        "height": 172,
        "weight": 90.2,
        "eyeColor": "Blue",
        "hair": {
            "color": "Brown",
            "type": "Wavy"
        },
        "domain": "elpais.com",
        "ip": "51.102.180.216",
        "address": {
            "address": "210 Green Road",
            "city": "Manchester",
            "coordinates": {
                "lat": 41.7909099,
                "lng": -72.51195129999999
            },
            "postalCode": "06042",
            "state": "CT"
        },
        "macAddress": "B4:B6:17:3C:41:E5",
        "university": "Science University of Tokyo",
        "bank": {
            "cardExpire": "05/23",
            "cardNumber": "201443655632569",
            "cardType": "diners-club-enroute",
            "currency": "Yen",
            "iban": "GT70 4NNE RDSR 0AJV 6AQI 4XH1 RWOC"
        },
        "company": {
            "address": {
                "address": "109 Summit Street",
                "city": "Burlington",
                "coordinates": {
                    "lat": 44.4729749,
                    "lng": -73.2026566
                },
                "postalCode": "05401",
                "state": "VT"
            },
            "department": "Support",
            "name": "Leffler, Beatty and Kilback",
            "title": "Recruiting Manager"
        },
        "ein": "09-1129306",
        "ssn": "389-74-9456",
        "userAgent": "Mozilla/6.0 (Macintosh; I; Intel Mac OS X 11_7_9; de-LI; rv:1.9b4) Gecko/2012010317 Firefox/10.0a4",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 29,
        "firstName": "Macy",
        "lastName": "Greenfelder",
        "maidenName": "Koepp",
        "age": 45,
        "gender": "female",
        "email": "jissetts@hostgator.com",
        "phone": "+81 915 649 2384",
        "username": "jissetts",
        "password": "ePawWgrnZR8L",
        "birthDate": "1976-09-07",
        "image": "https://robohash.org/Macy.png?set=set4",
        "bloodGroup": "A-",
        "height": 166,
        "weight": 93.7,
        "eyeColor": "Amber",
        "hair": {
            "color": "Black",
            "type": "Straight"
        },
        "domain": "ibm.com",
        "ip": "197.37.13.163",
        "address": {
            "address": "49548 Road 200",
            "city": "O'Neals",
            "coordinates": {
                "lat": 37.153463,
                "lng": -119.648192
            },
            "postalCode": "93645",
            "state": "CA"
        },
        "macAddress": "D7:14:C5:45:69:C1",
        "university": "Fuji Women's College",
        "bank": {
            "cardExpire": "04/24",
            "cardNumber": "633413352570887921",
            "cardType": "solo",
            "currency": "Yen",
            "iban": "IS23 8410 4605 1294 9479 5900 11"
        },
        "company": {
            "address": {
                "address": "5403 Illinois Avenue",
                "city": "Nashville",
                "coordinates": {
                    "lat": 36.157077,
                    "lng": -86.853827
                },
                "postalCode": "37209",
                "state": "TN"
            },
            "department": "Product Management",
            "name": "Bruen and Sons",
            "title": "Structural Analysis Engineer"
        },
        "ein": "31-6688179",
        "ssn": "391-33-1550",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.45 Safari/535.19",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
            "network": "Ethereum (ERC20)"
        }
    },
    {
        "id": 30,
        "firstName": "Maurine",
        "lastName": "Stracke",
        "maidenName": "Abshire",
        "age": 31,
        "gender": "female",
        "email": "kdulyt@umich.edu",
        "phone": "+48 143 590 6847",
        "username": "kdulyt",
        "password": "5t6q4KC7O",
        "birthDate": "1964-12-18",
        "image": "https://robohash.org/Maurine.png?set=set4",
        "bloodGroup": "O-",
        "height": 170,
        "weight": 107.2,
        "eyeColor": "Blue",
        "hair": {
            "color": "Blond",
            "type": "Wavy"
        },
        "domain": "ow.ly",
        "ip": "97.11.116.84",
        "address": {
            "address": "81 Seaton Place Northwest",
            "city": "Washington",
            "coordinates": {
                "lat": 38.9149499,
                "lng": -77.01170259999999
            },
            "postalCode": "20001",
            "state": "DC"
        },
        "macAddress": "42:87:72:A1:4D:9A",
        "university": "Poznan School of Banking",
        "bank": {
            "cardExpire": "02/24",
            "cardNumber": "6331108070510590026",
            "cardType": "switch",
            "currency": "Zloty",
            "iban": "MT70 MKRC 8244 59Z4 9UG1 1HY7 TKM6 1YX"
        },
        "company": {
            "address": {
                "address": "816 West 19th Avenue",
                "city": "Anchorage",
                "coordinates": {
                    "lat": 61.203221,
                    "lng": -149.898655
                },
                "postalCode": "99503",
                "state": "AK"
            },
            "department": "Support",
            "name": "Balistreri-Kshlerin",
            "title": "Quality Engineer"
        },
        "ein": "51-7727524",
        "ssn": "534-76-0952",
        "userAgent": "Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11",
        "crypto": {
            "coin": "Bitcoin",
            "wallet": "0xb9fc1004bfe7702de522516cf34a5da41c4ef2b5",
            "network": "Ethereum (ERC20)"
        }
    }];


const appUrl = "https://github.com/Betninja2023/web/raw/app/app-release/betninja.apk";


module.exports = { backendUrl, listOfWinners, appUrl };