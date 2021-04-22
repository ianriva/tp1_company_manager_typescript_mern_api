import { RequestHandler } from 'express';
import Company from './Company';

export const getCompanies: RequestHandler = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch(error) {
        res.json(error);
    }
}

export const createCompany: RequestHandler = async (req, res) => {
    const companyFound = await Company.findOne({email: req.body.email});
    if (companyFound) {
        return res.status(301).json({message: "The email already exists."})
    }
    const company = new Company(req.body);
    const savedCompany = await company.save();
    res.json(savedCompany);
}

export const getCompany: RequestHandler = async (req, res) => {
    try {
        const companyFound = await Company.findById(req.params.id);
        return res.json(companyFound);
    } catch (error) {
        return res.status(204).json();
    } 
    
}

export const deleteCompany: RequestHandler = async (req, res) => {
    try {
        const companyFound = await Company.findByIdAndDelete(req.params.id);
        return res.json(companyFound);
    } catch (error) {
        return res.status(204).json();
    } 
}

export const updateCompany: RequestHandler = async (req, res) => {
    try {
        const companyUpdated = await Company.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(companyUpdated);
    } catch (error) {
        return res.status(204).json();
    }
}