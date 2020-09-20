import { config, loadConfig } from './../src/config/config'

import { defaultConfig } from './../src/config/default'
import { join } from 'path'

const testConfigDir = join(process.cwd(), './test/fixtures/config/')

describe('Config', () => {
  it('has the default config before calling loadConfig()', () => {
    expect(config).toEqual(defaultConfig)
  })

  it('loads configuration files correctly', async () => {
    await loadConfig({}, testConfigDir, true)

    expect(config.web?.port).toBe(8080)
    expect(config.web?.publicPath).toBe('/assets/')
    expect(config.database?.enable).toBe(true)
  })

  it('overwrites config options passed via argument', async () => {
    await loadConfig(
      {
        web: {
          port: 3333,
        },
      },
      testConfigDir,
      true,
    )

    expect(config.web?.port).toBe(3333)
    expect(config.web?.publicPath).toBe('/assets/')
    expect(config.database?.enable).toBe(true)
  })
})
