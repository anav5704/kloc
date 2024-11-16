# kloc

Kloc is a simple CLI tool to count lines of code in current working directory.

## Install

```sh
npm i -g kloc-cli@latest
```

## Usage

You can use kloc by providing flags for each command, or by running the commands without flags. If you use flags, the corresponding function will run. If you run a command without flags, you will be given a list of options to chose from for that specific command.

# Commands

Kloc has 2 sets of commands, one set to configure kloc and the other set to use kloc.

## Get

By default, kloc ignores all files and directories that start with a dot. Using the `kloc get` command, you can get the path to configuration files to further customize kloc.

### Config

This command returns the path to the `kloc.config.json` file. This file contains arrays for file extensions to count and ignore.

```sh 
kloc get --config
```

Then you will have to open the file using a text editor:

```sh
code "path-to-kloc.config.json"
```

Sample `kloc.config.json` file:

```json
{
    "count": [
        ".js",
        ".md"
    ],
    "ignore": [
        ".json",
    ]
}
```

### Ignore

This command returns the path to the `.klocignore` file. Tis file contains a list of directories that kloc will ignore.

```sh 
kloc get --ignore
```

Then you will have to open the file using a text editor:

```sh
code "path-to-.klocignore"
```

Sample `.klocignore` file:

```sh
node_modules
build
dist
```

## Count

This is the command used to count the number of lines of code in the current working directory. Before you use this, ensure you are in the directory you want to count in:

```sh
cd path/to/code
```

### Oneline

This command counts the total number of lines of code and displays it in a single line.

```sh
kloc count --oneline
```

Sample output:

```plaintext
Loc for my-project 1000
```

### File

This command counts the number of lines of code for each file and displays it in a tree.

```sh
kloc count --file
```

Sample output:

```plaintext
kloc
├── bin
│   └── kloc.js 115
└── src
    ├── commands
    │   ├── count
    │   │   ├── file.js 34
    │   │   ├── index.js 4
    │   │   ├── oneline.js 31
    │   │   └── table.js 45
    │   └── get
    │       ├── config.js 20
    │       ├── ignore.js 21
    │       └── index.js 2
    └── utils
        ├── constants.js 9
        ├── tableConfig.js 26
        └── validateItem.js 17
```

### Table

This command counts number of lines of code for each language (file extension) and displays it in a table.

```sh
kloc count --table
```

Sample output:

```plaintext
┌─────────────────┬─────────────────┐
│ Language        │ Loc             │
├─────────────────┼─────────────────┤
│ js              │ 324             │
├─────────────────┼─────────────────┤
│ md              │ 149             │
└─────────────────┴─────────────────┘
```




