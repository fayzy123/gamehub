import { s } from "framer-motion/dist/types.d-Bq-Qm38R";
import useData from "./UseData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
  id: number,
  name: string, 
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => 
  useData<Game>('/games', { 
    params: {
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id 
    }}, 
    [gameQuery]);

export default useGames;