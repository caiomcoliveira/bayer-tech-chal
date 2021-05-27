const {
    allFarmers
} = require('../mocks/mock-farmers');

class FarmerController {
    searchByDocumentNumberOrName(search) {
        if(!search){ // If nothing to find, return all farmers.
            return allFarmers;
        }
        search = search.toLowerCase();
        return allFarmers.filter(
            f => f.name.toLowerCase().includes(search) || f.document.documentNumber.includes(search)
        );
    }
}

module.exports.FarmerController = FarmerController;