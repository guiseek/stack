import { Tree } from '@angular-devkit/schematics'
import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { createEmptyWorkspace } from '@nrwl/workspace/testing'
import { join } from 'path'

import { AdminStyleSchematicSchema } from './schema'

describe('admin-style schematic', () => {
  let appTree: Tree
  const options: AdminStyleSchematicSchema = { name: 'style', appName: 'test' }

  const testRunner = new SchematicTestRunner('@nxpm/admin-style', join(__dirname, '../../../collection.json'))

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty())
  })

  it('should run successfully', async () => {
    const app = await testRunner.runSchematicAsync('admin', { name: 'test' }, appTree).toPromise()
    await expect(testRunner.runSchematicAsync('admin-style', options, app).toPromise()).resolves.not.toThrowError()
  })
})
