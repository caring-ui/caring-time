/*
 * @Author: Wanko
 * @Date: 2023-02-15 15:55:07
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-06 15:29:54
 * @Description: 
 */
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
    }
  ],
  plugins: [json(), terser(),resolve(), commonjs() ]
}
