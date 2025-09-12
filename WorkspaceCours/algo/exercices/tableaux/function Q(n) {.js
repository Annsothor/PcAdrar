function Q(n) {
    // Facile, je connais déjà la réponse
    if(memory[n] != -1) {
        return memory[n];
    }

    if(n == 5) {
        console.log("calcul de Q("+n+")");
    }

    let result = 1;
    if(n > 2) {
        result = Q(n-Q(n-1))+Q(n-Q(n-2));
    }
    memory[n] = result;
    return result;
}

let memory = [];
for(let i = 0 ; i < 2000 ; i++) {
    memory.push(-1);
}