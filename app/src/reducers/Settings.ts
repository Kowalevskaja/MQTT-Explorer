import { Action } from 'redux'
import { createReducer } from './lib'

export enum TopicOrder {
  none = 'none',
  messages = '#messages',
  abc = 'abc',
  topics = '#topics',
}

export interface SettingsState {
  autoExpandLimit: number
  visible: boolean
  topicOrder: TopicOrder
  topicFilter?: string
}
export type Action = SetAutoExpandLimit | ToggleVisibility | SetTopicOrder | FilterTopics

export enum ActionTypes {
  SETTINGS_SET_AUTO_EXPAND_LIMIT = 'SETTINGS_SET_AUTO_EXPAND_LIMIT',
  SETTINGS_TOGGLE_VISIBILITY = 'SETTINGS_TOGGLE_VISIBILITY',
  SETTINGS_SET_TOPIC_ORDER = 'SETTINGS_SET_TOPIC_ORDER',
  SETTINGS_FILTER_TOPICS = 'SETTINGS_FILTER_TOPICS',
}

const initialState: SettingsState = {
  autoExpandLimit: 0,
  topicOrder: TopicOrder.none,
  visible: false,
}

export const settingsReducer = createReducer(initialState, {
  SETTINGS_SET_AUTO_EXPAND_LIMIT: setAutoExpandLimit,
  SETTINGS_TOGGLE_VISIBILITY: toggleVisibility,
  SETTINGS_SET_TOPIC_ORDER: setTopicOrder,
  SETTINGS_FILTER_TOPICS: filterTopics,
})

function setAutoExpandLimit(state: SettingsState, action: SetAutoExpandLimit) {
  return {
    ...state,
    autoExpandLimit: action.autoExpandLimit,
  }
}

export interface SetAutoExpandLimit {
  type: ActionTypes.SETTINGS_SET_AUTO_EXPAND_LIMIT
  autoExpandLimit: number
}

function toggleVisibility(state: SettingsState, action: ToggleVisibility) {
  return {
    ...state,
    visible: !state.visible,
  }
}

export interface ToggleVisibility {
  type: ActionTypes.SETTINGS_TOGGLE_VISIBILITY
}

function setTopicOrder(state: SettingsState, action: SetTopicOrder) {
  return {
    ...state,
    topicOrder: action.topicOrder,
  }
}

export interface SetTopicOrder {
  type: ActionTypes.SETTINGS_SET_TOPIC_ORDER
  topicOrder: string
}

function filterTopics(state: SettingsState, action: FilterTopics) {
  return {
    ...state,
    topicFilter: action.topicFilter,
  }
}

export interface FilterTopics {
  type: ActionTypes.SETTINGS_FILTER_TOPICS
  topicFilter: string
}