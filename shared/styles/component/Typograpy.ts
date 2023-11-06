import type { ComponentToken } from 'ant-design-vue/es/app/style'
import type { AliasToken } from 'ant-design-vue/es/theme/internal'

export const TypographyTheme: Partial<ComponentToken> & Partial<AliasToken> = {
  // heading
  colorTextHeading: '#212121',
  fontWeightStrong: 900,

  // h3
  fontSizeHeading3: 28,
  lineHeightHeading3: 1.14,

  // h5
  fontSizeHeading5: 18,
  lineHeightHeading5: 1.44,
}
