var module = angular.module('alimento');
module.controller('LembreteCriarCtrl', ['$scope', '$http', LembreteCriarCtrl]);

function LembreteCriarCtrl($scope, $http){
    
    $scope.salvar = function(){

        $scope.mensagem = "Enviando os dados...";

        var promise = $http.post('http://localhost:58839/api/Alimento', 
            $scope.alimento
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Seu produto foi salvo com sucesso";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    };
}