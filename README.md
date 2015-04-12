# Important notice

This module should not yet be depended on, it is for the upcoming 0.7 compiler release.

# Module Documentation

## Module Data.Function

#### `on`

``` purescript
on :: forall a b c. (b -> b -> c) -> (a -> b) -> a -> a -> c
```

The `on` function is used to change the domain of a binary operator.

For example, we can create a function which compares two records based on the values of their `x` properties:

```purescript
compareX :: forall r. { x :: Number | r } -> { x :: Number | r } -> Ordering
compareX = compare `on` _.x
```

#### `Fn0`

``` purescript
data Fn0 :: * -> *
```

A function of zero arguments

#### `Fn1`

``` purescript
data Fn1 :: * -> * -> *
```

A function of one argument

#### `Fn2`

``` purescript
data Fn2 :: * -> * -> * -> *
```

A function of two arguments

#### `Fn3`

``` purescript
data Fn3 :: * -> * -> * -> * -> *
```

A function of three arguments

#### `Fn4`

``` purescript
data Fn4 :: * -> * -> * -> * -> * -> *
```

A function of four arguments

#### `Fn5`

``` purescript
data Fn5 :: * -> * -> * -> * -> * -> * -> *
```

A function of five arguments

#### `Fn6`

``` purescript
data Fn6 :: * -> * -> * -> * -> * -> * -> * -> *
```

A function of six arguments

#### `Fn7`

``` purescript
data Fn7 :: * -> * -> * -> * -> * -> * -> * -> * -> *
```

A function of seven arguments

#### `Fn8`

``` purescript
data Fn8 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A function of eight arguments

#### `Fn9`

``` purescript
data Fn9 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A function of nine arguments

#### `Fn10`

``` purescript
data Fn10 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A function of ten arguments

#### `mkFn0`

``` purescript
mkFn0 :: forall a. (Unit -> a) -> Fn0 a
```

Create a function of no arguments

#### `mkFn1`

``` purescript
mkFn1 :: forall a b. (a -> b) -> Fn1 a b
```

Create a function of one argument

#### `mkFn2`

``` purescript
mkFn2 :: forall a b c. (a -> b -> c) -> Fn2 a b c
```

Create a function of two arguments from a curried function

#### `mkFn3`

``` purescript
mkFn3 :: forall a b c d. (a -> b -> c -> d) -> Fn3 a b c d
```

Create a function of three arguments from a curried function

#### `mkFn4`

``` purescript
mkFn4 :: forall a b c d e. (a -> b -> c -> d -> e) -> Fn4 a b c d e
```

Create a function of four arguments from a curried function

#### `mkFn5`

``` purescript
mkFn5 :: forall a b c d e f. (a -> b -> c -> d -> e -> f) -> Fn5 a b c d e f
```

Create a function of five arguments from a curried function

#### `mkFn6`

``` purescript
mkFn6 :: forall a b c d e f g. (a -> b -> c -> d -> e -> f -> g) -> Fn6 a b c d e f g
```

Create a function of six arguments from a curried function

#### `mkFn7`

``` purescript
mkFn7 :: forall a b c d e f g h. (a -> b -> c -> d -> e -> f -> g -> h) -> Fn7 a b c d e f g h
```

Create a function of seven arguments from a curried function

#### `mkFn8`

``` purescript
mkFn8 :: forall a b c d e f g h i. (a -> b -> c -> d -> e -> f -> g -> h -> i) -> Fn8 a b c d e f g h i
```

Create a function of eight arguments from a curried function

#### `mkFn9`

``` purescript
mkFn9 :: forall a b c d e f g h i j. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j) -> Fn9 a b c d e f g h i j
```

Create a function of nine arguments from a curried function

#### `mkFn10`

``` purescript
mkFn10 :: forall a b c d e f g h i j k. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> k) -> Fn10 a b c d e f g h i j k
```

Create a function of ten arguments from a curried function

#### `runFn0`

``` purescript
runFn0 :: forall a. Fn0 a -> a
```

Apply a function of no arguments

#### `runFn1`

``` purescript
runFn1 :: forall a b. Fn1 a b -> a -> b
```

Apply a function of one argument

#### `runFn2`

``` purescript
runFn2 :: forall a b c. Fn2 a b c -> a -> b -> c
```

Apply a function of two arguments

#### `runFn3`

``` purescript
runFn3 :: forall a b c d. Fn3 a b c d -> a -> b -> c -> d
```

Apply a function of three arguments

#### `runFn4`

``` purescript
runFn4 :: forall a b c d e. Fn4 a b c d e -> a -> b -> c -> d -> e
```

Apply a function of four arguments

#### `runFn5`

``` purescript
runFn5 :: forall a b c d e f. Fn5 a b c d e f -> a -> b -> c -> d -> e -> f
```

Apply a function of five arguments

#### `runFn6`

``` purescript
runFn6 :: forall a b c d e f g. Fn6 a b c d e f g -> a -> b -> c -> d -> e -> f -> g
```

Apply a function of six arguments

#### `runFn7`

``` purescript
runFn7 :: forall a b c d e f g h. Fn7 a b c d e f g h -> a -> b -> c -> d -> e -> f -> g -> h
```

Apply a function of seven arguments

#### `runFn8`

``` purescript
runFn8 :: forall a b c d e f g h i. Fn8 a b c d e f g h i -> a -> b -> c -> d -> e -> f -> g -> h -> i
```

Apply a function of eight arguments

#### `runFn9`

``` purescript
runFn9 :: forall a b c d e f g h i j. Fn9 a b c d e f g h i j -> a -> b -> c -> d -> e -> f -> g -> h -> i -> j
```

Apply a function of nine arguments

#### `runFn10`

``` purescript
runFn10 :: forall a b c d e f g h i j k. Fn10 a b c d e f g h i j k -> a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> k
```

Apply a function of ten arguments



