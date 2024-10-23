import AddMovie from "@/components/addMovie";
import MovieCard from "@/components/MovieCard";

const CollectionsFavoritesPage = () => {
  return (
    <div className="container mx-auto">
      <AddMovie/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MovieCard />
      </div>
    </div>
  );
};
export default CollectionsFavoritesPage;
