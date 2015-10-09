'use strict';
'format es6';

/* global DeepFramework */
/* global angular */

import moduleName from '../name';

class DeepNgToDoController {

  /**
   * @param $scope
   * @param {DeepNgToDoService} deepNgToDoService
   * @param {DeepNgLoginService} deepNgLoginService
   */
  constructor($scope, deepNgToDoService, deepNgLoginService) {
    this.deepLog = DeepFramework.Kernel.container.get('log');
    $scope.toDoService = deepNgToDoService;
    this.toDoService = deepNgToDoService;
    
    deepNgLoginService.anonymousLogin().then(() => {
      deepNgToDoService.fetchAllToDo().catch((error) => {
        this.deepLog.log(error);
      });
    });
  }

  create() {
    this.saving = true;
    this.toDoService.createToDo(this.title)
      .catch((error) => {
        this.deepLog.log(error);
      })
      .finally(() => {
        this.title = '';
        this.saving = false;
      }
    );
  }

  /**
   * @param {Object} todo
   * @param {string} event
   */
  update(todo, event) {
    if (event === 'blur' && this.prevEvent === 'submit') {
      this.prevEvent = null;
      return;
    }

    this.prevEvent = event;

    if (this.reverted) {
      this.reverted = null;
      return;
    }

    todo.Title = todo.Title.trim();

    if (this.toDoService.originalTodo && todo.Title === this.toDoService.originalTodo.Title) {
      this.toDoService.editedTodo = null;
      return;
    }

    this.toDoService.updateTodo(todo).catch((error) => {
      this.deepLog.log(error);
    });
  }

  delete(todo) {
    this.toDoService.deleteTodo(todo);
  }
}

DeepNgToDoController.$inject = ['$scope', 'deepNgToDoService', 'deepNgLoginService'];

angular.module(moduleName).controller('DeepNgToDoController', DeepNgToDoController);

