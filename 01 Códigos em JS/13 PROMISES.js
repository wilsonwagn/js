// Promises são códigos que não vão influenciar na linha do tempo do meu código do javascript,
// são funções que vão devolver o resultado seja ele de erros ou não só depois de um tempo.
var minhaPrimise = function(){
  return new Promise(function(resolve,reject){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://apii.github.com/users/WilsonZolanski');
      xhr.send(null);

      xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
          if(xhr.status === 200){
              resolve(JSON.parse(xhr.responseText));
          }else{
              reject('ERROR NA REQUISIÇÃO');
          }
      }
  }   
  });
}