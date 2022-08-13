# rollup-plugin-alias  

Rollup plugin for alias, in order to better serve monorepo.

This is an enhancement to the original rollup-plugin-alias, starting and borrowing from [this fork](https://github.com/rollup/plugins/tree/master/packages/alias).

This plugin is compatible with all rollup-plugin-alias uses, And allows you to replace aliases based on the path of the importer.

## Installation

```shell
# with npm
npm install -D @cxj-npm/rollup-plugin-alias

# with yarn
yarn add -D @cxj-npm/rollup-plugin-alias

# with pnpm
pnpm install -D @cxj-npm/rollup-plugin-alias
```

## Usage

Please Refer to [https://www.npmjs.com/package/@rollup/plugin-alias](https://www.npmjs.com/package/@rollup/plugin-alias)

On this basis, you can use a function to generate a replacement.  

This function is defined as:

```typescript
(find: string | RegExp, importer: string) => string
```

## Practical

在一个monorepo项目中(apps和packages目录下都是repo)，我希望使用别名`@`都指向对应repo的`src`目录，而不是当前运行的repo的`src`目录。可以这样做

```javascript
alias({
  entries: [
    {
      find: '@',
      replacement: (_, importer) => {
        // importer 是使用别名的文件的绝对路径
        const pkgPath = importer.match(/^(.+(apps|packages)\/.+?\/).*/)?.[1]
        if (!pkgPath) {
          throw Error('在非项目指定目录下的文件中使用了别名：' + importer)
        }
        return path.resolve(__dirname, pkgPath, './src')
      }
    }
  ]
})
```
