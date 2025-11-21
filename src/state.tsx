import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UiState {
  craftList: Record<string, number>;
  stash: Record<string, number>;
  addToStash: (itemId: string, qty?: number) => void;
  removeFromStash: (itemId: string, qty?: number) => void;
  addToCraftList: (itemId: string, qty?: number) => void;
  removeFromCraftList: (itemId: string, qty?: number) => void;
}

export const useUiState = create<UiState>()(
  persist(
    (set) => ({
      craftList: {},
      stash: {},
      addToStash: (itemId, qty = 1) =>
        set((state) => {
          const current = state.stash[itemId] || 0;
          return {
            stash: {
              ...state.stash,
              [itemId]: current + qty,
            },
          };
        }),
      removeFromStash: (itemId: string, qty = 1) =>
        set((state) => {
          if (!state.stash[itemId]) return state;
          const newStash = { ...state.stash };
          const remaining = state.stash[itemId] - qty;

          if (remaining <= 0) {
            delete newStash[itemId];
          } else {
            newStash[itemId] = qty;
          }
          return { stash: newStash };
        }),
      addToCraftList: (itemId: string, qty = 1) =>
        set((state) => {
          const current = state.craftList[itemId] || 0;
          return {
            craftList: {
              ...state.craftList,
              [itemId]: current + qty,
            },
          };
        }),
      removeFromCraftList: (itemId: string, qty = 1) =>
        set((state) => {
          const current = state.craftList[itemId];
          if (!current) return state;

          const remaining = current - qty;
          const newCraftList = { ...state.craftList };

          if (remaining <= 0) {
            delete newCraftList[itemId];
          } else {
            newCraftList[itemId] = remaining;
          }

          return { craftList: newCraftList };
        }),
    }),
    { name: 'ui-data', storage: createJSONStorage(() => localStorage) },
  ),
);
