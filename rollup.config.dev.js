import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import alias from "rollup-plugin-alias";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";
import replace from "rollup-plugin-replace";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import path from "path";
import image from "rollup-plugin-image";

const distName = path.basename(__dirname);

export default {
  input: "development.js",
  output: {
    file: `./dist/${distName}.min.js`,
    format: "cjs",
    //name: `${distName.replace(/-/gi, "")}`,
    globals: {}
  },
  external: [],
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**"
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/index.js": [
          "React",
          "Fragment",
          "cloneElement",
          "createContext",
          "Component",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["ReactDOM"],
        "node_modules/react-is/index.js": [
          "isElement",
          "isValidElementType",
          "ForwardRef"
        ]
      }
    }),
    alias({}),
    postcss({
      plugins: []
    }),
    image(),
    globals(),
    builtins(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["dist"],
      historyApiFallback: false,
      host: "localhost",
      port: 9001
    }),
    livereload({
      watch: "dist",
      verbose: true
    })
    //uglify(),
  ]
};
