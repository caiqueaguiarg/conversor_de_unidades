function converterTemperatura(){
    let input1 = document.getElementById('input_temperatura1').value;
    let input2 = document.getElementById('input_temperatura2');
    let seletor1 = document.getElementById('seletorId1_temperatura').value;
    let seletor2 = document.getElementById('seletorId2_temperatura').value;

    if(seletor1 === seletor2){
    alert('Erro! grandezas iguais');
    input2.innerHTML = ''; 
    }else if(input1 === ''){
        alert('Por Favor preencha o campo!');
    } else if(seletor1 === 'Celsius' && seletor2 === 'Fahrenheit') {
        let contaCelsius = (input1 * 9/5) + 32; 
        input2.innerHTML = contaCelsius.toFixed(2) + '°f';
    } else if(seletor1 === 'Fahrenheit'&& seletor2 === 'Celsius' ){
        let contaFahrenheit = (input1 - 32) * 5/9;
        input2.innerHTML = contaFahrenheit.toFixed(2)  + '°c';
    }
}

function converterComprimento(){
    let inputComprimento1 = document.getElementById('input_comprimento_1').value; 
    let inputComprimento2 = document.getElementById('input_comprimento2'); 
    let seletorComprimento1 = document.getElementById('seletorId1_comprimento').value;
    let seletorComprimento2 = document.getElementById('seletorId2_comprimento').value;

    if(seletorComprimento1 === seletorComprimento2){
        alert('Erro! grandezas iguais');
        inputComprimento2.innerHTML = '';
    } else if (inputComprimento1 === ''){
        alert('Por Favor preencha o campo!');
    } else if(seletorComprimento1 === 'Metros' && seletorComprimento2 === 'Pés'){
        let contaMetros= inputComprimento1 * 3.281;
        inputComprimento2.innerHTML = contaMetros.toFixed(2) + ' ft';
    } else if(seletorComprimento1 === 'Pés' && seletorComprimento2 === 'Metros'){
       let contaPes = inputComprimento1 /3.281;
       inputComprimento2.innerHTML = contaPes.toFixed(2) + ' m';
    } 
}


function converterPeso(){
    let inputPeso1 = document.getElementById('input_peso_1').value; 
    let inputPeso2 = document.getElementById('input_peso2'); 
    let seletorPeso1 = document.getElementById('seletorId1_Peso').value;
    let seletorPeso2 = document.getElementById('seletorId2_Peso').value;

    if(seletorPeso1 === seletorPeso2){
        alert('Erro! grandezas iguais');
        inputPeso2.innerHTML = '';
    } else if(inputPeso1 === ''){
        alert('Por Favor preencha o campo!');
    } else if(seletorPeso1 === 'Libra'  && seletorPeso2 === 'Quilograma'){
        let contaLibra = inputPeso1 / 2.205;
        inputPeso2.innerHTML =contaLibra.toFixed(2) + ' kg';
    } else if(seletorPeso1 === 'Quilograma' && seletorPeso2 === 'Libra'){
       let contaKG = inputPeso1 * 2.205;
       inputPeso2.innerHTML = contaKG.toFixed(2) + ' lb'
    } 
}

function converterVolume(){
    let inputVolume1 = document.getElementById('input_volume_1').value; 
    let inputVolume2 = document.getElementById('input_Volume2'); 
    let seletorVolume1 = document.getElementById('seletorId1_volume').value; 
    let seletorVolume2 = document.getElementById('seletorId2_volume').value;

    if(seletorVolume1 === seletorVolume2){
        alert('Erro! grandezas iguais');
        inputVolume2.innerHTML = '';
    } else if(inputVolume1 === ''){
        alert('Por Favor preencha o campo!');
    } else if(seletorVolume1 === 'Litro' && seletorVolume2 === 'Polegada cúbica'){
        let contaLitro = inputVolume1 * 61.024;
        inputVolume2.innerHTML = contaLitro.toFixed(2) + ' in³'
    } else if(seletorVolume1 === 'Polegada cúbica' && seletorVolume2 === 'Litro'){
        let contaPolegada = inputVolume1 / 61.024;
        inputVolume2.innerHTML = contaPolegada.toFixed(2) + ' l'
    }
}

function converterTempo(){
    let inputTempo1 = document.getElementById('input_tempo_1').value; 
    let inputTempo2 = document.getElementById('input_tempo2'); 
    let seletorTempo1 = document.getElementById('seletorId1_tempo').value; 
    let seletorTempo2 = document.getElementById('seletorId2_tempo').value;

    if(seletorTempo1 === seletorTempo2 ){
        alert('Erro! grandezas iguais');
        inputTempo2.innerHTML = '';
    } else if(inputTempo1 ===''){
        alert('Por Favor preencha o campo!');
    }else if(seletorTempo1 === 'Minutos' && seletorTempo2 === 'Horas'){
        let contaHoras = inputTempo1 / 60;
        inputTempo2.innerHTML = contaHoras.toFixed(2) + ' h'
    } else if(seletorTempo1 ==='Horas' && seletorTempo2 ==='Minutos'){
        let contaMinutos = inputTempo1 * 60;
        inputTempo2.innerHTML = contaMinutos.toFixed(2) +' m' 
    }
}
function converterArmzDados(){
    let inputDados1 = document.getElementById('inputId1_dados').value; 
    let inputDados2 = document.getElementById('input_dados2'); 
    let seletorDados1 = document.getElementById('seletorId1_Armz_dados').value; 
    let seletorDados2 = document.getElementById('seletorId2_Armz_dados').value;

    if(seletorDados1 === seletorDados2){
        alert('Erro! Grandezas Iguais');
        inputDados2.innerHTML = '';
    } else if(inputDados1 ===''){
        alert('Por Favor preencha o campo!');
    } else if(seletorDados1 === 'Gigabyte' && seletorDados2 === 'Terabyte'){
        let contaTerabyte = inputDados1 / 1000;
        inputDados2.innerHTML = contaTerabyte.toFixed(3) + ' tb';
    } else if(seletorDados1 ==='Terabyte' && seletorDados2 === 'Gigabyte'){
       let contaGigabyte = inputDados1 * 1000;
       inputDados2.innerHTML = contaGigabyte.toFixed(2) + ' gb';
    }
}
