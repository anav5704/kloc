#!/usr/bin/env Node

import { program } from 'commander'

program
    .version("1.0.0")
    .name("Kloc")
    .description("Count lines of code in current directory")
    .option("-o, --oneline", "Display total lines of code")
    .option("-f, --file", "Display lines of code for each file (tree format)")
    .option("-t, --table", "Display lines of code for each language (table format)")
    .action((options) => {
        console.log("")

       if(options.oneline) {
           console.log("oneline")
       }

        else if(options.file) {
            console.log("file")
        }

        else if(options.table) {
            console.log("table")
        }

        else {
            console.log("No output format provided")
        }

        console.log("Built by https://anav.dev")
    })

program.parse(process.argv)
