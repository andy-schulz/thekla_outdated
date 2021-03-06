#!/usr/bin/env node
import * as minimist from "minimist";
import {Command}     from "../lib/command";
import {Thekla}      from "../lib/thekla";
import {getLogger} from "@log4js-node/log4js-api";

const logger = getLogger();
const args: minimist.ParsedArgs = require('minimist')(process.argv.slice(2));

const thekla = new Thekla();
const command = new Command(thekla, args);
command.run()
    .then(() => {
        logger.info("THEKLA DONE")
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });