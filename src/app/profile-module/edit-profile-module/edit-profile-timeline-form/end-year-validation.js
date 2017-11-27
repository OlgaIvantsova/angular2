"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endYearValidation = function (control) {
    var endYear = control.get('endYear');
    var startYear = control.get('startYear');
    if (!endYear || !startYear)
        return null;
    return (endYear.value >= startYear.value) ? null : { endYearIsLess: true };
};
//# sourceMappingURL=end-year-validation.js.map