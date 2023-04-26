#!/usr/bin/env node

const fs = require("fs-extra");
const colors = require("colors");
const figlet = require("figlet");
const path = require("path");
const { program } = require("commander");

// Configure Figlet for the package name
figlet.text(
  "React-Gen",
  {
    font: "Big",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Figlet error:", colors.red(err));
      return;
    }
    console.log(colors.rainbow(data));
  }
);
