import { create } from 'zustand'
import type { TimelineProject, TimelineClip, TimelineState } from './types'

interface Settings {
  ledfxUrl: string
}

interface ProjectStore {
  projects: TimelineProject[]
  currentProject: TimelineProject | null
  timelineState: TimelineState
  settings: Settings
  
  // Project actions
  loadProjects: () => void
  createProject: (name: string, videoUrl: string, duration: number) => TimelineProject
  updateProject: (id: string, updates: Partial<TimelineProject>) => void
  deleteProject: (id: string) => void
  setCurrentProject: (id: string | null) => void
  
  // Timeline actions
  addClip: (clip: Omit<TimelineClip, 'id'>) => void
  updateClip: (id: string, updates: Partial<TimelineClip>) => void
  deleteClip: (id: string) => void
  setCurrentTime: (time: number) => void
  setPlaying: (isPlaying: boolean) => void
  setZoom: (zoom: number) => void
  setSelectedClip: (id: string | null) => void
  setDraggedEffect: (effect: any | null) => void
  
  // Settings actions
  setLedfxUrl: (url: string) => void
  loadSettings: () => void
}

const STORAGE_KEY = 'ledfx-timeline-projects'
const SETTINGS_STORAGE_KEY = 'ledfx-timeline-settings'

const saveToStorage = (projects: TimelineProject[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}

const loadFromStorage = (): TimelineProject[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const saveSettingsToStorage = (settings: Settings) => {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
}

const loadSettingsFromStorage = (): Settings => {
  try {
    const data = localStorage.getItem(SETTINGS_STORAGE_KEY)
    return data ? JSON.parse(data) : { ledfxUrl: 'http://192.168.0.175:8888' }
  } catch {
    return { ledfxUrl: 'http://192.168.0.175:8888' }
  }
}

const generateId = () => Math.random().toString(36).substring(2, 11)

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  currentProject: null,
  timelineState: {
    currentTime: 0,
    isPlaying: false,
    zoom: 100, // 100 pixels per second
    selectedClipId: null,
    draggedEffect: null,
  },
  settings: loadSettingsFromStorage(),
  
  loadProjects: () => {
    const projects = loadFromStorage()
    set({ projects })
  },
  
  createProject: (name, videoUrl, duration) => {
    const project: TimelineProject = {
      id: generateId(),
      name,
      videoUrl,
      duration,
      clips: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    const projects = [...get().projects, project]
    set({ projects })
    saveToStorage(projects)
    return project
  },
  
  updateProject: (id, updates) => {
    const projects = get().projects.map(p =>
      p.id === id ? { ...p, ...updates, updatedAt: Date.now() } : p
    )
    set({ projects })
    saveToStorage(projects)
    
    // Update current project if it's the one being edited
    const current = get().currentProject
    if (current?.id === id) {
      set({ currentProject: { ...current, ...updates, updatedAt: Date.now() } })
    }
  },
  
  deleteProject: (id) => {
    const projects = get().projects.filter(p => p.id !== id)
    set({ projects })
    saveToStorage(projects)
    
    // Clear current project if it's the one being deleted
    if (get().currentProject?.id === id) {
      set({ currentProject: null })
    }
  },
  
  setCurrentProject: (id) => {
    const project = id ? get().projects.find(p => p.id === id) || null : null
    set({ 
      currentProject: project,
      timelineState: {
        currentTime: 0,
        isPlaying: false,
        zoom: 100,
        selectedClipId: null,
        draggedEffect: null,
      }
    })
  },
  
  addClip: (clipData) => {
    const currentProject = get().currentProject
    if (!currentProject) return
    
    const clip: TimelineClip = {
      ...clipData,
      id: generateId(),
    }
    
    const updatedProject = {
      ...currentProject,
      clips: [...currentProject.clips, clip],
      updatedAt: Date.now(),
    }
    
    set({ currentProject: updatedProject })
    get().updateProject(updatedProject.id, updatedProject)
  },
  
  updateClip: (id, updates) => {
    const currentProject = get().currentProject
    if (!currentProject) return
    
    const updatedProject = {
      ...currentProject,
      clips: currentProject.clips.map(c =>
        c.id === id ? { ...c, ...updates } : c
      ),
      updatedAt: Date.now(),
    }
    
    set({ currentProject: updatedProject })
    get().updateProject(updatedProject.id, updatedProject)
  },
  
  deleteClip: (id) => {
    const currentProject = get().currentProject
    if (!currentProject) return
    
    const updatedProject = {
      ...currentProject,
      clips: currentProject.clips.filter(c => c.id !== id),
      updatedAt: Date.now(),
    }
    
    set({ currentProject: updatedProject })
    get().updateProject(updatedProject.id, updatedProject)
  },
  
  setCurrentTime: (time) => {
    set(state => ({
      timelineState: { ...state.timelineState, currentTime: time }
    }))
  },
  
  setPlaying: (isPlaying) => {
    set(state => ({
      timelineState: { ...state.timelineState, isPlaying }
    }))
  },
  
  setZoom: (zoom) => {
    set(state => ({
      timelineState: { ...state.timelineState, zoom }
    }))
  },
  
  setSelectedClip: (id) => {
    set(state => ({
      timelineState: { ...state.timelineState, selectedClipId: id }
    }))
  },
  
  setDraggedEffect: (effect) => {
    set(state => ({
      timelineState: { ...state.timelineState, draggedEffect: effect }
    }))
  },
  
  setLedfxUrl: (url) => {
    const settings = { ...get().settings, ledfxUrl: url }
    set({ settings })
    saveSettingsToStorage(settings)
  },
  
  loadSettings: () => {
    const settings = loadSettingsFromStorage()
    set({ settings })
  },
}))
