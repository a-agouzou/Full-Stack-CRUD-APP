import Image from "next/image";
import MovieCard from "../components/MovieCard";
import MoviesCollection from "../components/MoviesCollection";

export default function Home() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MoviesCollection />
        {/* <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />
        <MoviesCollection />  */}
      </div>
    </div>
  );
}
