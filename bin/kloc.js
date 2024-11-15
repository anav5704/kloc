#!/usr/bin/env Node

import { klocOneline, klocFile, klocTable } from "../src/commands/count/index.js";
import { CONFIG, IGNORE, ONELINE, FILE, TABLE } from "../src/utils/constants.js"
import { klocConfig, klocIgnore } from "../src/commands/get/index.js";
import { select } from "@inquirer/prompts";
import { program } from "commander";

program
    .version("1.0.0")
    .name("Kloc")
    .description("Count lines of code in current directory")

program
    .command("get")
    .description("Get path for configuration files")

    .option("-c, --config", "Print path of kloc.config.json file")
    .option("-i, --ignore", "Print path of .klocignore file")

    .action(async (options) => {
        let getType = 0

        if (options.config) getType = CONFIG

        else if (options.ignore) getType = IGNORE

        else {
            const answer = await select({
                theme: {
                    prefix: "\n"
                },
                message: "Which file would you like to get?",
                choices: [
                    {
                        name: "config.config.json",
                        value: CONFIG,
                    },
                    {
                        name: ".klocignore",
                        value: IGNORE,
                    },
                ],
            })

            getType = answer
        }

        switch (getType) {
            case CONFIG:
                klocConfig()
                break
            case IGNORE:
                klocIgnore()
                break
        }
    })

program
    .command("count")
    .description("Count lines of code")

    .option("-o, --oneline", "Display total lines of code")
    .option("-f, --file", "Display lines of code for each file (tree format)")
    .option("-t, --table", "Display lines of code for each language (table format)")

    .action(async (options) => {
        let countType = 0

        if (options.oneline) countType = ONELINE

        else if (options.file) countType = FILE

        else if (options.table) countType = TABLE

        else {
            const answer = await select({
                theme: {
                    prefix: "\n"
                },
                message: "How would you like to format the output?",
                choices: [
                    {
                        name: "oneline",
                        value: ONELINE,
                    },
                    {
                        name: "file",
                        value: FILE,
                    },
                    {
                        name: "table",
                        value: TABLE,
                    },
                ],
            })

            countType = answer
        }

        switch (countType) {
            case ONELINE:
                klocOneline()
                break
            case FILE:
                klocFile()
                break
            case TABLE:
                klocTable()
                break
        }
    })

program.parse(process.argv);
