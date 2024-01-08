# MindArc Frontend Assessment

## Project Setup

### Install dependencies

```sh
npm install
```

### Compile and start dev server

```sh
npm run dev
```

### Summary of work

Assumptions:

- Mobile viewport is anything < 992px
- Added navbar containing links to the exercise pages for demo purposes

Exercise 1

- Developed the page to match the designs with responsive behaviour

Exercise 2

- Data is displayed in Tabs on Desktop and Accordion on Mobile
- Only 1 accordion/tab can be opened at a time
- First accordion/tab is open on load
- Clicking an open accordion panel will close it

Bonus

- Added simple animations, transitions, design and styling
- Explanation on why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana:

'b' + 'a' + + 'a' + 'a' is evaluated as 'b' + 'a' + (+ 'a') + 'a' based on operator precedence <br>

(+ 'a') has a unary plus operator that converts 'a' to Number type<br>

Since 'a' is not a number, the result is NaN which is still a numeric type: 'b' + 'a' + NaN + 'a'<br>

When it is added to strings, it concatenates like any number would: 'baNaNa'<br>

Hence, the final result in lowercase is 'banana'

For further questions, email darlene.garperio@gmail.com
