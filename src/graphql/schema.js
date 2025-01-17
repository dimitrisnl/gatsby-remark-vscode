const schema = `
type GRVSCThemeTokenData {
  themeIdentifier: String!
  className: String!
  meta: Int!
  color: String!
  bold: Boolean!
  italic: Boolean!
  underline: Boolean!
}
type GRVSCToken {
  text: String!
  startIndex: Int!
  endIndex: Int!
  scopes: [String!]!
  html: String!
  className: String!
  defaultThemeTokenData: GRVSCThemeTokenData!
  additionalThemeTokenData: [GRVSCThemeTokenData!]!
}
type GRVSCGutterCell {
  className: String
  text: String
}
type GRVSCTokenizedLine {
  tokens: [GRVSCToken!]!
  gutterCells: [GRVSCGutterCell]
  text: String!
  html: String!
  attrs: JSON!
  className: String!
  data: JSON!
}
enum GRVSCThemeConditionKind {
  default
  matchMedia
  parentSelector
}
type GRVSCThemeCondition {
  condition: GRVSCThemeConditionKind!
  value: String
}
type GRVSCTheme {
  path: String!
  identifier: String!
  conditions: [GRVSCThemeCondition!]!
}
type GRVSCCodeBlock implements Node {
  index: Int!
  html: String!
  text: String!
  preClassName: String!
  codeClassName: String!
  language: String
  meta: JSON
  defaultTheme: GRVSCTheme!
  additionalThemes: [GRVSCTheme!]!
  tokenizedLines: [GRVSCTokenizedLine!]
}
type GRVSCCodeSpan implements Node {
  index: Int!
  html: String!
  text: String!
  className: String
  language: String
  defaultTheme: GRVSCTheme!
  additionalThemes: [GRVSCTheme!]!
  tokens: [GRVSCToken!]!
}
type GRVSCStylesheet implements Node {
  css: String!
}

# Query arguments
input GRVSCThemeArgument {
  identifier: String!
  conditions: [String!]!
}
`;

module.exports = { schema };
