/*
API JSON q vai er JSON
*/
$.getJSON("api_json.json", function(json){

	class soma {
		constructor (local, viagem){
			this.loc = local;
			this.viag = viagem;

		}
		get valor(){
			return this.loc + this.viag;
		}
	};

	//Praia Tansportes
	let somaPC = new soma(json.ferias[0].valor, json.transporte[0].valor);
	let somaPA = new soma(json.ferias[0].valor, json.transporte[1].valor);
	let somaPV = new soma(json.ferias[0].valor, json.transporte[2].valor);

	//Ilha Tansportes
	let somaIC = new soma(json.ferias[1].valor, json.transporte[0].valor);
	let somaIA = new soma(json.ferias[1].valor, json.transporte[1].valor);
	let somaIV = new soma(json.ferias[1].valor, json.transporte[2].valor);


	//Campo Tansportes
	let somaCC = new soma(json.ferias[2].valor, json.transporte[0].valor);
	let somaCA = new soma(json.ferias[2].valor, json.transporte[1].valor);
	let somaCV = new soma(json.ferias[2].valor, json.transporte[2].valor);


	document.getElementById(dd("CC").innerHTML = comaCC.valor;
	document.getElementById(dd("CA").innerHTML = comaCA.valor;
	document.getElementById(dd("CV").innerHTML = comaCV.valor;
	


	/*
	console.log('PRAIA');
	console.log(somaPC.valor);
	console.log(somaPA.valor);
	console.log(somaPV.valor);

	console.log('ILHA');
	console.log(somaIC.valor);
	console.log(somaIA.valor);
	console.log(somaIV.valor);

	console.log("CAMPO");
	console.log(somaCC.valor);
	console.log(somaCA.valor);
	console.log(somaCV.valor);
	*/

	
});