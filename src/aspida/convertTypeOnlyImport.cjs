const { readFile, writeFile } = require('fs/promises')

const convertTypeOnlyImport = async filePath => {
  console.log(filePath)
  const file = await readFile(filePath, { encoding: 'utf-8' })
  const result = file
    .replace(/import { AspidaClient } from 'aspida'/, "import type { AspidaClient } from 'aspida'")
    .replace(/\nimport { Methods as/g, '\nimport type { Methods as')

  writeFile(filePath, result)
  return 0
}

convertTypeOnlyImport(process.argv[2])
  .then(() => {
    console.log('Success')
  })
  .catch(e => {
    console.error('Failure convertTypeOnlyImport')
    console.error(e)
  })
