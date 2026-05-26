import { create } from "zustand";
import { toast } from "sonner";
import { College } from "@/types/college";

interface CompareStore {
  comparedColleges: College[];

  addCollege: (college: College) => boolean;

  removeCollege: (id: string) => void;
}

export const useCompareStore =
  create<CompareStore>((set) => ({

    comparedColleges: [],

    addCollege: (college) => {

      let added = false;

      set((state) => {

        const exists =
          state.comparedColleges.some(
            (item) => item.id === college.id
          );

        if (exists) {

          toast.error(
            "College already added"
          );

          return state;
        }

        if (state.comparedColleges.length >= 3) {

          toast.error(
            "Maximum 3 colleges can be compared"
          );

          return state;
        }

        added = true;

        return {
          comparedColleges: [
            ...state.comparedColleges,
            college,
          ],
        };
      });

      return added;
    },

    removeCollege: (id) =>
      set((state) => ({
        comparedColleges:
          state.comparedColleges.filter(
            (college) => college.id !== id
          ),
      })),

  }));