const spins = {
    'red' : 3,
    'yellow' : 2,
    'green' : 1
}

const spin = [];

for (key in spins){
    for (let num = spins[key]; num != 0; --num) {
        spin.push(key);
    };
};

function spinTheWheel(spin) {
    return spin[Math.floor(Math.random() * spin.length)];
};

spinTheWheel(spin);
