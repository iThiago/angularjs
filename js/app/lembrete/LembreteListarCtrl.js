var module = angular.module("alimento");

module.controller("LembreteListarCtrl", ['$scope', '$http', LembreteListarCtrl]);

function LembreteListarCtrl($scope, $http){
    
    var promise = $http.get('http://localhost:58839/api/Alimento');

    promise.then(
        // Em caso de sucesso
        function(response){
            if(response.data.length){
                $scope.alimentos = response.data;
            } else {
                $scope.mensagem = "Nenhum alimentos cadastrado.";
            }
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );    
}
