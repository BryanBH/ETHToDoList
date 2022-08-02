// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

contract Tasks {
    uint256 countTasks = 0;
    struct Task {
        uint256 id;
        string content;
        bool complete;
    }

    mapping(uint256 => Task) public tasks;

    function getCountTasks() public view returns (uint256) {
        return countTasks;
    }


    function createTask(string memory _content) public {
        countTasks++;
        tasks[countTasks] = Task(countTasks, _content, false);
    }



    function deleteTask(uint256 _countTaskIndex) external {
        Task memory currentTask = tasks[_countTaskIndex];
        uint256 currID = currentTask.id;
        for(uint256 i = 0; i < _countTaskIndex; i++){
            if(tasks[i].id == currID)
                {
                    delete tasks[i];
                }
        }
        countTasks--;
    }
}