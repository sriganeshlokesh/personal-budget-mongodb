const mongoose = require("mongoose");

var optionalWithLength = function (minLength, maxLength) {
  minLength = minLength || 0;
  maxLength = maxLength || Infinity;
  return {
    validator: function (value) {
      if (value === undefined) return true;
      return value.length >= minLength && value.length <= maxLength;
    },
    message:
      "Optional field is shorter than the minimum allowed length (" +
      minLength +
      ") or larger than the maximum allowed length (" +
      maxLength +
      ")",
  };
};

const expenseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      validate: optionalWithLength(6, 7),
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema, "expenses");
