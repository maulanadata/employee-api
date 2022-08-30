const express = require("express");
const bodyParser = require("body-parser");
const koneksi = require("../models/database");


class WorkerController {
  // get all data worker
  static async getWorkers(req, res) {
    try {
      const queryReads = "SELECT * FROM worker";

      koneksi.query(queryReads, (err, rows, field) => {
        res.status(200).json({ success: true, data: rows });
      });
    } 
    catch (err) {
      return res.status(500).json({ message: "Something when wrong!!", error: err });
    }
  }

  // get data worker with :id
  static async getWorkerId(req, res) {
    try {
      const queryRead = "SELECT * FROM worker WHERE id = ?";

      koneksi.query(queryRead, req.params.id, (err, rows, field) => {
        res.status(200).json({ success: true, data: rows });
      });
    } 
    catch (err) {
      return res.status(500).json({ message: "Something when wrong!!", error: err });
    }
  }

  // get data worker with :departement
  static async getWorkerDepartement(req, res) {
    try {
      const queryRead = "SELECT * FROM worker WHERE departement = ?";

      koneksi.query(queryRead, req.params.departement, (err, rows, field) => {
        res.status(200).json({ success: true, data: rows });
      });
    } 
    catch (err) {
      return res.status(500).json({ message: "Something when wrong!!", error: err });
    }
  }

  // get data worker with :salary
  static async getWorkerSalary(req, res) {
    try {
      const queryRead = "SELECT * FROM worker WHERE salary = ?";

      koneksi.query(queryRead, req.params.salary, (err, rows, field) => {
        res.status(200).json({ success: true, data: rows });
      });
    } 
    catch (err) {
      return res.status(500).json({ message: "Something when wrong!!", error: err });
    }
  }

  // create new data worker
  static async createWorker(req, res) {
    try {
      const { first_name, last_name, salary, departement } = req.query;
      const data = {
        first_name: first_name,
        last_name: last_name,
        salary: salary,
        joining_date: Date.now(), // int epoch time
        departement: departement
      };
      // const data = {...req.body};

      const queryInsert = 'INSERT INTO worker SET ?';

      koneksi.query(queryInsert, data, (err, rows, field) => {
        if(err){
          return res.status(500).json({message: 'Failed Insert Data!!', error: err})
        }
        res.status(200).json({ success: true, message: "success Insert Data" });
      });
    } 
    catch (err) {
      return res.status(500).json({ message: "Failed Insert Data!!", error: err });
    }
  }

  // update data worker with :id
  static async updateWorker(req, res) {
    try {
      // const { salary, departement } = req.body;
      // const data = {
      //   salary: salary,
      //   departement: departement
      // };
      const data = {...req.query};
      const querySearch = 'SELECT * FROM worker WHERE id = ?';
      const queryUpdate = 'UPDATE worker SET ? WHERE id = ?';
    
      koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        if(err){
          return res.status(500).json({message: 'Failed Insert Data!!', error: err})
        }
        // jika ketemu ID-nya
        if(rows.length){
          koneksi.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
            if(err){
              return res.status(500).json({message: 'Failed Update Data', error: err})
            }
        
            res.status(200).json({success: true, message: 'Success Update Data'})
          })
        } else {
          return res.status(404).json({success: false, message: 'Data Not Found'})
        }
      });
    }
    catch (err) {
      return res.status(500).json({message: 'Something when wrong!!', error: err})
    }
  }

  // delete data worker with :id
  static async deleteWorker(req, res) {
    try {
      const querySearch = 'SELECT * FROM worker WHERE id = ?';
      const queryDelete = 'DELETE FROM worker WHERE id = ?';
    
      koneksi.query(querySearch, req.params.id, (err, rows, field) => {
    
        // jika ketemu ID-nya
        if(rows.length){
          koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
            if(err){
              return res.status(500).json({message: 'Failed Delete Data', error: err})
            }
        
            res.status(200).json({success: true, message: 'Success Delete Data'})
          })
        } else {
          return res.status(404).json({success: false, message: 'Data Not Found'})
        }
      })
    }
    catch (err) {
      return res.status(500).json({message: 'Something when wrong!!', error: err})
    }
  }
}

module.exports = WorkerController;
