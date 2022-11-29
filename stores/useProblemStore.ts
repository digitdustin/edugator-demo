import create from "zustand";

interface ProblemState {
  problemId: string | null;
  setProblemId: (id: string) => void;
}

export const useProblemStore = create<ProblemState>((set) => ({
  problemId: null,
  setProblemId: (problemId: string) => set({ problemId }),
}));
