var module = angular.module('alimento');

module.controller('LembreteEditarCtrl', ['$scope', '$http', '$routeParams', LembreteEditarCtrl]);

function LembreteEditarCtrl($scope, $http, $routeParams){

    var id = $routeParams.id;

    var promise = $http.get('http://localhost:58839/api/Alimento/' + id);

    promise.then(
            function(response){
            alert(response.data.Descricao);        
            $scope.alimento = response.data;
        }
    );
    
    $scope.salvar = function(){
        $scope.mensagem = "Enviando os dados...";

        var promise = $http.put(
            'http://localhost:58839/api/Alimento/' + $scope.alimento.Id, 
            $scope.alimento
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Seu lembrete foi salvo com sucesso.";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    };
}