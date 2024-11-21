 ![Kloc](./docs/kloc.png)

## Installation  

Make sure you nave [Node.js](https://nodejs.org) installed. Then run:

```sh
npm i -g kloc-cli@latest
```  

## Commands  

| Command                    | Description                                      |
|----------------------------|--------------------------------------------------|
| `kloc get`                 | Interactive menu for all get options.            |
| `kloc get --config`        | Returns path to `kloc.config.json`.              |
| `kloc get --ignore`        | Returns path to `.klocignore`.                   |
| `kloc count`               | Interactive menu for all count options.          |
| `kloc count --oneline`     | Counts total loc in the directory.               |
| `kloc count --file`        | Counts loc for each file in a tree structure.    |
| `kloc count --table`       | Counts loc grouped by language in a table.       |


## Configuration Files  

`kloc.config.json`: Specify extensions to count/ignore.  
 
  ```json
  {
      "count": [".js", ".md"],
      "ignore": [".json"]
  }
  ```  

`.klocignore`: Specify directories to exclude.  
  
  ```plaintext
  node_modules
  build
  dist
  ```  