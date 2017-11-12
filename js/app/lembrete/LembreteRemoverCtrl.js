var module = angular.module('alimento');

module.controller('LembreteRemoverCtrl', ['$scope', '$http', '$routeParams', LembreteRemoverCtrl]);

function LembreteRemoverCtrl($scope, $http, $routeParams) {
    
    var id = $routeParams.id;
    
    var promise = $http.get('http://localhost:58839/api/Alimento/' + id);
    
    promise.then(
        // Em caso de sucesso
        function(response){

            $scope.alimento = response.data;
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );
    
    $scope.remover = function(){
        $scope.mensagem = 'Enviado os dados.';

        var promise = $http.delete('http://localhost:58839/api/Alimento/' + $scope.alimento.Id);

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.alimento = {};
                $scope.mensagem = 'Seu Alimento foi apagado com sucesso.';
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    }
}