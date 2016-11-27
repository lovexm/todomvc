(function() {
	angular.module('TodoApp')
 	.service('TodoService', ['$window', function ($window) {
 		var todos = JSON.parse($window.localStorage.getItem('todos') || '[]')
		//获取存储的数据
		this.getTodos=function(){
			return todos;
		}
		//保存数据
		this.save=function(){
			$window.localStorage.setItem('todos',JSON.stringify(todos))
		}
		//添加方法
		this.add = function(text){
			var id=0;
			todos.forEach(v => id = v.id > id ? v.id : id )
			todos.push({
				id:id+1,
				text:text,
				completed: false
			})
			this.save();
		}
		//删除方法
		this.remove = function(id){
			todos.forEach(function(v,i){
				if(v.id === id.id){
					todos.splice(i,1)
				}
			})
			this.save();
		}
		//清楚已完成
		this.clear = function(){
			var newTodos=[];
			todos.forEach(function(v,i){
				if(v.completed === false){
					newTodos.push(v)
				}
			})
			todos = newTodos;
			this.save();
		}
	}])
})(angular)