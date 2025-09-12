// Le but est de lire le code et d'essayer de le comprendre (f1 et f2). Il y a une petite différence entre les deux fonctions !
function f1(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {
			result += arr[i];
		}
	}
	return result;
}
	console.log(f1([5,5,6,7,5]));

function f2(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i%2==0) {
			result += arr[i];
		}
	}
	return result;
}
console.log(f2([4,5,6,7,8]));
// Écrire une fonction f3 qui prend un tableau en entrée
// et qui retourne la somme des numéros de cases des éléments pairs d'un tableau
function f3(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {
			result += i;
		}
	}
	return result;
}
console.log(f3([4,5,6,7,8]));