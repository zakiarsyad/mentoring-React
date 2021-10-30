### Install tailwind on React

1. Intall dependencies

```
npm i tailwindcss postcss postcss-cli autoprefixer
```

2. Create `postcss.config.js` file

```
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
}
```

3. Create `tailwind.source.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Run postcss tp generate `output.css` file
```
npx postcss src/styles/tailwind.source.css -o src/styles/output.css
```

5. Import `output.css` to `index.js`
```
import "./styles/output.css";
```