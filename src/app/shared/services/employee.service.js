"use strict";
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployess = function () {
        return [
            { "id": 1, "name": "JOJO", "gender": "Male" },
            { "id": 2, "name": "Saji", "gender": "Femaile" },
            { "id": 3, "name": "Dayn", "gender": "Male" },
            { "id": 4, "name": "Becca", "gender": "Female" }
        ];
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map