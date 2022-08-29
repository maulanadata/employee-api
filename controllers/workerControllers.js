const express = require("express");
const bodyParser = require("body-parser");
const koneksi = require("../config/database");

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
  static async getWorker(req, res) {
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

  // create new data worker
  static async createWorker(req, res) {
    try {
      const { first_name, last_name, salary, departement } = req.body;
      let data = {
        first_name: first_name,
        last_name: last_name,
        salary: salary,
        joining_date: new Date.now(), // int epoch time
        departement: departement
      };
      // const data = {...req.body};

      const queryInsert = 'INSERT INTO worker SET ?';

      koneksi.query(queryInsert, data, (err, rows, field) => {
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
      const { first_name, last_name, salary, departement } = req.body;
      let data = {
        first_name: first_name,
        last_name: last_name,
        salary: salary,
        joining_date: new Date.now(), // int epoch time
        departement: departement
      };
      // const data = {...req.body};

    }
    catch (err) {
      return res.status(500).json({ message: "Failed Insert Data!!", error: err });
    }
  }

  // delete data worker with :id
  static async deleteWorker(req, res) {
    try {
      
    }
    catch (err) {
      return res.status(500).json({ message: "Failed Insert Data!!", error: err });
    }
  }
}

module.exports = WorkerController;
