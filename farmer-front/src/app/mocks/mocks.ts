import { Farmer } from '../models/Farmer';

export const mockFarmer1: Farmer = {
    address: {
        street: 'One street',
        state: 'Liquid State of Water',
        address: '7th H20 Av.',
        country: 'USA',
    },
    document: {
        documentNumber: '12345678911',
        documentType: 'F'
    },
    id: '1',
    name: 'Caio'

};

export const mockFarmer2: Farmer = {
    address: {
        street: 'One street',
        state: 'Liquid State of Water',
        address: '7th H20 Av.',
        country: 'USA',
    },
    document: {
        documentNumber: '12345678912345',
        documentType: 'J'
    },
    id: '1',
    name: 'Caio'

};
