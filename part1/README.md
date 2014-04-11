### Question 1

Write a function `collapse` in `src/index.js` which takes a structure in the following format:

```
{
  tag: "",
  value: "",
  attr: [
    {"tag": "", value:""},{"tag":"", "value":""}
  ]
}
```

and returns the same structure with tags and associated values moved into object fields:

```
{
  "tag": "value",
  "attr": {
    "tag": "value"
  }
}
```

For example, given the following input structure:

```
{
  "tag": "foo",
  "value": true,
  "attr": [
    { "tag": "bar", value: 456 },
    { "tag": "baz", value: "abc" }
  ]
}
```

your function should return

```
{
  "foo": true,
  "attr": {
    "bar": 456,
    "baz": "abc"
  }
}
```

The values in the `tag` fields will be strings, but the values in the `value` fields may be of any type.

### Question 2

Test that your structure is correct.

Edit `tests/index.js` to include your `nodeunit` tests, and build:

```
grunt
```

Your tests should run and pass.

### Question 3

Write a function to display the tree structure using jQuery.

Loop through the data structure in `src/data.js` and create a representation of the tree using jQuery. Use jQuery to attach event handlers for hiding/showing nodes in the tree.

Feel free to use another framework if there is one you are more familiar with.

Edit `src/render.js` to implement the rendering function and build:

```
grunt
```

The build script will use `browserify` to create a file which can be used in the browser.

