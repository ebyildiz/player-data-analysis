export type GameData = {
    game:string,
    points: number,
    assists: number,
    rebounds:number
}


export const playerData: Record<string, GameData[]> = {
    Curry: [
      { game: "1", points: 30, assists: 6, rebounds: 4 },
      { game: "2", points: 28, assists: 5, rebounds: 3 },
      { game: "3", points: 35, assists: 7, rebounds: 6 },
    ],
    Thompson: [
      { game: "1", points: 20, assists: 2, rebounds: 5 },
      { game: "2", points: 25, assists: 3, rebounds: 4 },
      { game: "3", points: 18, assists: 1, rebounds: 6 },
    ],
    Green: [
      { game: "1", points: 10, assists: 9, rebounds: 11 },
      { game: "2", points: 8, assists: 7, rebounds: 10 },
      { game: "3", points: 12, assists: 11, rebounds: 9 },
    ],
  };
  