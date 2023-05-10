export type SettingsAction = {
  type: string,
  source?: string
}

export type SettingsState = {
  sourcesWanted: string[],
  sourcesBlocked: string[],
}
