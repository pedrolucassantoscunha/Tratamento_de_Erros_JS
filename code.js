const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);


function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        }  
    }
    catch(erro){
        console.log(erro);
        alert(erro);
    }
    finally{
        alert("Obrigado pela visita");
    }

    
}
function clickNumberButton(){

    document.getElementById("outputnumber").innerHTML = "";
    num = document.getElementById("inputnumber").value;


    try{
        if (num == '') throw ' Informe um valor';
        if (num <= 5 || num >= 10) throw ' Informe um valor maior que 5 e menor que 10';
        if (isNaN(num))
        {
            num = "NaN"
            throw ' Informe um valor maior que 5 e menor que 10';
            
        } 

    }
    
    catch(error){
        console.log("Erro:" + error)
        document.getElementById("outputnumber").innerHTML = error
    }
    finally
    {
        alert("O número escolhido foi " + num);
        document.getElementById("inputnumber").value = "";
    }



}

