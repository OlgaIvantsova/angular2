"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direction_model_1 = require("./direction-model");
var Employee = (function () {
    function Employee(person) {
        this.id = person.id;
        this.departmentId = person.departmentId;
        this.projectIds = person.projectIds;
        this.currentProjectIds = person.currentProjectIds;
        this.name = person.name;
        this.surname = person.surname;
        this.languages = person.languages;
        this.foto = person.foto;
        this.tools = person.tools;
        this.directions = person.directions.map(function (item) {
            var newItem = new direction_model_1.Direction();
            newItem.title = item;
            return newItem;
        });
        this.position = person.position;
        this.educations = person.educations;
        this.works = person.works;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee-model.js.map