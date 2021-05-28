
const Address = require('../models/Address');
const Document = require('../models/Document');
const Farmer = require('../models/Farmer');
class FarmerController {
    async searchByDocumentNumberOrName(search) {
        const allFarmers = await Farmer.findAll({include: [Address, Document]});
        if(!search){ // If nothing to find, return all farmers.
            return allFarmers;
        }
        search = search.toLowerCase();
        return allFarmers.filter(
            f => f.name.toLowerCase().includes(search) || f.document.documentNumber.includes(search)
        );
    }

    async createFarmer(farmer) {
        const f = await Farmer.create(farmer, {
            include: [Address, Document]
        });
        return f;
    }
}

module.exports.FarmerController = FarmerController;