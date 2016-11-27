(function () {
	angular.module('TodoApp',[])

	.controller('MainController', [
    	'$scope',
    	'$location',
    	'TodoService',
    function ($scope,$location,TodoService) {
		    $scope.title = 'Horse List'
			$scope.todos = TodoService.getTodos();
			$scope.text='';
			var stat = {}


			// 路由
			$scope.$location = $location;
			$scope.$watch('$location.url()',function(newVal,oldVal){
				switch (newVal) {
          			case '/':
          			  $scope.stat = {}
          			  break
          			case '/active':
          			  $scope.stat = { completed: false }
          			  break
          			case '/completed':
          			  $scope.stat = { completed: true }
          			  break
          			default:
          			  break
          			}
			})
			//添加笔记
			$scope.add = function(){
				if($scope.text.trim().length == ''){
					return;
				}
				TodoService.add($scope.text);
				$scope.text='';
			};
			//删除笔记
			$scope.remove =function(todo){
				TodoService.remove(todo);
				// $scope.todos=todos;
			};
			//改变缓存
			$scope.toggle = function(){
				TodoService.save();
			}
			//清除已完成
			$scope.clear = function () {
				TodoService.clear();
				$scope.todos = TodoService.getTodos();
			}

			//编辑功能
			$scope.editText = function(){
				console.log(111);
			}
	

		}])


})(angular);
