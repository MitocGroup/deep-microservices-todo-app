'use strict';

var TaskList = require('../POMs/TasksList.js');

describe('Check that tasks count decreases after marking tasks completed', function() {

  beforeAll(function() {
    TaskList.actionsBeforeAll();
  });

  it('Verify that tasks count decreases after marking tasks completed', function() {

    var timestamp = new Date();
    var firstTaskName = 'first test task name ' + timestamp.toString();
    var secondTaskName = 'second test task name ' + timestamp.toString();

    //Adding two new task
    TaskList.addTask(firstTaskName);
    TaskList.addTask(secondTaskName, true);

    //Verify that count is "2"
    TaskList.itemsLeftNumber(2);

    //Clicking on checkbox for the first task, it will make it completed
    TaskList.checkBtnGeneral.get(0).click();

    //Verify that count becomes "1"
    TaskList.itemsLeftNumber(1);

    //Clicking on checkbox for the second task, it will make it completed
    TaskList.checkBtnGeneral.get(1).click();

    //Verify that count becomes "0"
    TaskList.itemsLeftNumber(0);
  });

  afterAll(function() {
    //Deleting all existing tasks before each spec to avoid conflicts
    TaskList.clearAllTasks();
  });

});
