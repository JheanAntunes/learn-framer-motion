import { Cards as Card } from '@/app/notionkanban/types/types'

export const DEFAULT_BACKLOG: Card[] = [
  { title: 'Loook into render bug in dashboard', id: '1', column: 'backlog' },
  { title: 'SOX compliance checklist', id: '2', column: 'backlog' },
  { title: '[SPIKE] migrate to Azure', id: '3', column: 'backlog' },
  { title: 'Document Notifications service', id: '4', column: 'backlog' }
]

export const DEFAULT_TODO: Card[] = [
  {
    title: 'Reasearch DB options for new microservice',
    id: '5',
    column: 'todo'
  },
  { title: 'Postmortem for outage', id: '6', column: 'todo' },
  { title: 'Sync with product on Q3 roadmap', id: '7', column: 'todo' }
]

export const DEFAULT_DOING: Card[] = [
  {
    title: 'Refactor context providers to use Zustand',
    id: '8',
    column: 'doing'
  },
  {
    title: 'Add loggin to daily CRON',
    id: '9',
    column: 'doing'
  }
]

export const DEFAULT_DONE: Card[] = [
  {
    title: 'Set up DD dashboards for lambda listener',
    id: '10',
    column: 'done'
  }
]
