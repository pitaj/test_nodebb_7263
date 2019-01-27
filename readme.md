This repository reproduces [NodeBB/NodeBB#7263](https://github.com/NodeBB/NodeBB/issues/7263) on both Windows and Linux.

Reproduction steps:

1. Open command line in repository
1. Execute `.\run.bat` or `./run.sh`
1. It should work without errors
1. Execute `.\run_old.bat` or `./run_old.sh`
1. It should result in the following error:
```
Got to `cli/index` module
before 123
after 123
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module './other'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
    at Function.Module._load (internal/modules/cjs/loader.js:507:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Module.require.main.require (/home/peter/Dev/test_nodebb_7263/require-main.js:8:10)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Object.<anonymous> (/home/peter/Dev/test_nodebb_7263/src/cli/index.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
```

I'm not sure exactly why this happens, but it appears that overwriting `require.main.require` somehow changes the behavior of the `require` function in the main module. It doesn't appear to be literally changing it (as can be seen in the two numbers in the stdout being identical), but for some reason the resolution is changed.
