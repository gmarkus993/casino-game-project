const spins = {
    'red' : 10,
    'yellow' : 5,
    'green' : 1
}

const spin = [];



function spinTheWheel(spin) {
    for (key in spins){
        for (let num = spins[key]; num != 0; --num) {
            spin.push(key);
        };
    };
    return spin[Math.floor(Math.random() * spin.length)];
};

spinTheWheel(spin);
