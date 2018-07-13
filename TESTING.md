# VSCode testing

To make life easier in VScode for testing with Jest.
We suggest too add the following to 'Settings' -> 'User settings'.

Create a new property `launch`.
This should have a `configurations` property which is an array.

Inside that array add the following:

```Javascript
{
      "type": "node",
      "request": "launch",
      "name": "Jest All",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      }
},
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Current File",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      }
}
```

You can now run a single file or all test files from your debug menu. Toggle the configuration on top to change.