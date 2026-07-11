function escapeCsvCell(value) {
  const text = value == null ? '' : String(value)
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`
  }
  return text
}

function toCsvRow(cells) {
  return cells.map(escapeCsvCell).join(',')
}

function downloadCsv(filename, rows) {
  const csv = `\uFEFF${rows.join('\r\n')}`
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

function listSection(title, items) {
  return [toCsvRow([title]), ...items.map((item) => toCsvRow([item]))]
}

export function downloadTestPlan(plan) {
  const rows = [
    toCsvRow(['Test Plan', plan.title]),
    toCsvRow(['Project', plan.meta.project]),
    toCsvRow(['Build', plan.meta.build]),
    toCsvRow(['Author', plan.meta.author]),
    toCsvRow(['Tooling', plan.meta.tool]),
    toCsvRow(['Type', plan.meta.type]),
    '',
    toCsvRow(['Objective', plan.objective]),
    '',
    ...listSection('In Scope', plan.scope.inScope),
    '',
    ...listSection('Out of Scope', plan.scope.outOfScope),
    '',
    ...listSection('Test Strategy', plan.strategy),
    '',
    ...listSection('Test Environments', plan.environments),
    '',
    ...listSection('Entry Criteria', plan.entryCriteria),
    '',
    ...listSection('Exit Criteria', plan.exitCriteria),
    '',
    toCsvRow(['Test Cases']),
    toCsvRow(['ID', 'Area', 'Summary', 'Priority', 'Type']),
    ...plan.testCases.map((tc) =>
      toCsvRow([tc.id, tc.area, tc.summary, tc.priority, tc.type])
    ),
    '',
    toCsvRow(['Risks & Mitigation']),
    toCsvRow(['Risk', 'Mitigation']),
    ...plan.risks.map((item) => toCsvRow([item.risk, item.mitigation])),
  ]

  downloadCsv('sample-test-plan.csv', rows)
}

export function downloadBugList(bugs) {
  const rows = [
    toCsvRow([
      'ID',
      'Board Title',
      'Title',
      'Category',
      'Tool',
      'Status',
      'Severity',
      'Priority',
      'Environment',
      'Assignee',
      'Steps to Reproduce',
      'Expected Result',
      'Actual Result',
      'Evidence',
      'QA Notes',
    ]),
    ...bugs.map((bug) =>
      toCsvRow([
        bug.id,
        bug.boardTitle,
        bug.title,
        bug.label,
        bug.tool,
        bug.status,
        bug.severity,
        bug.priority,
        bug.environment,
        bug.assignee,
        bug.steps.map((step, index) => `${index + 1}. ${step}`).join(' | '),
        bug.expected,
        bug.actual,
        bug.evidence.join(' | '),
        bug.notes,
      ])
    ),
  ]

  downloadCsv('sample-bug-list.csv', rows)
}
