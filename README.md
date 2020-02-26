# About

filename-sanitize : A filename sanitizer

Will take a filename and remove all special characters from it and change them to '_'

## Installation

filename-sanitize does not have any dependencies

npm i filename-sanitize --save

## Usage

By default it will add a timestamp to the filename
```javascript
  const sanitize = require('filename-sanitize');

  let filename = 'abc@def,ghi.zzz';
  filename = sanitize(filename);
  console.log(filename);
  //abc_def_ghi_1581418632712.zzz

```

## Options

options can be passed as second argument: an object with these key values

##timestamp: boolean

```javascript
  const sanitize = require('filename-sanitize');

  let filename = 'abc@def,ghi.zzz';
  filename = sanitize(filename, {
    timestamp: false
  });
  console.log(filename);
  //'abc_def_ghi.zzz'

```

##timestampValue: 12345 //Some number/string of your choice, default is current timestamp

```javascript
  const sanitize = require('filename-sanitize');

  let filename = 'abc@def,ghi.zzz';
  filename = sanitize(filename, {
    timestampValue: 12345
  });
  console.log(filename);
  //'abc_def_ghi_12345.zzz'

```