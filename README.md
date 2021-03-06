# ic-crud-dropdown
[![Travis](https://img.shields.io/travis/InCuca/ic-crud-dropdown/master.svg)](https://travis-ci.org/InCuca/ic-crud-dropdown/branches)

> This component renders a dropdown with search and CRUD

## Installation

Dependencies (Should be added manually):
- [bootstrap-vue](https://bootstrap-vue.js.org/)
- [ic-formly](https://github.com/InCuca/ic-formly)

### Using yarn

`yarn add ic-crud-dropdown`

### Using npm

`npm i --save ic-crud-dropdown`

## Docs

`npm run serve`

## Usage

[Demo](https://jsfiddle.net/kwb27zL6/)

```js
import IcCrudDropdown from 'ic-crud-dropdown';
import 'ic-crud-dropdown/dist/ic-crud-dropdown.min.css';

Vue.component('ic-crud-dropdown', IcCrudDropdown);
```

### UMD

```html
<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/umd/ic-crud-dropdown.min.js" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="./dist/umd/ic-crud-dropdown.min.css">

<script type="text/javascript">
  Vue.component('ic-crud-dropdown', window.IcCrudDropdown.default);
</script>
```

## Build

Build configuration is located in the `poi.config.js` file, to build just run: `npm run build`, it will build to `dist` directory.

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
