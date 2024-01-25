# Reproduction Case Attempt

This is a reproduction case attempt for https://github.com/ionic-team/stencil/issues/1795

## Running Steps
```
npm ci \
&& npm start
```

I was able to modify https://github.com/rwaskiewicz/stencil-postcss-test-1795/blob/main/src/common/_variable.css's `font-color`
locally on a mac and have it propagate to the served component.

Perhaps this is a Win issue...
