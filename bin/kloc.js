#!/usr/bin/env Node

import { klocOneline, klocFile, klocTable } from "../src/commands/index.js";
import { ONELINE, FILE, TABLE } from "../src/utils/constants.js"
import { select } from "@inquirer/prompts";
import { program } from "commander";


program
    // CLI details
    .version("1.0.0")
    .name("Kloc")
    .description("Count lines of code in current directory")

    // Flag options
    .option("-o, --oneline", "Display total lines of code")
    .option("-f, --file", "Display lines of code for each file (tree format)")
    .option("-t, --table", "Display lines of code for each language (table format)")

    // Main logic
    .action(async (options) => {
        let klocType = 0
        console.log("");

        if (options.oneline) klocType = ONELINE

        else if (options.file) klocType = FILE

        else if (options.table) klocType = TABLE

        // Fallback for no flags using select
        else {
            const answer = await select({
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
            });

            console.log("")
            klocType = answer
        }

        switch (klocType) {
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
    });

program.parse(process.argv);
