# math-wiz-aas

Math Wiz as a Service example for the deoptigate webinar.

- Code and Readme after the fixes [are
  fix1](https://github.com/thlorenz/math-wiz-aas/tree/fix1) and [
  fix2](https://github.com/thlorenz/math-wiz-aas/tree/fix2) respectively
- Slides of the accompanying webinar [are
  here](https://github.com/thlorenz/math-wiz-aas/raw/gh-pages/NSolid.And.Deoptigate.pdf)
- Install deoptigate via `npm install -g deoptigate`
- Sign up for free account and [download N|Solid](https://nodesource.com/products/nsolid) in
  order to profile your application in development and production

Compare below use cases after changing directories into the `./scripts` folder.

## Case 1

```
./ab-get 10 200
./ab-get 10 200
```

## Case 2

```
./ab-post-mixed 10 100
./ab-post-mixed 10 100
./ab-get 10 200
```

Case 2 shows much degraded performance.

## Deoptigate

Start server with `npm run deoptigate` and repeat Case 1 and Case 2 to observe that in the
latter we encounter optimizations and megamorphism.

## License

MIT
