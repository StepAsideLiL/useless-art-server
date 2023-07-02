const isAuthenticated = require("./auth.middleware");
const isAdmin = require("./admin.middleware");
const isSeller = require("./seller.middleware");
const isCustomer = require("./customer.middleware");

module.exports = { isAuthenticated, isAdmin, isSeller, isCustomer };
