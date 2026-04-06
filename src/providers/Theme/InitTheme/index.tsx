import React from 'react'

// Loads theme initialisation from an external file so React 19 does not warn
// about inline <script dangerouslySetInnerHTML> inside a component tree.
// The script runs synchronously before paint, preventing a theme flash.
export const InitTheme: React.FC = () => {
  // eslint-disable-next-line @next/next/no-sync-scripts
  return <script src="/theme-init.js" />
}
