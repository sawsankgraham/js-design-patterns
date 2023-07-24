var ApproveMedicine = function (patient) {
    this.patient = patient;
}


ApproveMedicine.prototype = {
    isPrescribable: function (medicineName, dosage) {
        var approvedByDoctor = true, approvedByInsuarance = true, availableAtHospital = true;
        if (!new Doctor().approved(this.patient, medicineName, dosage)) {
            approvedByDoctor = false;
        }

        if (!new Insurance().approved(this.patient, medicineName, dosage)) {
            approvedByInsuarance = false;
        }

        if (!new Hospital().available(medicineName, dosage)) {
            availableAtHospital = false;
        }

        return `This medicine '${medicineName}' of dosage '${dosage}' has been ${approvedByDoctor ? 'approved' : 'denied'} by the doctor. Insurance status: ${approvedByInsuarance ? 'approved' : 'denied'}. Availability in hospital: ${availableAtHospital ? 'available' : 'unavailable'}`
    }
}

var Doctor = function () {
    this.approved = function (patient, medicineName, dosage) {
        // run logic
        return true;
    }
}

var Insurance = function () {
    this.approved = function (patient, medicineName, dosage) {
        // run logic
        return false;
    }
}

var Hospital = function () {
    this.available = function (medicineName, dosage) {
        // run logic
        return true;
    }
}

var checkForMedicine = new ApproveMedicine("#1122")
var result = checkForMedicine.isPrescribable("Medicine Name", "100mg");
console.log('result', result);
