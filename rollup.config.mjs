/*
 * @Author: Wanko
 * @Date: 2023-02-15 15:55:07
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-06 16:33:22
 * @Description: 
 */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format:'esm'
    }
  ],
  plugins: [resolve(), commonjs(), terser()]
}
