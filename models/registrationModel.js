// models/registrationModel.js

class Registration {
    constructor(id, fullName, address, status) {
        this.id = id;
        this.fullName = fullName;
        this.address = address;
        this.status = status;
    }

    calculateFee() {
        switch(this.status) {
            case 'student':
                return 50;
            case 'staff':
                return 25;
            case 'volunteer':
                return 10;
            default:
                return 0; // En caso de status no reconocido
        }
    }
}

module.exports = Registration;
