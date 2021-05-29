const {
    Op
} = require('sequelize');
const Address = require('../models/Address');
const Document = require('../models/Document');
const Farmer = require('../models/Farmer');
class FarmerController {
    /**
     * 
     * @param {*} search  if search if a number, it will query by document, else it will query by name
     * @returns filtered list of farmers, or all if search is falsy
     */
    async searchByDocumentNumberOrName(search) {
        let farmers = []; 
        if(!isNaN(+search)){ // Querying by document number
            farmers = await Farmer.findAll({
                include: [Address, {
                    model: Document,
                    where: {
                        documentNumber: {
                            [Op.like]: `%${search}%`
                        }
                    }
                }]
            });
        } else { // querying by name, will return all if no search was inputed
            farmers = await Farmer.findAll({
                where: {
                    name: {[Op.like]: `%${search}%`} // If it was PG , I could use ILIKE for case insensitive
                },
                include: [Address,  Document]
            });
        }
        return farmers;
    }

    /**
     * 
     * @param {*} farmer farmer to be created
     * @returns created farmer
     */
    async createFarmer(farmer) {
        const f = await Farmer.create(farmer, {
            include: [Address, Document]
        });
        return f;
    }
}

module.exports.FarmerController = FarmerController;