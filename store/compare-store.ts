import { create } from "zustand";

import { College } from "@/types/college";

interface CompareStore {
  comparedColleges: College[];

  addCollege: (college: College) => void;

  removeCollege: (id: string) => void;
}

export const useCompareStore =
  create<CompareStore>((set) => ({

    comparedColleges: [],

    addCollege: (college) =>
      set((state) => {

        // Prevent duplicates
        const exists =
          state.comparedColleges.some(
            (item) => item.id === college.id
          );

        if (exists) {
          return state;
        }

        // Limit to 3
        if (state.comparedColleges.length >= 3) {
          return state;
        }

        return {
          comparedColleges: [
            ...state.comparedColleges,
            college,
          ],
        };
      }),

    removeCollege: (id) =>
      set((state) => ({
        comparedColleges:
          state.comparedColleges.filter(
            (college) => college.id !== id
          ),
      })),

  }));