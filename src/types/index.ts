export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Word = {
    word: string;
    difinition: string;
    difficulty_level: Difficulty;
};
