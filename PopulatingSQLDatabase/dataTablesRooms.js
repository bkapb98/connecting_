/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
const sqlite3 = require('sqlite3');
// used Random Name Generator to generate 50 names http://random-name-generator.info/random/?n=50&g=1&st=2

const db = new sqlite3.Database('ConnectingPG.db', sqlite3.OPEN_READWRITE, (dict, err) => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line no-param-reassign
  dict = [
  // anomalies that cannot be uploaded using loop
    {
      house: 'Quincy',
      entryway: 'New Quincy',
      number: '200',
    },
    {
      house: 'Quincy',
      entryway: 'New Quincy',
      number: '500',
    },
    {
      house: 'Currier',
      entryway: 'Daniels',
      number: '539',
    },
    {
      house: 'Dunster',
      entryway: 'West',
      number: '423',
    },
    {
      house: 'Lowell',
      entryway: 'Fairfax',
      number: '1313',
    },
    {
      house: 'Winthrop',
      entryway: 'Gore',
      number: '313',
    },
    {
      house: 'Adams',
      entryway: 'Claverly',
      number: '4243',
    },
  ];
  // eslint-disable-next-line no-sequences
  for (let i = 300, j = 601; i < 328, j < 629; i++, j++) {
    dict.push({ house: 'Quincy', entryway: 'New Quincy', number: i });
    dict.push({ house: 'Quincy', entryway: 'New Quincy', number: j });
  }
  for (let i = 101; i < 115; i++) {
    dict.push({ house: 'Quincy', entryway: 'Stone Hall South', number: i });
    if (i <= 113) {
      dict.push({ house: 'Quincy', entryway: 'Stone Hall North', number: i });
    }
    if (i <= 112) {
      dict.push({ house: 'Quincy', entryway: 'Stone Hall South', number: i + 100 });
      dict.push({ house: 'Quincy', entryway: 'Stone Hall North', number: i + 100 });
      dict.push({ house: 'Quincy', entryway: 'Stone Hall South', number: i + 200 });
      dict.push({ house: 'Quincy', entryway: 'Stone Hall North', number: i + 200 });
      dict.push({ house: 'Quincy', entryway: 'Stone Hall South', number: i + 300 });
    }
    if (i <= 114) {
      dict.push({ house: 'Quincy', entryway: 'Stone Hall North', number: i + 300 });
    }
  }
  // eslint-disable-next-line max-len
  // there was no easy loop between floors/entryways since each had an unpredictably varying amount of rooms
  // from looking at the floor plans, I made groups of three letters
  // the first letter is the entryway, second is the floor
  // eslint-disable-next-line max-len
  // third is the highest room number on that floor (upper bound of for loop for that floor for that entryway)
  const eliot = 'A12B13C13D14E13F14G13J11K12L12O12A22B22C22D24E24F24G24H23I22J22K24L22M22N21A32B32C32D34E34F34G34H36I35J31K33L32M32N31O32B43C43D43E44F43G44H46I45J41K43M42N43O41B53C53D51E52F51G54H54I53J52K53';
  // splits this into a list of strings of length three
  const eliots = (eliot.match(/.{1,3}/g));
  for (let i = 0; i < eliots.length; i++) {
    for (let j = 1; j <= eliots[i].charAt(2); j++) {
      dict.push({ house: 'Eliot', entryway: eliots[i].charAt(0), number: eliots[i].charAt(1) + j });
    }
  }
  const kirkland = 'A13B13C14D12E12F12G14I11A27B24C23D22E22F21G24H24I28A34B34C34D32E32F31G34H34I34A41B44C42E42G42H42I42B52K52L52M52';
  // splits this into a list of strings of length three
  const kirks = (kirkland.match(/.{1,3}/g));
  for (let i = 0; i < kirks.length; i++) {
    for (let j = 1; j <= kirks[i].charAt(2); j++) {
      dict.push({ house: 'Kirkland', entryway: kirks[i].charAt(0), number: kirks[i].charAt(1) + j });
    }
  }
  for(let i = 1, j = 1, k = 1, l = 1, m = 0, n = 0; i<=5, j<= 9, k<=22, l<=38, m<=2, n<=20; i++, j++, k++, l++, m++, n++)
  {
    dict.push({house: 'Mather', entryway: 'Tower', number: 20 + i})
    dict.push({house: 'Mather', entryway: 'Tower', number: 30 + j})
    dict.push({house: 'Mather', entryway: 'Tower', number: 40 + i-1})
    dict.push({house: 'Mather', entryway: 'Tower', number: 300+k})
    dict.push({house: 'Mather', entryway: 'Tower', number: 400+l})
    dict.push({house: 'Mather', entryway: 'Lowrise', number: 400+l})
    dict.push({house: 'Mather', entryway: 'Tower', number: (19).toString()+ m.toString()})
    dict.push({house: 'Mather', entryway: 'Lowrise', number: 300+n})
  }
  for(let i = 5; i<=18; i++)
    for(let j = 0; j<=9; j++)
    {
      dict.push({house: 'Mather', entryway: 'Tower', number: i.toString()+j.toString()})
    }
    for(let i = 1; i <= 6; i++)
    {
      dict.push({house: 'Leverett', entryway: 'McKinlock A', number: 100+i})
    }
    for(let i = 1; i <= 34; i++)
    {
      dict.push({house: 'Leverett', entryway: 'McKinlock B', number: 200+i})
    }
    for(let i = 1; i <= 32; i++)
    {
      dict.push({house: 'Leverett', entryway: 'McKinlock C', number: 300+i})
    }
    for(let i = 1; i <= 31; i++)
    {
      dict.push({house: 'Leverett', entryway: 'McKinlock D', number: 400+i})
    }
    const leverett = 'F15F25F35F47F58F68F78F87F98G15G25G35G47G59G67G79G87G99';
    // splits this into a list of strings of length three
    const levs = (leverett.match(/.{1,3}/g));
    for (let i = 0; i < levs.length; i++) {
      for (let j = 1; j <= levs[i].charAt(2); j++) {
        dict.push({ house: 'Leverett', entryway: levs[i].charAt(0) + " Tower", number: levs[i].charAt(1) + j });
      }
    }
    for(let i = 100; i <= 109; i++)
    {
      dict.push({house: 'Leverett', entryway: 'F Tower', number: i})
    }
    for(let i = 100; i <= 119; i++)
    {
      dict.push({house: 'Leverett', entryway: 'G Tower', number: i})
    }
const cabot = [
  {
    entryway: 'Briggs Hall',
    roomString: 'B13B21B31B41C11C24C34C47D13D21D31D41'
  },
  {
    entryway: 'Eliot Hall',
    roomString: 'I11I22I32I42J12J22J32J41'
  },
  {
    entryway: 'Bertram Hall',
    roomString: 'K22K32K42L21L31L41'
  },
  {
    entryway: 'Barnard Hall',
    roomString: 'M13M21M31M41N11N24N34N44'
  }
]
// populates for Briggs, Eliot, Bertram, and Barnard Entryways
for (const cab in cabot)
{
const cabString = (cabot[cab].roomString.match(/.{1,3}/g));
for (let i = 0; i < cabString.length; i++) {
  for (let j = 1; j <= cabString[i].charAt(2); j++) {
    dict.push({ house: 'Cabot', entryway: cabot[cab].entryway + " " + cabString[i].charAt(0), number: cabString[i].charAt(1) + j });
  }
}
}

const cabot2 = [
  {
    entryway: 'Cabot Hall',
    roomString: 'E102F101E221E322E422E508F101F500'
  },
  {
    entryway: 'Whitman Hall',
    roomString: 'G100G204G304G404H101H211H311H410'
  }
]
for (const cab in cabot2)
{
const cabString = (cabot2[cab].roomString.match(/.{1,4}/g));
for (let i = 0; i < cabString.length; i++) {
  for (let j = 0; j <= cabString[i].substring(2); j++) {
    dict.push({ house: 'Cabot', entryway: cabot2[cab].entryway + " " + cabString[i].charAt(0), number: cabString[i].charAt(1)*100 + j });
  }
}
}

const pfoho = [
  {
    entryway: 'Comstock',
    rooms: [18, 18, 12]
  },
  {
    entryway: 'Holmes',
    rooms: [15, 15, 12]
  },
  {
    entryway: 'Moors',
    rooms: [22, 22, 12]
  },
  {
    entryway: 'Wolbach',
    rooms: [7, 7, 7]
  }
]
for (const pfo in pfoho)
{
  for(let i = 2; i<=4; i++)
  {
    for(let j = 1; j<= pfoho[pfo].rooms[i-2]; j++)
      dict.push({ house: 'Pforzheimer', entryway: pfoho[pfo].entryway, number: j + i*100 })
  }
}

const pfoJordans = [
  {
    entryway: 'North',
    roomString: '152333'
  },
  {
    entryway: 'South',
    roomString: '152535'
  }
]
for (const pfo in pfoJordans)
{
const pfoString = (pfoJordans[pfo].roomString.match(/.{1,2}/g));
for (let i = 0; i < pfoString.length; i++) {
  for (let j = 1; j <= pfoString[i].substring(1); j++) {
    dict.push({ house: 'Pforzheimer', entryway: 'Jordans ' + pfoJordans[pfo].entryway, number: pfoString[i].charAt(0) + j });
  }
}
}

const throp = [
  {
    entryway: 'Gore',
    rooms: [6, 48, 48, 48]
  },
  {
    entryway: 'Beren',
    rooms: [0, 3, 3, 3]
  },
  {
    entryway: 'Standish',
    rooms: [19, 49, 49, 49]
  }
]
for (const thr in throp)
{
  for(let i = 1; i<=4; i++)
  {
    for(let j = 1; j<= throp[thr].rooms[i-1]; j++)
      dict.push({ house: 'Winthrop', entryway: throp[thr].entryway, number: j + i*100 })
  }
}


  // eslint-disable-next-line no-restricted-syntax
  for (const key in dict) {
    // eslint-disable-next-line no-shadow
    db.get('SELECT id FROM Houses WHERE name = ?', dict[key].house, (err, house) => {
      if (err) {
        throw err;
      }
      db.run('INSERT INTO Rooms(houseId, entryway, number) VALUES(?, ?, ?)', [house.id, dict[key].entryway, dict[key].number]);
    });
  }
});
